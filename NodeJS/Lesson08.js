const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Trang chu");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Gioi thieu");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Khong tim thay trang");
  }
});

server.listen(3000, function () {
  console.log("Server dang chay tai http://localhost:3000");
});

// http.createServer để tạo 1 máy chủ local tương tác với browser
// req (request) — thông tin từ client gửi đến (url, method, headers...)
// res (response) — server gửi trả lại cho client
