const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

let books = [
  { id: 1, title: "Node.js Basics" },
  { id: 2, title: "Express Guide" },
];

// Get all
app.get("/books", (req, res) => {
  return res.json({ data: books, message: "Sussess", statusCode: 200 });
});

// Get by id
app.get("/books/:id", (req, res) => {
  const findBook = books.find((book) => {
    return book.id === Number(req.params.id);
  });
  if (!findBook) throw new AppError("Book is not exsit", 404);
  return res.json({ data: findBook, message: "Sussess", statusCode: 200 });
});

// Create book
app.post("/books", (req, res) => {
  const { title } = req.body;
  if (!title) throw new AppError("Missing title", 400);
  const newId = Math.max(...books.map((book) => book.id)) + 1;
  const newBook = { id: newId, title };
  books.push(newBook);
  return res.json({
    data: books,
    message: "Create book success",
    statusCode: 201,
  });
});

// Update book by id
app.put("/books/:id", (req, res) => {
  let findBook = books.find((book) => {
    return book.id === Number(req.params.id);
  });
  if (!findBook) throw new AppError("Book is not exsit", 404);
  const { title } = req.body;
  if (!title) throw new AppError("Missing title", 400);
  findBook.title = title;
  return res.json({
    data: findBook,
    message: "Update success",
    statusCode: 200,
  });
});

// delete book by id
app.delete("/books/:id", (req, res) => {
  const findBook = books.find((book) => {
    return book.id === Number(req.params.id);
  });
  if (!findBook) throw new AppError("Book is not exsit", 404);
  books = books.filter((book) => {
    return book.id !== Number(req.params.id);
  });
  return res.json({
    data: books,
    message: "Delete book success",
    statusCode: 200,
  });
});

const errorHandler = (err, req, res, next) => {
  return res.json({
    data: null,
    message: err.message,
    statusCode: err.statusCode || 500,
  });
};

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
