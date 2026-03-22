type IsString<T> = T extends string ? "yes" : "no";

type A = IsString<string>;
type B = IsString<number>;
type C = IsString<"Hello">;
type H = IsString<string | number>;
type J = IsString<never>;

// Ví dụ thực tế hơn
type Flatten<T> = T extends Array<infer Item> ? Item : T;

type D = Flatten<string[]>; // string
type E = Flatten<number[]>; // number
type F = Flatten<string>; // string (không phải array → trả về chính nó)
type G = Flatten<(string | number)[]>;
type I = Flatten<string[][]>;

type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type K = GetReturnType<() => string>; // string
type L = GetReturnType<() => number[]>; // number[]
type M = GetReturnType<string>; // never

export {};

// ⚠️ CÁC TRƯỜNG HỢP ĐẶC BIỆT CẦN NHỚ
//
// 1. Distributive — union type bị phân phối từng phần
//    IsString<string | number> → IsString<string> | IsString<number> → "yes" | "no"
//
// 2. Flatten không đệ quy — chỉ bóc 1 lớp array
//    Flatten<string[][]> → string[] (không phải string)
//    Muốn bóc hết phải dùng recursive conditional type
//
// 3. Conditional type với never → never (tập rỗng phân phối ra vẫn là tập rỗng)
//    IsString<never> → never
//
// 4. infer chỉ dùng được trong extends của conditional type
//    GetReturnType = cách TypeScript implement ReturnType<T> có sẵn bên trong

// ⚛️ ỨNG DỤNG THỰC TẾ TRONG REACT + TYPESCRIPT
// Conditional type được dùng phổ biến nhất trong React + TypeScript như sau:
//
// 1. Tạo type linh hoạt theo props — type thay đổi dựa vào giá trị prop
//    type Props<T> = T extends "button" ? ButtonProps : InputProps;
//
// 2. Unwrap Promise type — lấy type bên trong Promise (chính là Awaited<T>)
//    type Unwrap<T> = T extends Promise<infer U> ? U : T;
//
// 3. Lọc type khỏi union — chỉ giữ lại type thỏa điều kiện
//    type OnlyString<T> = T extends string ? T : never;
//    type R = OnlyString<string | number | boolean>; // string
