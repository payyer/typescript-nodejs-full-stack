async function fetchUser() {
  return { id: 1, name: "An" };
}

// fetchUser trả về Promise<{id: number, name: string}>
// Awaited lấy type bên trong Promise đó
type User = Awaited<ReturnType<typeof fetchUser>>;
//  = {id: number, name: string}

const user: User = { id: 2, name: "Rin" };
console.log(user);

export {};

// ⚠️ CÁC TRƯỜNG HỢP ĐẶC BIỆT CẦN NHỚ
//
// 1. Thiếu Awaited khi dùng với async function → type là Promise<T>, không phải T
//    type Wrong = ReturnType<typeof fetchUser>;   // = Promise<{id, name}> — là "phong bì"
//    type Correct = Awaited<ReturnType<typeof fetchUser>>; // = {id, name} — là "lá thư"
//
// 2. Awaited với type không phải Promise → trả về chính type đó, không lỗi
//    type Test = Awaited<string>; // = string (không làm gì cả)
//
// 3. Awaited bóc hết tất cả lớp Promise lồng nhau — phản ánh đúng hành vi của await
//    type Nested = Awaited<Promise<Promise<number>>>; // = number (không phải Promise<number>)

// ⚛️ ỨNG DỤNG THỰC TẾ TRONG REACT + TYPESCRIPT
// Awaited<T> được dùng phổ biến nhất trong React + TypeScript như sau:
//
// 1. Lấy type từ async API call — type của data sau khi await
//    async function fetchPosts() { return await api.get<Post[]>("/posts"); }
//    type Posts = Awaited<ReturnType<typeof fetchPosts>>; // Post[]
//
// 2. Type cho useState khi fetch data — khớp với type thực tế sau khi resolve
//    type User = Awaited<ReturnType<typeof fetchUser>>;
//    const [user, setUser] = useState<User | null>(null);
//
// 3. Lấy type từ Promise.all — type của array kết quả sau khi tất cả resolve
//    const results = Promise.all([fetchUser(), fetchPosts()]);
//    type Results = Awaited<typeof results>;
