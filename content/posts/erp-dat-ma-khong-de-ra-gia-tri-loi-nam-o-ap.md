---
title: "ERP đắt mà không đẻ ra giá trị: lỗi thường nằm ở AP"
date: 2026-08-19T16:00:00+07:00
draft: false
featureimage: "images/posts/erp-dat-ma-khong-de-ra-gia-tri-loi-nam-o-ap.jpg"
featureAlt: "Kế toán gõ tay hóa đơn giấy bên cạnh màn hình ERP"
description: "43% doanh nghiệp vẫn chạy AP ngoài ERP, 81% người dùng mất hơn 3 giờ mỗi tuần cho thanh toán thủ công. Giá trị ERP nằm ở quy trình có chạy xuyên hệ thống."
tags: ["erp", "accounts-payable", "business-analyst", "tich-hop", "chuyen-doi-so"]
---

Có lần mình ngồi với một anh CFO ngay sau buổi nghiệm thu phase 1 ERP. Ảnh khoe tồn kho giờ real-time, báo cáo tài chính ra nhanh gấp đôi, sếp họp có số liệu để chốt. Nghe xuôi lắm. Rồi mình hỏi một câu làm không khí hơi chùng: "Vậy AP nhà mình giờ chạy trên hệ thống luôn chưa anh?"

Ảnh im một nhịp. "AP thì... kế toán vẫn gõ Excel, cuối tháng mới nhập tay lên ERP."

ERP đắt tiền. Nhưng dòng tiền ra, thứ ngốn nhiều nhất, vẫn nằm ngoài hệ thống.

Mình không lạ cảnh này. Đi gemba vài chục nhà máy là đủ gặp. Báo cáo 2026 của Priority Commerce khảo sát 150 người dùng ERP ở Mỹ ra một con số đọc lên nghe như đang nói về chính khách hàng của mình: chỉ 57% tổ chức tích hợp hoàn toàn AP vào ERP. Tức là 43% còn lại vẫn chạy accounts payable bên ngoài hệ thống. Gần một nửa.

## 🧾 Gần một nửa vẫn "sống hai nơi"

AP là một trong những quy trình ngốn giấy tờ và thời gian nhất của nhà máy: duyệt hóa đơn, đối chiếu PO, thanh toán nhà cung cấp. Nó nằm ngay cửa ra của tiền. Vậy mà nó thường là thứ cuối cùng được đưa vào ERP, nếu có đưa.

Lý do cũng dễ hiểu. AP đụng tới tiền nên kế toán giữ khư khư. Phần mềm ERP đời cũ phần AP làm cồng kềnh, khó cấu hình, lại không nói chuyện được với ngân hàng. Thế là người ta chọn đường vòng: xử lý ngoài, nhập kết quả vào. Hệ thống thì "sạch", còn quy trình thật thì chạy bằng Excel với email.

Kết quả là cái bẫy kinh điển: ERP có dữ liệu, nhưng dữ liệu đó tới từ một quy trình song song không ai kiểm soát. Bạn có số, nhưng số đó đã qua vài lần gõ tay và đối chiếu ngoài.

## 💸 Cái giá của việc "chạy ngoài" không hề rẻ

Con số trong báo cáo làm mình giật mình. 81% người dùng vẫn dành ít nhất 3 giờ mỗi tuần cho thao tác thanh toán thủ công. Ba giờ một tuần nhân lên một năm là mấy chục giờ lao động trả lương cao ngồi gõ lại số liệu đã có sẵn đâu đó.

Chưa hết. Tổ chức tích hợp AP đầy đủ có khả năng AP hỗ trợ scalability cao gấp đôi: 71% so với 35%. Nghĩa là khi công ty lớn lên, khối lượng hóa đơn tăng, cái nền AP nằm trong ERP chịu được, còn cái nền Excel thì vỡ trận.

Đáng nói nhất là một chi tiết tưởng vô thưởng vô phạt: 100% tổ chức chưa tích hợp đều đồng ý rằng ERP sẽ có giá trị hơn nếu AP được tích hợp sâu hơn. Không ai phủ nhận. Ai cũng biết nó đúng. Nhưng vẫn để đó.

