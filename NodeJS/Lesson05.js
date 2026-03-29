console.log("A");

setTimeout(function () {
  console.log("B");
  Promise.resolve().then(function () {
    console.log("C");
  });
}, 0);

Promise.resolve().then(function () {
  console.log("D");
  setTimeout(function () {
    console.log("E");
  }, 0);
});

console.log("F");

// Event loop để xử lý việc multi
//  task của javascript vì nó là single theard. Thứ tự ưu tiên thực hiện:
// code đồng bộ > micro queue > macrotask queu.
