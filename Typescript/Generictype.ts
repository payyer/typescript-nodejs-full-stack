// Generic type là 1 type chung kiểu giúp dynamic type,
// thay vì nếu ko có nó sẽ phải tạo lại nhiều mã với cùng 1 cấu trúc nhưng chỉ khác type,
// hoặc nếu dùng union type sẽ mất đi type safe khi compile code.

function identity<T>(value: T): T {
  return value;
}

const result1 = identity<string>("Hello");
const result2 = identity<number>(42);
const result3 = identity<boolean>(true);

interface Box<T> {
  value: T;
  label: string;
}

const numberBox: Box<number> = { value: 42, label: "age" };
const stringBox: Box<string> = { value: "hello", label: "name" };

interface DataResponse<T> {
  data: T[];
  status: number;
}
const response: DataResponse<string> = {
  data: ["Quoc Anh", "Rin"],
  status: 200,
};

// ===== ỨNG DỤNG TRONG REACT + TYPESCRIPT =====

// 1. useState<T> — khai báo type cho state
// const [user, setUser] = useState<User | null>(null);

// 2. API response typing
// async function fetchUsers(): Promise<DataResponse<User>> { ... }

// 3. Props với Generic — component tái sử dụng với nhiều type
// interface ListProps<T> { items: T[]; renderItem: (item: T) => ReactNode; }

export {};
