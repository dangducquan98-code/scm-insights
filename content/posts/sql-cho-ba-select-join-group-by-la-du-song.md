---
title: "SQL cho BA: SELECT, JOIN, GROUP BY là đủ sống"
date: 2026-10-04T03:00:00+07:00
draft: false
featureimage: "images/posts/sql-cho-ba-select-join-group-by-la-du-song.jpg"
featureAlt: "BA dùng SQL truy vấn dữ liệu trên màn hình"
description: "SQL cho BA không cần thành developer. Chỉ SELECT, JOIN, GROUP BY là đủ để tự trả lời câu hỏi dữ liệu, khỏi phải chờ dev mỗi lần."
tags: ["sql", "business-analyst", "fresher", "ba-thuc-chien"]
---

Có lần mình ngồi họp với khách, họ buông một câu: "Chỗ này tháng rồi có bao nhiêu đơn bị trả về?" Mình cười, bảo để em xem rồi báo lại. Về chỗ ngồi, mở chat gõ cho dev: "anh ơi lấy giúp em số đơn trả về tháng này". Dev đang ngập việc, nhắn lại "để anh xem", rồi ba ngày sau mới có con số.

Lúc đó mình mới ngộ ra: BA mà cứ nhờ dev mỗi lần cần một con số, thì mình chỉ là người chuyển lời, chứ đâu phải người phân tích.

## SQL với BA không phải để thành developer

Nhiều bạn fresher nghe SQL là hoảng, tưởng phải cày nguyên khoá database dài dằng dặc. Không cần. Mình đã bàn kỹ ở bài [Làm BA có cần biết code không](/posts/lam-ba-co-can-biet-code-khong/): BA học kỹ thuật vừa đủ để làm việc, không phải để code sản phẩm.

SQL với BA là cái ống nhòm nhìn vào dữ liệu. Câu hỏi của stakeholder mười phần thì tám phần là "bao nhiêu", "mấy cái", "từ khi nào". Mấy câu đó dev trả lời bằng vài dòng SQL. Mình tự trả lời được thì khỏi xếp hàng chờ.

## Ba câu lệnh là đủ sống

📋 **SELECT** — đọc dữ liệu ra. SELECT nghĩa là "lấy cho tôi cột này, cột kia, từ bảng đó". Kèm WHERE để lọc: "đơn tạo trong tháng 9", "trạng thái đã giao". Đây là lệnh mình đụng hằng ngày, nhiều nhất.

🔗 **JOIN** — gộp hai bảng lại. Bảng đơn hàng không lưu tên khách, chỉ lưu mã khách; tên khách nằm ở bảng khác. Muốn xem "đơn này của khách nào" thì phải JOIN hai bảng qua cái mã đó. Hiểu JOIN là hiểu vì sao dữ liệu hệ thống không nằm một cục, mà nối nhau qua khoá.

📊 **GROUP BY** — gom nhóm rồi đếm. "Mỗi tháng bao nhiêu đơn", "mỗi khách mua bao nhiêu lần" — câu nào có chữ "mỗi", "theo từng" thì gần như chắc chắn là GROUP BY. Kèm COUNT hay SUM là ra báo cáo.

Ba câu này gộp lại đủ cho chín phần mười câu hỏi dữ liệu BA gặp hằng ngày.

{{< info label="💡" >}}
Đừng học SQL bằng cách đọc lý thuyết suông. Tải một bộ dữ liệu mẫu, tự đặt câu hỏi kiểu stakeholder rồi tự trả lời bằng query. Hỏi "mỗi tháng bán bao nhiêu", viết query ra số, là nhớ liền.
{{< /info >}}

## Nhưng đừng đâm đầu làm DBA

Học SQL đủ dùng khác với chạy theo database. BA không cần viết stored procedure, không cần tối ưu query cho nhanh thêm vài mili giây, không cần lo backup hay phân quyền. Đó là việc của dev và DBA.

Mình cần SQL để tự trả lời câu hỏi, và để kiểm tra dữ liệu thật có khớp với requirement mình viết không. Chẳng hạn viết [acceptance criteria](/posts/user-story-acceptance-criteria/) cho một báo cáo mới, mình tự chạy query xem cột dữ liệu đó có tồn tại không, thay vì viết mò rồi dev chạy thử mới phát hiện thiếu.

Biết chút SQL, câu hỏi dữ liệu lặp lại hằng ngày không còn là chuyện phải chờ ai. Không phải đoán già đoán non, mở query lên là có số.

Câu hỏi mình để lại: có con số nào bạn từng phải chờ dev mấy ngày mới lấy được, mà giờ nghĩ lại thấy tiếc không?
