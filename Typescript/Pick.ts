interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Chi3 lay61 id va2 name - khong6 epose email, password
type UserPreview = Pick<User, "id" | "name">;

function displayUser(user: UserPreview): void {
  console.log(`${user.id}: ${user.name}`);
}

const preview: UserPreview = { id: 1, name: "Anh" };
displayUser(preview);

export {};

// ⚠️ CÁC TRƯỜNG HỢP ĐẶC BIỆT CẦN NHỚ
//
// 1. Không thể thêm field ngoài những field đã Pick
//    const bad: UserPreview = { id: 1, name: "An", email: "..." }; // ❌ email không được Pick
//
// 2. Không thể truy cập field không được Pick
//    preview.password // ❌ password doesn't exist in type UserPreview
//
// 3. Pick field không tồn tại trong T → lỗi ngay (khác với Omit!)
//    type Wrong = Pick<User, "id" | "age">; // ❌ age không có trong User

// ⚛️ ỨNG DỤNG THỰC TẾ TRONG REACT + TYPESCRIPT
// Pick<T, K> được dùng phổ biến nhất trong React + TypeScript như sau:
//
// 1. API response — chỉ trả về field cần thiết, ẩn thông tin nhạy cảm
//    type UserPublic = Pick<User, "id" | "name">;  // không trả password, email
//    async function getUser(id: number): Promise<UserPublic> { ... }
//
// 2. Props component — component chỉ nhận 1 phần của type lớn hơn
//    type AvatarProps = Pick<User, "name" | "email">;
//    function Avatar({ name, email }: AvatarProps) { ... }
//
// 3. Form chỉ edit một số field — không cần toàn bộ User
//    type EditProfileForm = Pick<User, "name" | "email">;
//    function EditProfile(data: EditProfileForm) { ... }
