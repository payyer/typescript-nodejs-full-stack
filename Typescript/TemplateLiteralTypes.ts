type Color = "red" | "blue" | "green";
type Size = "sm" | "md" | "lg";

// Tạo type ButtonVariant từ Color và Size
// Kết quả mong đợi: "red-sm", "red-md", "red-lg", "blue-sm", "blue-md", "blue-lg", "green-sm", "green-md

type ButtonVariant = `${Color}-${Size}`;
const button: ButtonVariant = "green-lg";

type Action = "click" | "hover" | "focus";
type Element = "button" | "input" | "div";

type EventAction = `${Action}_${Element}`;
const eventAction: EventAction = "click_button";
export {};

// ⚠️ EDGE CASES — Các trường hợp đặc biệt cần nhớ
// 1. TypeScript tự tạo TẤT CẢ combinations — 3 Color x 3 Size = 9 values, không cần viết thủ công
// 2. Giá trị không nằm trong union sẽ lỗi compile-time — "green-xl" báo lỗi vì "xl" không có trong Size
// 3. Có thể kết hợp nhiều hơn 2 union — `${A}_${B}_${C}` tạo ra A*B*C combinations

// ⚛️ REACT USE CASES — Template Literal Types dùng phổ biến trong React + TypeScript
// 1. CSS class variants — type ClassName = `text-${Size}` | `bg-${Color}` → dùng với Tailwind hoặc CSS Modules
// 2. Event handler names — type Handler = `on${Capitalize<Action>}` → "onClick" | "onHover" | "onFocus"
// 3. Component prop variants — type ButtonProps = { variant: `${Color}-${Size}` } → ép buộc prop đúng format
