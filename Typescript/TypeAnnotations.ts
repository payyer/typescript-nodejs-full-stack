// Annotations type để xác định chính xác type cho biến
// Trách các lỗi compile time
let age: number = 25;
let name: string = "QuocAnh";
let isActive: boolean = false;
let email: string = "quocanhle112@gmail.com";

function greet(username: string): string {
  return "Hello " + username;
}

// export này sẽ biến ts thành module
// tránh bị lỗi với let name vì global đã tồn tại name
export {};

// Ứng dụng
function isKid(age: number): boolean {
  if (age < 13) return true;
  return false;
}
