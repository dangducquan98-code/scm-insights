---
title: "Tại sao dự án ERP thất bại — 5 lý do từ chiến hào"
date: 2026-06-19T09:00:00+07:00
draft: false
featureimage: "images/posts/tai-sao-du-an-erp-that-bai.jpg"
featureAlt: "Infographic 5 lý do dự án ERP thất bại - bài học từ chiến hào"
tags: ["erp", "thất bại", "bài học"]
description: "5 lý do dự án ERP thất bại từ thực tế triển khai: chọn phần mềm trước khi khảo sát, copy quy trình cũ, sponsor vắng mặt, test dữ liệu giả, không có metrics thành công."
---

Mình từng ngồi trong một cuộc họp "rút kinh nghiệm" dự án ERP kéo dài 4 tiếng. Phòng họp kín, điều hoà 16 độ mà mặt ai cũng đỏ bừng. Dự án ngốn 2 năm, 15 tỷ — go-live xong thì team mua hàng vẫn dùng Excel để tracking đơn hàng "cho chắc".

Không phải lần đầu mình thấy cảnh này. Dưới đây là 5 lý do mình thấy lặp đi lặp lại. (Một ví dụ cụ thể: [3 cái bẫy cấu hình IFS Cloud Procurement](/posts/ifs-cloud-procurement-pitfalls/) cũng xuất phát từ những lỗi tương tự.)

![5 lý do ERP thất bại](/images/posts/erp-failure-infographic.jpg)

## 🏭 1. Bắt đầu từ phần mềm, không phải từ vấn đề

Nghe quen không: sếp đi hội thảo về, ký hợp đồng với vendor ERP xong mới gọi BA vào. "Giờ em đi khảo sát requirement đi."

Vấn đề là: requirement không phải thứ mình "đi khảo sát" sau khi đã chọn xong phần mềm. Requirement là thứ quyết định chọn phần mềm nào, không phải ngược lại. Mình thấy nhiều dự án còng lưng custom một module mà phần mềm không được thiết kế để làm việc đó, đơn giản vì lúc chọn không ai hỏi: "Cái này có thực sự giải quyết vấn đề của mình không?"

## 📋 2. "Cứ làm giống quy trình cũ đi em"

Câu này mình nghe ít nhất 10 lần mỗi dự án. Ông trưởng phòng nói vậy vì ổng sợ thay đổi. Bà kế toán nói vậy vì bả không muốn học lại từ đầu.

ERP không phải là phiên bản số hoá của quy trình giấy. Nó là cơ hội để chuẩn hoá, cắt bỏ những bước thừa, tự động hoá những thứ đáng lẽ không cần người làm. Nhưng khi BA chiều stakeholder quá, mình kết thúc với một cái ERP chạy y hệt quy trình cũ — chỉ khác là giờ nhập liệu trên màn hình thay vì trên giấy. Phí mất 2 năm và 15 tỷ cho một cái "Excel màu mè hơn".

## 👤 3. Sponsor không có mặt

Giám đốc nhà máy là sponsor dự án. Ổng cũng là người bận nhất công ty. Mỗi lần họp steering committee, ổng gửi trợ lý đi họp thay. Mỗi lần cần quyết định lớn (đổi quy trình, thêm budget), "để anh hỏi sếp đã".

Khi sponsor vắng mặt, mọi quyết định đều bị trì hoãn. Dự án vẫn chạy — nhưng chạy mà không có người cầm lái. Đến lúc go-live, ông giám đốc mới tá hoả: "Sao cái này không giống tôi tưởng tượng?"

## 🔄 4. Test bằng dữ liệu giả

Mình từng thấy một dự án test UAT bằng 20 dòng dữ liệu mẫu. Chạy ngon lành. Go-live xong, migrate 50.000 dòng dữ liệu thật vào — hệ thống sập vì data không sạch, trùng mã, sai định dạng, thiếu trường bắt buộc.

Dữ liệu thật bẩn hơn mình tưởng rất nhiều. Mã hàng nào cũng có ít nhất 3 phiên bản: một trong ERP cũ, một trong file Excel của thủ kho, một trong sổ tay của quản đốc. Không dành ít nhất 2 tuần để làm sạch data trước khi test UAT là tự bắn vào chân.

## 📉 5. Không đo được thành công

"Hết dự án là xong" — câu này sai. Hết go-live mới là bắt đầu. Nhưng làm sao biết dự án thành công nếu không có metrics từ đầu?

Mình hay hỏi khách hàng trước dự án: "6 tháng sau go-live, anh muốn thấy điều gì khác?" Câu trả lời thường là im lặng. Không ai nghĩ đến chuyện đó. Rồi 6 tháng sau, họ nói "ERP chẳng cải thiện được gì" — trong khi chưa từng định nghĩa "cải thiện" là cái gì.

---
 
Năm cái trên không phải lỗi của phần mềm. Là lỗi của cách mình làm dự án.

{{< compare title="5 lý do ERP thất bại — Tổng kết" >}}
| # | Vấn đề | Hậu quả | Cách tránh |
|---|--------|---------|------------|
| 1 | Chọn phần mềm trước, khảo sát sau | Custom module không phù hợp | Requirement → chọn ERP, không ngược lại |
| 2 | Copy quy trình cũ nguyên xi | ERP thành "Excel màu mè" | Chuẩn hoá + cắt bỏ trước khi số hoá |
| 3 | Sponsor vắng mặt | Trì hoãn, sai hướng | Sponsor phải có mặt ở steering committee |
| 4 | Test bằng dữ liệu giả | Sập hệ thống khi go-live | Dành 2 tuần làm sạch data thật, test UAT bằng data thật |
| 5 | Không có metrics thành công | Không biết dự án có hiệu quả không | Định nghĩa metrics trước, đo 6 tháng sau go-live |
{{< /compare >}}

Hỏi thật: dự án ERP của bạn, cái nào trong 5 cái trên đang âm thầm giết nó? 👇

#DehaDigitalSolutions #ERP #ChuyenDoiSo
