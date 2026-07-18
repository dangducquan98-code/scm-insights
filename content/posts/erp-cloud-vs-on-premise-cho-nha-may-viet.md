---
title: "Erp cloud vs on-premise cho nhà máy việt — đừng để sale dụ"
date: 2026-07-19T03:00:00+07:00
draft: false
featureimage: "images/posts/erp-cloud-vs-on-premise-cho-nha-may-viet.jpg"
featureAlt: "Hai máy chủ đối lập — đám mây và máy chủ vật lý"
description: "ERP Cloud hay On-premise? Bài này không bênh bên nào, chỉ kể chuyện thật từ những dự án đã triển khai để bạn tự chọn."
tags: ["erp", "cloud", "chuyen-doi-so", "nha-may-viet"]
---

Buổi chiều thứ Sáu, giám đốc sản xuất gọi mình vào phòng. Ông mở laptop, chỉ vào email chào giá.

"Thằng này bảo Cloud ERP rẻ hơn 40%, deploy trong 3 tháng. Thằng kia bảo On-premise mới an toàn, dữ liệu ở xưởng không thể đưa lên mây."

Ông nhìn mình: "Mày nói tao nghe, chọn cái gì?"

Câu đó mình nghe cả chục lần rồi. Và câu trả lời chưa bao giờ là một từ.

---

## ☁️ 1. Cloud ERP — cái được và cái mất

Cloud ERP bán chạy vì một lý do: không cần đầu tư ban đầu lớn. Không mua server, không thuê IT, không lo bảo trì. Vendor lo hết.

Với nhà máy vừa và nhỏ ở Việt Nam, đây là con đường ngắn nhất để có ERP. Nhưng mình thấy mấy cái bẫy:

Cái bẫy đầu là "vừa chạy vừa ngã". Cloud ERP hứa go-live nhanh, nhưng nhanh thì dễ cắt xén requirement. Mình từng thấy một nhà máy go-live cloud ERP trong 4 tháng, xong 6 tháng sau vỡ mặt vì module sản xuất không handle được batch tracking, đành quay ra làm Excel song song. Chuyện này giống hệt mấy dự án [ERP thất bại mình từng kể](/posts/tai-sao-du-an-erp-that-bai/).

Bẫy thứ hai là chi phí dài hạn. Nghe rẻ 40% năm đầu đúng ko? Sang năm thứ hai, thứ ba, subscription tăng 7-10%/năm. Tính cho 5 năm, cloud ERP không rẻ hơn on-premise đâu. Có khi còn mắc hơn nếu bạn có nhiều user.

Bẫy thứ ba — nỗi ám ảnh của dân Việt Nam: internet. Xưởng ở KCN xa trung tâm, mất mạng là mất ERP luôn. Mình có ông anh làm nhà máy ở Bình Dương, cloud ERP 2 tháng downtime 3 lần vì lỗi nhà mạng. Mỗi lần mất 2-3 tiếng, production đứng.

## 🏭 2. On-premise — tưởng an toàn, nhưng cũng đau đầu

On-premise nghe an toàn hơn vì dữ liệu trong xưởng. Không sợ mất mạng, không phụ thuộc vendor.

Nhưng thực tế:

Đầu tiên, IT đâu ra? Nhà máy vừa và nhỏ ở Việt Nam hiếm khi có đội IT riêng. On-premise mà không có người quản trị — server treo là cả tuần không ai sửa. Mình từng thấy nhà máy mua server 500 triệu, không ai cài patch, 2 năm sau chạy chậm hơn laptop để bàn.

Thứ hai, upgrade là cực hình. Cloud ERP tự động update. On-premise mỗi lần upgrade là một dự án: test, data migration, downtime. Có công ty mình biết vẫn chạy ERP phiên bản 5 năm tuổi vì không dám upgrade.

Thứ ba, chi phí ẩn. License mua một lần nghe rẻ. Nhưng cộng server, backup, bảo trì, nhân sự, tiền điện, điều hoà cho phòng server... Tính ra ko hề rẻ.

## 🎯 3. Vậy chọn gì?

Mình không có câu trả lời chung. Nhưng có một cái khung mình hay dùng khi tư vấn:

Cloud phù hợp nếu nhà máy của bạn thuộc dạng vừa và nhỏ (dưới 200 người), chưa có đội IT riêng, mạng internet ổn định hoặc có đường dự phòng, và bạn chấp nhận trade-off là không custom sâu được.

On-premise đáng cân nhắc nếu nhà máy lớn (trên 500 người, chạy 24/7), có đội IT vận hành, yêu cầu bảo mật cao (sản xuất quốc phòng, dược phẩm), hoặc xưởng ở vùng sâu mạng chập chờn.

Hybrid — một ít cloud, một ít tại chỗ — là hướng nhiều vendor lớn như IFS, SAP đang làm. Cho bạn cả sự linh hoạt lẫn kiểm soát dữ liệu nhạy cảm.

## Nhưng...

Kinh nghiệm cá nhân của mình: công nghệ chỉ quyết định 30%. 70% còn lại là con người và quy trình.

Mình từng thấy nhà máy chọn cloud, vận hành ngon lành. Cũng từng thấy nhà máy chọn on-premise đầy đủ server, IT, backup — nhưng thất bại vì không ai muốn dùng. Nguyên nhân không phải cloud hay on-premise. Mà là: doanh nghiệp có sẵn sàng thay đổi cách làm việc hay không.

Nếu chưa sẵn sàng, chọn gì cũng thế thôi.

---

Bài học từ mảng procurement trong [IFS Cloud Procurement Pitfalls](/posts/ifs-cloud-procurement-pitfalls/) cũng áp dụng được ở đây: công cụ không quan trọng bằng cách dùng công cụ.

Còn bạn, nhà máy của bạn — hoặc công ty bạn đang tư vấn — đang ở đâu? Bạn nghiêng về cloud hay on-premise, và vì sao?
