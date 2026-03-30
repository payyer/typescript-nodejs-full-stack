const express = require("express");
const app = express();

// req.headers
app.get("/check-header", (req, res) => {
  const auth = req.headers.authorization;
  res.json({ authorization: auth || "No token" });
});

// res.redirect
app.get("/old-page", (req, res) => {
  res.redirect("/new-page");
});

app.get("/new-page", (req, res) => {
  res.send("Welcome to new page!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
