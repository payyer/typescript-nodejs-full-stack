const _ = require("lodash");
const arr = [1, 2, 3, 4, 3];
console.log(_.uniq(arr));

// package.json viết lại các thông tin của nodejs, thư viện đang sử dụng
// packet-lock.jon ghi lại các phiên bản chính xác để người khác cài chính ác package mình cài
// node_modules nơi lưu trự mã của các thư viện đã cài.ko commit vì sẽ rất nằng, khi ai đó pull về chỉ cần npm i là có đủ
