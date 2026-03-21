interface Config {
  host?: string;
  port?: number;
  debug?: boolean;
}

// Required<Config> = {host: string, port: number, debug: boolean}
function startServer(config: Required<Config>): void {
  console.log(`Starting server at ${config.host}: ${config.port}`);
}

const myConfig: Required<Config> = {
  host: "localhost",
  port: 3000,
  debug: false,
};

startServer(myConfig);

export {};

// ⚠️ CÁC TRƯỜNG HỢP ĐẶC BIỆT CẦN NHỚ
//
// 1. Thiếu 1 field trong Required → lỗi ngay, không có ngoại lệ
//    const bad: Required<Config> = { host: "localhost", port: 3000 }; // ❌ thiếu debug
//
// 2. Đổi Required<Config> → Config trong param → không lỗi vì Config là optional
//    Required<Config> là subtype của Config — nơi yêu cầu Config có thể nhận Required<Config>
//
// 3. undefined không được chấp nhận — Required loại bỏ cả undefined khỏi type
//    const bad: Required<Config> = { host: undefined, port: 3000, debug: false }; // ❌

// ⚛️ ỨNG DỤNG THỰC TẾ TRONG REACT + TYPESCRIPT
// Required<T> được dùng phổ biến nhất trong React + TypeScript như sau:
//
// 1. Validate form trước khi submit — đảm bảo user đã điền đủ tất cả field
//    type FormData = { name?: string; email?: string; phone?: string; }
//    function submitForm(data: Required<FormData>) { ... } // chỉ gọi khi đủ field
//
// 2. Config sau khi merge với default — ban đầu optional, sau khi merge thì required
//    const defaultConfig: Required<Config> = { host: "localhost", port: 3000, debug: false };
//    const finalConfig = { ...defaultConfig, ...userConfig } as Required<Config>;
//
// 3. Phân biệt Draft vs Final type — draft cho phép optional, final bắt buộc đủ
//    type DraftPost = { title?: string; content?: string; }
//    type FinalPost = Required<DraftPost>; // phải đủ mới được publish
