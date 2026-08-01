---
title: "Làm BA có cần biết code không — câu trả lời thật"
date: 2026-08-02T03:00:00+07:00
draft: false
featureimage: "images/posts/lam-ba-co-can-biet-code-khong.jpg"
featureAlt: "Business Analyst làm việc với code — bàn phím, màn hình hiển thị SQL và API"
tags: ["business-analyst", "ky-nang-ba", "lap-trinh", "huong-nghiep"]
description: "Làm BA có cần biết code không? Câu trả lời thực tế sau 5 năm làm ERP: không cần viết code, nhưng cần đọc được SQL, API và hiểu logic hệ thống. Phân tích 3 mức độ và cái bẫy cần tránh."
---

"Anh ơi, làm BA có cần biết code không ạ?"

Tin nhắn của một bạn fresher gửi mình lúc 11h đêm. Bạn ấy đi phỏng vấn ba chỗ. Chỗ đầu bảo "BA không cần code, chỉ cần hiểu nghiệp vụ." Chỗ thứ hai hỏi SQL, API, đọc stack trace. Chỗ thứ ba bắt phân tích JSON response từ REST API.

Bạn ấy hoang mang. Mà cũng đúng — hồi mới vào nghề mình cũng từng hoang mang y chang.

Sau 5 năm lóc cóc dưới xưởng, làm ERP cho mấy nhà máy, câu trả lời của mình là: **Có — nhưng không phải kiểu bạn nghĩ.**

## Không cần code không có nghĩa là không cần hiểu

Mình từng làm việc với một BA cực giỏi nghiệp vụ sản xuất. Bạn ấy thuộc lòng quy trình đúc — nguyên liệu vào lò lúc nào, thành phẩm ra ở công đoạn mấy. Nhưng khi dev hỏi "API này trả về cấu trúc JSON thế nào cho màn hình tracking?", bạn ấy bảo "để em hỏi lại dev team."

Hai phút confirm thành nguyên buổi sáng. Chỉ vì BA không đọc được API doc.

BA không cần viết `for loop` trong Java. Nhưng BA cần đọc được logic — hiểu khi dev nói "endpoint này trả về 2000 records, frontend gọi batch 100 records một lần" thì cái đó ảnh hưởng tới UX ra sao.

Mấy chỗ bảo "BA không cần code" thường là mấy chỗ BA chỉ làm cầu nối thuần: ghi requirement từ user, chuyển cho dev, không đụng gì technical. Sống được. Nhưng tầm 2-3 năm là thấy trần.

## SQL — thứ nên học đầu tiên

Mình nói thẳng: nếu chỉ học MỘT thứ, học SQL.

Không phải `SELECT * FROM table`. Mà là loại SQL đủ để:
- Tự mở database lên coi dữ liệu thực tế đang chạy ra sao
- Tự viết query kiểm tra logic, không phải đợi dev chạy hộ
- Tự so số liệu giữa báo cáo và database gốc

Trong dự án ERP, 80% bug BA phát hiện không phải do đọc requirement sai. Mà do dữ liệu trong database khác hoàn toàn với những gì user mô tả.

Mình từng ngồi với một anh quản đốc. Ảnh cam đoan "tồn kho lúc nào cũng đúng." Mình mở query, `SELECT SUM(qty) WHERE location = 'FG-01' AND status = 'available'` — lệch 30% so với báo cáo ảnh cầm trên tay. Hoá ra ảnh không tính hàng đang pending QC.

Nếu mình không tự chạy được câu SQL đó, mình đã ghi requirement sai. Dự án sẽ trả giá sau Go-live. Những cú sốc kiểu này mình từng viết kỹ hơn trong bài [BA mới vào nghề: 5 cú sốc không ai nói trước](/posts/ba-moi-vao-nghe-5-cu-soc-khong-ai-noi-truoc/).

## API và integration — lợi thế khi làm ERP/SCM

Làm BA trong ERP hay SCM, bạn sẽ đụng integration liên tục. ERP nói chuyện với MES. MES nói chuyện với WMS. WMS gửi dữ liệu sang hệ thống vận chuyển.

