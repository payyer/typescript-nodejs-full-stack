const fs = require("fs");
const path = require("path");
const os = require("os");

console.log(os.platform());
console.log(os.homedir());

const filePath = path.join(__dirname, "hello.txt");
fs.writeFileSync(filePath, "Hello from Nodejs!");

const content = fs.readFileSync(filePath, "utf-8");
console.log(content);

// fs dùng để doc và ghi file
// path để setup đường dẫ
// os để xem thông tin của hệ điều hành
// ReadFileSync chạy xog mói tới câu sau, readFile cần callback cuối để hứng kết quả
// utf dùng để byte buffer thành text
// path.join(__dirname) để tạo đường dẫn tuyệt đối
