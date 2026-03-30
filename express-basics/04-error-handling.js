const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let books = [
  { id: 1, title: "Node.js Basics" },
  { id: 2, title: "Express Guide" },
];

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/error", (req, res) => {
  throw new Error("Something broke!");
});

app.get("/async-error", async (req, res) => {
  throw new Error("ASync broke");
});
// Error handling middleware - đặt cuối cùng, sau tất cả routes
const errorHandler = (err, req, res, next) => {
  console.log("Error", err.message);
  res.status(500).json({ message: err.message });
};

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
