const fsPromises = require("fs").promises;

async function readFile() {
  try {
    const data = await fsPromises.readFile("hello.txt", "utf-8");
    console.log("Async/Await:", data);
  } catch (err) {
    console.log("Loi:", err.message);
  }
}

readFile();

console.log("Dong nay chay trước");

// Callback, Promise, async/ await đều là cách xử lý mã bất đồng bộ trong js.
// khác nhau về syntax
// ưu tiên async/await vì tính dễ đọc.
