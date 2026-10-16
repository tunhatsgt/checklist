# Hồ sơ visa Schengen – Sale / Điều hành / Visa

Web app: checklist 23 hạng mục, lưu theo từng khách, upload scan theo từng mục, phân quyền 4 vai trò, xuất CSV/JSON.

## Chạy
**Máy tính:** `npm install && npm start` → http://localhost:3000
**GitHub Codespaces:** Code → Codespaces → New, rồi `npm install && npm start`, mở cổng 3000.
**Server thật (Render, Railway, Fly, VPS):** dùng `Dockerfile`, gắn volume vào `/data` để không mất dữ liệu.

GitHub Pages không chạy được app này vì cần server để lưu file.

## Biến môi trường
`ADMIN_PASSWORD` (mật khẩu admin lần đầu, mặc định `admin123`), `SECRET` (chuỗi bí mật ký phiên), `PORT`, `DATA_DIR`.
Đổi cả `ADMIN_PASSWORD` và `SECRET` trước khi dùng thật.

## Quyền
| Vai trò | Tạo khách | Thu/upload | Kiểm tra Đủ/Thiếu, kết luận | Quản lý user |
|---|---|---|---|---|
| admin | ✓ | mọi mục | ✓ | ✓ |
| sale | ✓ | mục 1–16 | – | – |
| op | – | mục 17–23 | – | – |
| visa | – | mọi mục | ✓ | – |

Dữ liệu nằm trong `data/db.json` và `data/uploads/` (đã loại khỏi git). Hồ sơ visa chứa dữ liệu cá nhân nhạy cảm: dùng HTTPS và sao lưu định kỳ.
