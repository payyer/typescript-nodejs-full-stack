interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Bỏ password - giữ lại id, name, email
type UserPublic = Omit<User, "password">;

function sendToClient(user: UserPublic): void {
  console.log(user);
}

const publicUser: UserPublic = {
  id: 1,
  name: "Anh",
  email: "quocanh@gmail.com",
};
sendToClient(publicUser);

export {};

// ⚠️ CÁC TRƯỜNG HỢP ĐẶC BIỆT CẦN NHỚ
//
// 1. Không thể thêm field đã bị Omit vào object
//    const bad: UserPublic = { id: 1, name: "An", email: "...", password: "123" }; // ❌
//
// 2. Omit field KHÔNG tồn tại → KHÔNG báo lỗi (khác với Pick!)
//    type Wrong = Omit<User, "age">; // ✅ không lỗi, Wrong = User (không có gì để bỏ)
//    → Dùng khi không chắc field có tồn tại không, nhưng cẩn thận vì dễ gây nhầm
//
// 3. Pick vs Omit — khi nào dùng cái nào?
//    → Cần ít field (1-2): dùng Pick  — rõ ràng hơn
//    → Bỏ ít field (1-2): dùng Omit  — tiện hơn khi type có nhiều field

// ⚛️ ỨNG DỤNG THỰC TẾ TRONG REACT + TYPESCRIPT
// Omit<T, K> được dùng phổ biến nhất trong React + TypeScript như sau:
//
// 1. API response — bỏ field nhạy cảm trước khi trả về client
//    type UserPublic = Omit<User, "password" | "refreshToken">;
//    async function getUser(id: number): Promise<UserPublic> { ... }
//
// 2. Props component — bỏ field do component tự quản lý, không nhận từ ngoài
//    type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;
//    function Button(props: ButtonProps) { ... } // onClick do component tự handle
//
// 3. Extend type nhưng override 1 field — phải Omit trước rồi mới & thêm
//    type AdminUser = Omit<User, "role"> & { role: "admin" };
