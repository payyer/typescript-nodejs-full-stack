const express = require("express");
const cors = require("cors");
const app = express();

// Cách 1 - cho phép tất cả origin (dùng khi dev)
app.use(cors());

// Cách 2 - chỉ cho phép domain cụ thể (dùng cho production)
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   }),
// );

app.get("/api/data", (req, res) => {
  res.json({ message: "CORS works!" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
