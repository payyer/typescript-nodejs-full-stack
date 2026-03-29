const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "data.json");

async function writeData() {
  const users = [
    { name: "QuocAnh", age: 25 },
    { name: "Rin", age: 24 },
  ];
  await fs.writeFile(filePath, JSON.stringify(users, null, 2));
  console.log("Da ghi file");
}

async function readData() {
  const raw = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(raw);
  console.log(data);
}

async function main() {
  await writeData();
  await readData();
}

main();

// stringify để tạo object thành string ghi vào .json còn
//  partse để chuyện stirng thành object dùng code.
