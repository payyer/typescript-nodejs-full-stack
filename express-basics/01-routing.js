const express = require("express");
const app = express();

// mock data
let books = [
  { id: 1, title: "Node.js basics" },
  { id: 2, title: "Express Guide" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Ruote params - lấy 1 user theo id
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Query strings - ví dụ /search?q=hello&page=2
app.get("/search", (req, res) => {
  const query = req.query.q;
  const page = req.query.page;
  res.json({ query, page });
});

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  if (!req.body.title)
    return res
      .status(400)
      .json({ code: 400, message: "Bạn cận nhập tiêu đề sách" });
  const newBook = { id: books.length + 1, title: req.body.title };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.delete("/books/:id", (req, res) => {
  const findBook = books.find((book) => book.id === Number(req.params.id));
  if (!findBook)
    return res
      .status(404)
      .json({ code: 404, message: "Sách không tồn tại để xóa" });
  books = books.filter((b) => b.id !== Number(req.params.id));
  res.status(200).json({ message: "Deleted" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
