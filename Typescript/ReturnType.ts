function getUser() {
  return { id: 1, name: "An", age: 25 };
}

// ReturnType lấy type trả về của getUser
type UserType = ReturnType<typeof getUser>;
// = {id: number, name: string, age: number};

const user: UserType = { id: 2, name: "Rin", age: 24 };
console.log(user);

export {};

// ⚠️ CÁC TRƯỜNG HỢP ĐẶC BIỆT CẦN NHỚ
//
// 1. Phải dùng typeof — ReturnType nhận TYPE của function, không phải function value
//    type Wrong = ReturnType<getUser>;         // ❌ getUser là value, không phải type
//    type Correct = ReturnType<typeof getUser>; // ✅ typeof chuyển value → type
//
// 2. TypeScript có 2 thế giới: value (tồn tại runtime) và type (chỉ tồn tại compile)
//    typeof là cầu nối từ value → type
//
// 3. ReturnType tự động cập nhật khi function thay đổi — không cần sửa type thủ công
//    → Thêm field vào return của getUser → UserType tự có field đó ngay

// ⚛️ ỨNG DỤNG THỰC TẾ TRONG REACT + TYPESCRIPT
// ReturnType<T> được dùng phổ biến nhất trong React + TypeScript như sau:
//
// 1. Lấy type từ API function — không cần định nghĩa lại type response thủ công
//    async function fetchUser() { return { id: 1, name: "An" }; }
//    type User = ReturnType<typeof fetchUser>; // tự đồng bộ khi fetchUser thay đổi
//
// 2. Lấy type từ custom hook — dùng lại type của những gì hook trả về
//    function useAuth() { return { user: null, login: () => {}, logout: () => {} }; }
//    type AuthState = ReturnType<typeof useAuth>;
//
// 3. Lấy type từ utility function — tránh duplicate type định nghĩa
//    function createTheme() { return { colors: { primary: "#000" }, spacing: 8 }; }
//    type Theme = ReturnType<typeof createTheme>;
