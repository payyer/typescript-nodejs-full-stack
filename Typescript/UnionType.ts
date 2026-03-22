type Status = "active" | "inactive" | "banned";

type ID = string | number;

function printId(id: ID): void {
  console.log(`ID: ${id}`);
}

function getStatusMessage(status: Status): string {
  if (status === "active") return "Đang hoạt động";
  if (status === "inactive") return "Không hoạt động";
  return "Đã bị khóa";
}
printId(1);
printId("abc-123");
console.log(getStatusMessage("active"));

export {};

// ⚠️ CÁC TRƯỜNG HỢP ĐẶC BIỆT CẦN NHỚ
//
// 1. Không thể truyền value ngoài union — "deleted" không có trong Status → lỗi
//    getStatusMessage("deleted"); // ❌
//
// 2. TypeScript chỉ cho dùng method có ở TẤT CẢ các type trong union
//    const id: ID = 123;
//    id.toUpperCase(); // ❌ toUpperCase không có ở number
//
// 3. null trong union → TypeScript cảnh báo khi dùng method vì có thể là null
//    const test: string | null = null;
//    test.toString(); // ❌ test có thể null → phải kiểm tra trước

// ⚛️ ỨNG DỤNG THỰC TẾ TRONG REACT + TYPESCRIPT
// Union type được dùng phổ biến nhất trong React + TypeScript như sau:
//
// 1. Props có nhiều variant — component nhận 1 trong các giá trị cố định
//    type ButtonVariant = "primary" | "secondary" | "danger";
//    function Button({ variant }: { variant: ButtonVariant }) { ... }
//
// 2. State có thể null khi chưa load xong
//    const [user, setUser] = useState<User | null>(null);
//
// 3. API response có thể thành công hoặc lỗi
//    type Result = { data: User } | { error: string };
