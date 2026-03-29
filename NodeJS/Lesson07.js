require("dotenv").config();

console.log(process.env.PATH);
console.log(process.env.MY_NAME);

// .env dùng để lưu trữ các key quan trong,
//  khong public ra bên ngoài. dotenv dùng để xử lý env..
// Node.js không tự đọc file .env — cần dotenv để load biến từ file .env vào process.env.
// process.env luôn trả về string
