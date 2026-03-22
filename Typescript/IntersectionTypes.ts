type Person = {
  name: string;
  age: number;
};

type Emloyye = {
  company: string;
  salary: number;
};

type Staff = Person & Emloyye;

const staff: Staff = {
  name: "Anh",
  age: 25,
  company: "ABC Corp",
  salary: 1000,
};

console.log(staff);

export {};

// ⚠️ CÁC TRƯỜNG HỢP ĐẶC BIỆT CẦN NHỚ
//
// 1. Thiếu bất kỳ field nào trong Intersection → lỗi ngay
//    const bad: Staff = { name: "An", age: 25, company: "ABC" }; // ❌ thiếu salary
//
// 2. Field trùng tên nhưng khác type → field đó thành never → không thể gán gì vào
//    type A = { id: string }; type B = { id: number };
//    type C = A & B; → C.id có type never → không gán được string lẫn number
//
// 3. Intersection 2 primitive type mâu thuẫn → never
//    type D = string & number; // = never — không có giá trị nào vừa là string vừa là number

// ⚛️ ỨNG DỤNG THỰC TẾ TRONG REACT + TYPESCRIPT
// Intersection type được dùng phổ biến nhất trong React + TypeScript như sau:
//
// 1. Kết hợp Props — component nhận props từ nhiều nguồn
//    type ButtonProps = BaseProps & { onClick: () => void };
//
// 2. Extend type có sẵn mà không dùng interface extends
//    type AdminUser = User & { role: "admin"; permissions: string[] };
//
// 3. Mixin pattern — kết hợp nhiều behavior type lại
//    type Logger = { log: (msg: string) => void };
//    type Serializable = { serialize: () => string };
//    type Service = Logger & Serializable;
