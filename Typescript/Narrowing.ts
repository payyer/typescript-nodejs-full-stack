type ID = string | number;

function processId(id: ID): void {
  if (typeof id === "string") {
    // TypeScript biết chắc id là string ở đây
    console.log(id.toUpperCase());
  } else {
    // Typescript biết chắc là id là number ở đây
    console.log(id.toFixed());
  }
}

processId("adc-123");
processId(42);

export {};

// ⚠️ CÁC TRƯỜNG HỢP ĐẶC BIỆT CẦN NHỚ
//
// 1. null trong union không bị catch bởi typeof "number" hay "string"
//    type NullableID = string | number | null;
//    else branch → type là number | null, không phải number → .toFixed() lỗi
//    → Phải check null riêng: if (id === null) { ... }
//
// 2. typeof với object dùng được — TypeScript narrow xuống object type trong if block
//    if (typeof input === "object") → input là { name: string } ✅
//
// 3. typeof với type không có trong union → id bên trong if = never
//    if (typeof id === "boolean") → id: never vì ID = string | number, không có boolean

// ⚛️ ỨNG DỤNG THỰC TẾ TRONG REACT + TYPESCRIPT
// Type narrowing được dùng phổ biến nhất trong React + TypeScript như sau:
//
// 1. Xử lý props có thể là string hoặc number
//    type Size = string | number;
//    function Box({ size }: { size: Size }) {
//      const style = typeof size === "number" ? `${size}px` : size;
//    }
//
// 2. Check null trước khi dùng — tránh lỗi runtime
//    if (typeof user !== "undefined" && user !== null) { console.log(user.name); }
//
// 3. Xử lý error trong catch — error mặc định là unknown
//    catch (e) {
//      if (typeof e === "string") console.log(e.toUpperCase());
//      if (e instanceof Error) console.log(e.message);
//    }