Mình đã thấy cái giá này ngoài đời. Một khách hàng của mình, cuối tháng kế toán phải ngồi đối soát hai ngày giữa sổ phụ ngân hàng, file Excel AP và số trên ERP. Có tháng lệch vài chục triệu, truy mãi mới ra là một hóa đơn nhập nhầm ngày. Tiền thì vẫn phải trả đúng hạn, chỉ có người làm là mệt.

## 🔌 Giải pháp không phải mua thêm phần mềm

Điều mình thích ở báo cáo này là nó không xúi bạn mua thêm một tool AP riêng. Nó ghim đúng một từ: embedded payments. Thanh toán phải nằm bên trong ERP, cùng một luồng dữ liệu, cùng một chỗ đối chiếu. Không phải một hệ thống AP đứng tách ra rồi đồng bộ lên.

Case study Syspro với Pierce Pacific đáng làm ví dụ: thời gian chạy một batch thanh toán giảm từ 1-2 giờ xuống còn dưới 15 phút. Không phải nhờ AI thần thánh. Nhờ thanh toán chạy ngay trong luồng ERP, tự lấy dữ liệu hóa đơn đã duyệt thay vì người gõ lại.

Cái này đúng cái mình đã viết trong bài [ERP không chạy trên phần mềm, mà chạy trên dữ liệu](/posts/erp-khong-chay-tren-phan-mem-ma-chay-tren-du-lieu/): giá trị không nằm ở chỗ có phần mềm, mà ở chỗ dữ liệu có chạy xuyên suốt không. AP chạy ngoài nghĩa là dòng tiền của bạn đang đứt quãng ngay chỗ quan trọng nhất.

Với dân BA, bài học ở đây rõ lắm. Đừng tin cái bảng "đã triển khai xong". Muốn biết ERP có thật sự chạy không, đi hỏi kế toán xem cuối tháng họ còn gõ Excel không. Chỗ nào còn Excel, chỗ đó ERP chưa thật sự xong.

## Nhưng... không phải cái gì cũng nên nhét vào ERP

Đến đây mình phải tự vấn một câu, kẻo đẩy bạn vào một cái sai khác: có nên đưa tất tần tật vào ERP không?

Không. Có những quy trình hợp lý khi để ngoài. Một số edge case hiếm, vài báo cáo ad-hoc, vài công việc đặc thù của một phòng ban nhỏ. Nhét ép vào ERP còn tệ hơn để ngoài có kiểm soát.

Nhưng AP thì không nằm trong nhóm đó. AP là quy trình tài chính lõi, xảy ra hàng ngày, đụng tiền thật, sai sót thì hậu quả lớn. Mấy thứ như vậy phải nằm trong hệ thống, cùng một luồng dữ liệu với mua hàng và tồn kho.

Ranh giới nằm ở chỗ quy trình đó có phải là core hay không. Core thì phải tích hợp. Ngoại vi thì tùy. Mà mình thấy nhiều nhà máy làm ngược: giữ core chạy ngoài, còn ngoại vi thì cấu hình đủ kiểu trong ERP. Cũng là chuyện mình nhắc tới trong bài [AI không cứu nổi quy trình rời rạc](/posts/ai-khong-cuu-noi-quy-trinh-roi-rac/): công nghệ không sửa được nền tảng, nó chỉ phóng to cái đã sẵn hỏng.

## Kết

ERP không tự đẻ ra giá trị. Nó chỉ là cái khung. Giá trị nằm ở chỗ bạn đưa được bao nhiêu quy trình thật vào trong khung đó, chạy trên cùng một dữ liệu, cùng một chỗ đối chiếu.

Nếu nhà máy bạn đã chạy ERP mà cuối tháng kế toán vẫn cặm cụi gõ Excel, thì đó chưa phải là ERP thất bại. Chỉ là bạn mới xây xong cái khung, còn quy trình thì vẫn đứng ngoài cửa.

Lần cuối bạn đi gemba xem còn quy trình nào đang chạy ngoài ERP mà sổ sách vẫn ghi "đã tích hợp" chưa?
