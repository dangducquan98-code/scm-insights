---
title: "DATA MIGRATION — NHỮNG CÁI BẪY KHÔNG AI NÓI TRƯỚC"
date: 2026-07-05T03:00:00+07:00
draft: false
featureimage: "images/posts/data-migration-nhung-cai-bay-khong-ai-noi-truoc.jpg"
featureAlt: "Data migration ERP - dữ liệu cũ và mới"
description: "Data migration là cái bẫy chết người trong mọi dự án ERP. 5 cái bẫy phổ biến: format dữ liệu, clean data, legacy mapping, historical data khổng lồ, và cutover plan — từ kinh nghiệm thực chiến dưới xưởng."
tags: ["erp", "data-migration", "kinh-nghiem-thuc-chien", "go-live"]
---

Mình nhớ cái đêm Go-live đầu tiên trong đời.

Client đã dọn dẹp dữ liệu 3 tháng. Team implement test mapping 2 vòng. Ai cũng tự tin lắm. Đến 2h sáng, chạy migration script — dữ liệu mẹo ra, sai mapping hết mấy trăm item. Cả phòng nhìn nhau. Project manager mặt xanh như tàu chuối.

Lỗi không phải do script. Lỗi do... cái file Excel master data từ client có ô trống không ai để ý.

Hồi đó mình mới thấm: data migration không phải chuyện code với script. Nó là chuyện con người, quy trình, và những cái ô Excel tưởng vô hại.

## 1. Dữ liệu từ phòng ban khác nhau — mỗi phòng một kiểu

Phòng kho gọi vật tư là "VT-001". Phòng kế toán gọi là "M001-Vật tư A". Phòng mua hàng ghi là "VatTu A (M001)".

Nghe buồn cười, nhưng mình gặp chuyện này tới 3 dự án rồi. Ba phòng, ba cái định danh khác nhau cho cùng một vật tư.

Khi team migration hỏi "dùng cái nào làm master?", ai cũng bảo "của phòng em là đúng".

Cái bẫy thứ nhất: không có chuẩn dữ liệu chung trước khi migration. Bạn nghĩ mapping là chuyện của IT — nhưng nếu các phòng ban không thống nhất được với nhau, IT làm gì cũng sai. Mình đã viết về chuyện dữ liệu nền tảng trong bài [ERP không chạy trên phần mềm, mà chạy trên dữ liệu](/posts/erp-khong-chay-tren-phan-mem-ma-chay-tren-du-lieu/).

## 2. Dữ liệu sạch — chỉ là huyền thoại

Client bảo "dữ liệu bọn em sạch lắm". Mình mở file ra. Item code có dấu cách thừa. Description có ký tự đặc biệt. Có ô ghi "xem file đính kèm" thay vì số.

Data clean không phải một lần rồi thôi. Dân trong nghề gọi nó là vòng lặp vô tận: clean → review → phát hiện lỗi mới → clean lại. Nếu không có kỷ luật và process, cái vòng này kéo dài tới tận ngày cutover.

Đừng bao giờ tin ai nói "data đã sạch". Hãy tự mở ra xem, tự chạy validation script, và luôn có Plan B.

## 3. Legacy mapping — nỗi ám ảnh của BA

Đây là phần mình thấy nhiều BA underestimate nhất.

Hệ thống cũ chạy 10 năm. Có field "Ghi chú" mà người dùng dùng để nhập số PO. Có field "Mã khách hàng" dùng chung cho cả nhà cung cấp.

Một lần mình gặp cái ERP cũ có date field nhập theo định dạng dd/mm/yyyy — nhưng ai cũng nhập tháng trước ngày (mm/dd/yyyy). Khi migration, team cứ tưởng data đúng vì nhìn trên màn hình thấy số đẹp. Đến lúc import mới vỡ lẽ.

Legacy mapping không phải chuyện trường A sang trường B. Nó là chuyện hiểu business logic đằng sau mỗi field. Mà business logic đó thường không có document. Nó nằm trong đầu mấy anh chị đã dùng hệ thống cũ 5-7 năm.

## 4. Historical data — càng nhiều càng chết

Câu hỏi kinh điển: "Mang bao nhiêu năm dữ liệu qua hệ thống mới?"

Client thường muốn mang hết. 10 năm, 15 năm. Vì "lỡ sau này cần đối chiếu".

Vấn đề ở chỗ hệ thống mới chưa optimize cho khối lượng data đó. Migration mất 3 ngày thay vì 3 tiếng. Performance tè ra sau go-live. QA không thể verify hết data lịch sử.

Giải pháp mình thấy hiệu quả: migrate tối thiểu. Chỉ mang qua master data với open transactions — PO chưa đóng, SO chưa ship, work order đang chạy. Dữ liệu lịch sử để ở hệ thống cũ, read-only. Nếu cần, làm cái giao diện "tra cứu legacy" là đủ.

Mất mấy tháng chiến đấu với client về chuyện này. Nhưng cuối cùng ai cũng thấy nhẹ đầu khi không phải gồng gánh 10 năm data vô dụng.

## 5. Cutover plan — không có kịch bản cho ngày tồi tệ nhất

Mọi cutover plan đều lạc quan. Script chạy 4 tiếng — OK. Validation mất 2 tiếng — OK. Go-live 8h sáng — OK.

Rồi script fail ở bước 3. Fix mất 2 tiếng. Validation phải làm lại. 8h sáng — chưa xong. 10h — chưa xong. Điện thoại PM reo liên tục.

Cutover plan phải có rollback plan rõ ràng. Không phải kiểu "hy vọng không sao" mà là "nếu sai thì làm gì". Backup dữ liệu. Checkpoint để biết dừng đúng lúc. Và quan trọng nhất: dry run ít nhất 2 lần trước ngày chính thức. Lần đầu sẽ thất bại. Lần thứ hai sẽ ổn hơn. Đến lúc thật thì ít nhất bạn biết mình đang đối mặt với gì.

---

Nhưng...

Nói gì thì nói, data migration không phải chuyện một người hay một team làm được. Nó là chuyện của cả tổ chức. Nếu không có sự cam kết từ các phòng ban — dành thời gian clean data, thống nhất chuẩn, review mapping — thì BA giỏi mấy cũng chịu.

Mình từng thấy dự án thất bại không phải vì phần mềm dở, mà vì data migration làm 6 tháng không xong. Đến lúc Go-live, ai cũng biết data chưa sẵn sàng — nhưng deadline đã ấn, thế là launch. Hậu quả: 3 tháng đầu sau go-live, ai cũng ghét hệ thống mới vì data sai bét.

Còn bạn? Bạn đã từng trải qua cú sốc data migration nào chưa? Cái bẫy nào là đau nhất với bạn? 👇

#DehaDigitalSolutions #ERP #DataMigration #GoLive #DigitalTransformation
