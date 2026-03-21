interface User {
  id: number;
  name: string;
  email: string;
}

// Partial<User> = {id:? number, name? : string, email?: string}
function updateUser(current: User, changes: Partial<User>): User {
  return { ...current, ...changes };
}

const user: User = { id: 1, name: "Anh", email: "quocanh@gmail.com" };
const updated = updateUser(user, { name: "QuocAnh" });

console.log(updated);

export {};

// ⚠️ CÁC TRƯỜNG HỢP ĐẶC BIỆT CẦN NHỚ
//
// 1. Không thể thêm field ngoài type gốc — Partial chỉ làm optional, không mở rộng type
//    updateUser(user, { name: "An", age: 25 }) // ❌ age không có trong User
//
// 2. Nếu đổi Partial<User> → User, bắt buộc phải truyền đủ tất cả field
//    function updateUser(current: User, changes: User) // ❌ { name: "An" } sẽ lỗi thiếu id, email
//
// 3. Partial<User> là subtype của User — object Required có thể gán vào Partial, không ngược lại

// ⚛️ ỨNG DỤNG THỰC TẾ TRONG REACT + TYPESCRIPT
// Partial<T> được dùng phổ biến nhất trong React + TypeScript như sau:
//
// 1. Update state một phần — không cần truyền lại toàn bộ state
//    const [user, setUser] = useState<User>({ id: 1, name: "An", email: "an@gmail.com" });
//    const handleUpdate = (changes: Partial<User>) => setUser(prev => ({ ...prev, ...changes }));
//
// 2. Props optional cho component — khi component có nhiều config nhưng không bắt buộc hết
//    interface ButtonProps { size: string; color: string; disabled: boolean; }
//    function Button(props: Partial<ButtonProps>) { ... }
//
// 3. Hàm fetch/patch API — PATCH request chỉ gửi field cần update, không gửi cả object
//    async function patchUser(id: number, data: Partial<User>) {
//      await fetch(`/api/users/${id}`, { method: "PATCH", body: JSON.stringify(data) });
//    }
