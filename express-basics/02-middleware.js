const express = require("express");
const app = express();

// Middleware 1 - log mỗi request
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// Middleware 2 - thêm thời gian vào req
const addTime = (req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
};

// Đăng ký global middleware
app.use(logger);
app.use(addTime);

app.get("/", (req, res) => {
  res.json({ time: req.requestTime });
});

app.get("/admin", logger, (req, res) => {
  res.send("Admin page");
});

app.listen("3000", () => {
  console.log("Server running on port 3000");
});