Khi bạn nắm được API hoạt động ra sao — request/response, HTTP method, authentication:
- Bạn tự đọc API doc của bên thứ ba, tự validate integration có khả thi không
- Bạn phát hiện điểm không khớp trước khi dev team mất ba ngày debug
- Bạn ngồi họp với technical architect mà không bị "trôi"

Mình không bảo BA phải code API. Nhưng BA cần chỉ vào một đoạn JSON response và nói được: "Thiếu field `lot_number`. Requirement bên mình cần trace theo lot."

Khoảnh khắc đó, dev sẽ nhìn bạn khác.

## Biết code thực sự — con dao hai lưỡi

Có những BA biết code. Từng làm dev, rẽ sang BA. Lợi thế lớn: hiểu technical constraint ngay khi nghe requirement, estimate được mức độ phức tạp, dev không "bịp" được.

Nhưng có một cái bẫy: **BA biết code rất dễ rơi vào "solution mode".**

Thay vì tập trung "người dùng cần gì", bạn nhảy ngay vào "cái này làm bằng Python script, dùng library X, deploy cron job." Bạn bỏ qua bước quan trọng nhất của BA: hiểu vấn đề trước khi nghĩ giải pháp.

Mình từng gặp một bạn BA giỏi code. Trong buổi elicitation với bên vận hành kho, bạn ấy ngồi phác thảo luôn UI màn hình nhập liệu bằng React. Trong khi câu hỏi đáng lẽ phải hỏi là: "Tại sao anh em thủ kho phải nhập lại số liệu, trong khi máy quét đã đọc rồi?"

Giải pháp thực sự không phải UI đẹp hơn. Mà là **bỏ luôn màn hình đó** — vì nó dư thừa. Đây cũng là bài học về đào sâu requirement thật mà mình nhắc tới trong bài [Bộ kỹ năng khai phá nhu cầu thật](/posts/bo-ky-nang-khai-pha-nhu-cau-that-ma-ba-nao-cung-can/).

## BA cần biết code tới đâu?

Mình chia làm ba mức. Xem bạn đang ở đâu:

**Mức 1 — Biết đọc.** SQL cơ bản. Đọc được API doc. Hiểu flow dữ liệu. Đây là mức tối thiểu để làm BA trong ERP/SCM. Không có cái này, bạn luôn phụ thuộc vào dev để xác minh mọi thứ. Tốn thời gian. Mất credibility.

**Mức 2 — Biết chạy.** Tự viết SQL query phức tạp. Tự test API bằng Postman hoặc curl. Tự đọc log trace vấn đề. BA ở mức này làm việc với dev cực kỳ hiệu quả — không cần code, nhưng nói được ngôn ngữ của họ.

**Mức 3 — Biết code.** Viết script automation. Build prototype đơn giản. Hiểu sâu system architecture. Ở mức này bạn tiến gần tới role Solution Architect hoặc Technical BA. Lợi thế lớn. Nhưng nhớ: đừng để "solution mode" nuốt mất "problem understanding."

Hầu hết BA giỏi mình biết đang ở mức 2. Họ tự học hết — không bootcamp, không bằng cấp.

## Nhưng mà...

Nếu bạn làm BA trong ngân hàng, bảo hiểm, hay healthcare — nơi compliance quan trọng hơn technical — thì nghiệp vụ domain mới là thứ quyết định. Code học sau cũng được.

Còn nếu bạn làm BA trong SaaS product, ERP implementation, hay integration-heavy project — không có technical baseline, bạn sẽ đuối sau 1-2 năm.

Đừng để câu hỏi "BA có cần code không" làm bạn đứng yên. Mình biết nhiều bạn hỏi câu này xong... không làm gì cả. Chờ ai đó trả lời hộ. Trong khi câu trả lời chỉ đến khi bạn tự mò thôi. Câu hỏi thực sự là: bạn có chịu mở Postman lên gõ thử API đầu tiên không?

Hay vẫn đang đợi dev trả lời: "Dữ liệu có đúng không em?"
