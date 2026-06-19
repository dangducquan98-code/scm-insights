---
title: "BỘ KỸ NĂNG KHAI PHÁ \"NHU CẦU THẬT\" MÀ BA NÀO CŨNG CẦN!"
date: 2025-12-15T09:00:00+07:00
tags: [BusinessAnalyst, ChuyenDoiSo, SanXuat, ERP, RequirementElicitation, QuanLamBA]
---

# BỘ KỸ NĂNG KHAI PHÁ "NHU CẦU THẬT" MÀ BA NÀO CŨNG CẦN!

*Bài học thực tế từ dự án ERP nhà máy cơ khí – Tác giả: Quân làm BA*

---

## Bài học đắt giá: Làm phần mềm "xịn" mà không ai dùng

> "Sản phẩm làm ra 'xịn' thật, giao diện đẹp long lanh. Nhưng… **KHÔNG AI DÙNG**. Anh em thủ kho vẫn lén lút dùng sổ tay ghi chép. Dữ liệu trên phần mềm thì sai bét nhè."

**Nguyên nhân gốc rễ:** BA chỉ ghi lại yêu cầu theo lời nói của Giám đốc ("làm cho anh cái phần mềm quản lý kho thông minh hơn, xịn hơn") mà không khai phá nhu cầu thật phía sau.

---

## 1. Đừng tin những gì họ nói (ngay lập tức)

Yêu cầu của stakeholder giống như **tảng băng trôi** – BA nếu chỉ nhìn phần nổi sẽ "đâm đầu vào đá".

### Ba lớp yêu cầu – Ví dụ minh họa

| Lớp yêu cầu | Ví dụ cụ thể |
|-------------|--------------|
| **Stated** (Nói ra) | *"Anh muốn có nút Xuất Excel báo cáo tồn kho."* |
| **Implied** (Ngầm định) | *"File Excel phải giữ nguyên định dạng để in ra ký, số liệu phải khớp thực tế từng phút."* (Họ coi đó là hiển nhiên) |
| **Real Needs** (Nhu cầu thật) | Họ cần nút Excel vì sếp bắt báo cáo hàng tuần, họ phải cộng trừ thủ công mất cả ngày thứ Bảy. |

> **Giải pháp thật sự:** Không phải cái nút Excel, mà là một **Dashboard tự động** cập nhật số liệu lên tivi của sếp. Khỏi cần báo cáo, khỏi cần in ấn.

**Cảnh báo:** Mù quáng làm theo lời họ nói sẽ dẫn đến **Scope Creep** (phình to phạm vi), sửa đi sửa lại không dứt.

---

## 2. 9 kỹ thuật moi tin – Phiên bản nhà máy

Lý thuyết có 9 kỹ thuật, nhưng áp dụng vào môi trường sản xuất cần "ngầu" và linh hoạt.

### ① Phỏng vấn – Đừng hỏi "Anh muốn gì?"
Đặt câu hỏi trúng nỗi đau của họ:  
> *"Khó khăn lớn nhất khiến anh hay bị trễ đơn hàng là gì?"*

Khi đó họ mới phun ra vấn đề thật: vật tư chậm, máy hỏng vặt… → **mỏ vàng** cho BA.

### ② Quan sát / Shadowing – Đi "Gemba"
- Xuống xưởng, đứng cạnh công nhân đóng gói.
- Để ý: tại sao cô ấy phải **dừng máy** để ghi chép vào tờ giấy nhàu nát?
- Nhìn lên máy, thấy dán đầy giấy note: *"Lưu ý: Mã hàng X hay bị kẹt"*.  
→ **Đó chính là yêu cầu ngầm định không ai nói ra.**

### ③ Hội thảo – "Sàn đấu vật" có trọng tài
Khi ông Kho và ông Mua hàng cãi nhau chuyện hàng về trễ, **lùa hết vào một phòng**.  
- BA làm **Facilitator**, cho họ cãi chán rồi thống nhất quy trình chung.  
- Không gặp riêng lẻ, nếu không họ sẽ đổ lỗi cho nhau (điều này dân dự án gặp suốt).

### ④ Phân tích tài liệu
- Mượn sổ tay ghi chép, file Excel "lủng củng" của kế toán xưởng.  
- Đọc để thấy quy trình thực tế đang chạy **khác xa quy trình ISO trên giấy**.

### ⑤ Benchmarking / Phân tích link
Khi sếp gửi link video "Nhà máy thông minh của Đức" và bảo *"Làm cho anh giống thế này"*, đừng hoảng.
- Phân tích xem video đó giải quyết vấn đề gì.
- Hỏi trực tiếp: *"Anh tâm đắc nhất đoạn nào? Robot tự hành hay hệ thống báo cáo?"*

*(Các kỹ thuật khác: Brainstorming, Survey, Prototyping… sẽ có bài chi tiết sau.)*

---

## 3. Công cụ là bạc, tư duy mới là vàng

### 🔷 Thấu cảm (Empathy)
- Đặt mình vào vị trí công nhân đứng 8 tiếng rã rời chân tay.
- Thiết kế giao diện: **nút bấm to, dễ nhìn**, thao tác đơn giản.
- Chỉ khi thấu hiểu nỗi đau của họ, sản phẩm mới có hồn.

### 🔷 Tư duy phản biện (Critical Thinking) – 5 Whys
Liên tục hỏi **Tại sao** để tìm gốc rễ:

> Tại sao số liệu sai?  
> → Do nhập sai.  
> → Tại sao nhập sai?  
> → Do mã hàng quá dài khó nhớ.  
> → Tại sao không dùng mã vạch?  
> **Vấn đề gốc rễ nằm ở đó.**

---

## THIẾT NGHĨ…

> "Khơi gợi yêu cầu không phải là điền vào chỗ trống. Nó là hành trình đi tìm **SỰ THẬT**."

Hãy chuyển mình từ người hỏi *"Cần gì?"* thành người tư vấn *"Nên làm gì để giải quyết vấn đề?"*.

> "Làm ra một cái phần mềm ERP không khó. Làm ra cái phần mềm mà anh em dưới xưởng chịu vứt bỏ cuốn sổ tay đi để dùng… cái đó mới khó."

---

