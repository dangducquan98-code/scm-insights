---
title: "3 cái bẫy cấu hình IFS Cloud Procurement khiến team mua hàng ngập trong việc tay"
featureimage: "images/posts/ifs-cloud-procurement-pitfalls.jpg"
date: 2026-06-19T09:00:00+07:00
draft: false
tags: ["IFS Cloud", "Procurement", "ERP", "cấu hình"]
---

Mình không nhớ nổi bao nhiêu lần bước vào site khách hàng, module IFS Cloud Procurement đã go-live rồi — mà team mua hàng vẫn đang ngập trong Excel và việc tay. Không phải do phần mềm. Gần như không bao giờ do phần mềm. Là do cách người ta set-up nó từ 6 tháng trước.

Dưới đây là 3 cái bẫy mình thấy lặp đi lặp lại.

🏭 **1. Approval route một cỡ cho tất cả**

Luồng duyệt mặc định của IFS Cloud là phẳng: mọi requisition chạy cùng một chain, bất kể giá trị, chủng loại, phòng ban. Nhiều team để vậy, nghĩ "sau refine".

Kết quả: cái request mua giấy 50 nghìn và cái đơn hàng thiết bị 50 nghìn đô xếp chung một hàng chờ. Ông approver nghỉ phép 2 ngày — dây chuyền đứng.

Cách làm: thiết lập approval route theo điều kiện ngay từ đầu. IFS Cloud hỗ trợ route dựa trên document amount, part category, department, project code. Định nghĩa ít nhất 3 luồng: auto-approve dưới 10 triệu, duyệt phòng ban cho 10-100 triệu, multi-tier trên 100 triệu. Cắt 40-60% cycle time là bình thường.

📦 **2. Bỏ qua lead time ở cấp Part-Supplier**

IFS Cloud lưu lead time ở link Part Supplier, không phải ở header supplier. Mình thấy nhiều team chỉ nhập lead time chung chung kiểu "5 ngày" ở master supplier rồi thôi.

Vấn đề: cùng một supplier, cái bracket đặc chủng mất 15 ngày, con bolt tiêu chuẩn 2 ngày. MRP chạy ra đọc "5 ngày" cho cả hai — bracket về trễ, bolt về sớm nằm kho tốn tiền giữ.

Cách làm: lúc migrate dữ liệu, bỏ thời gian điền PartSupplierLeadTime chính xác từng part. Một cái spreadsheet 3 cột: Supplier ID, Part ID, Lead Time (ngày) — upload qua Data Import tool của IFS Cloud. Làm một buổi chiều, tiết kiệm hàng tuần expediting sau này.

📋 **3. Không dùng Purchase Agreement cho hàng mua định kỳ**

Một trong những tính năng bị underuse nhất trong IFS Cloud Procurement: Purchase Agreement với agreement lines. Team mua hàng cứ dùng purchase order một lần cho những thứ mua đi mua lại hàng tháng — văn phòng phẩm, MRO consumables, bao bì — cùng supplier, cùng giá.

Chuyện gì xảy ra: mỗi tháng, buyer copy PO cũ, đổi ngày, sửa số lượng. Mỗi tháng cùng một thao tác, cùng rủi ro nhập sai, cùng 1 tiếng vứt đi.

Cách tốt hơn: tạo blanket Purchase Agreement với agreement lines cho từng recurring item — gồm giá, thời hạn, call-off terms. Rồi dùng Requisition Auto-Release để tự gen PO từ agreement khi stock chạm reorder point.

Setup mất 15 phút cho mỗi agreement. Tiết kiệm khoảng 1 tiếng/tháng cho mỗi buyer. Năm buyer — 5 tiếng mỗi tháng, từ một lần đổi cấu hình.

---

Ba cái trên không phức tạp. Không cần code custom, không cần consultant đắt tiền. Chỉ cần nghĩ về **thực tế vận hành** trước khi lock cấu hình.

Lần tới set-up IFS Cloud Procurement, tự hỏi mình một câu: *Cái này chạy được vào ngày 90 không, hay chỉ ngày 1?*

Bên bạn có cái bẫy cấu hình nào làm team mất cả tuần sửa không? 👇

#DehaDigitalSolutions #IFSCloud #Procurement
