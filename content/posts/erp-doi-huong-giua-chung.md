---
title: "ERP đổi hướng giữa chừng — bài toán đau nhất phòng họp steering committee"
date: 2026-08-05T09:00:00+07:00
draft: false
featureimage: "images/posts/erp-doi-huong-giua-chung.jpg"
featureAlt: "Người quản lý dự án đứng trước ngã ba đường với ba lựa chọn ERP"
description: "Khi vendor cloud ERP ra tính năng mới trùng customization đang làm dở — tiếp tục, dừng lại hay đi đường hybrid? Khung 5 câu hỏi giúp BA và PM ra quyết định không dựa trên sunk cost."
tags: ["erp", "quan-tri-du-an", "business-analyst", "quyet-dinh", "cloud-erp"]
---

Tháng thứ 9 của dự án. Requirement đã chốt. Solution design đã duyệt. Dev đang chạy full sprint. Mọi thứ đang đi đúng lộ trình.

Rồi vendor publish roadmap. Trong danh sách tính năng mới có một feature standard làm y chang cái mà team mình đã bỏ mấy tháng thiết kế custom.

Im lặng. Rồi ai đó hỏi: "Vậy giờ làm sao?"

Mình đã ngồi đúng khoảnh khắc đó hai lần. Lần đầu mình im — vì chưa biết nên nói gì. Lần thứ hai mình mở miệng, không phải để trả lời, mà để hỏi.

## Không phải kế hoạch dở — đây là đặc tính của cloud ERP

Hồi on-premise, bạn mua version 10.2, triển khai version 10.2, go-live version 10.2. Platform đứng yên cả năm.

Cloud ERP thì khác. Oracle, SAP, Workday, IFS — họ release 2-4 phiên bản mỗi năm. Tính năng mới ra liên tục. Có những thứ team mình thiết kế custom 6 tháng trước, giờ vendor đã gói thành standard — test sẵn, document sẵn, upgrade path sẵn.

Đây không phải bug. Đây là hệ quả tất yếu khi triển khai ERP trên nền tảng cloud liên tục tiến hóa. Nhưng nó tạo ra một bài toán đau thật sự cho steering committee: tiếp tục build custom, dừng lại đợi standard, hay đi đường hybrid?

## Phản xạ đầu tiên luôn là "làm tiếp đi"

Mình hiểu tâm lý này. Team đã bỏ công sức mấy tháng. Sponsor đã cam kết deadline. Đổi hướng giữa chừng — nhìn giống thất bại.

Nhưng nó không phải thất bại. Nó là governance có kỷ luật.

Bài báo trên ERP Today tuần này của Gina — chuyên gia từng làm Deloitte, EY, Accenture — mô tả rất đúng: hai phe trong steering committee sẽ cãi nhau.

Phe một: "Làm tiếp đi, sắp xong rồi." Phe hai: "Nếu vendor sắp có standard, tại sao còn build cái mà go-live xong phải retire?"

Cả hai đều có lý. Nhưng vấn đề là: trước khi chọn phe nào, cần dữ liệu, không phải ý kiến.

## 5 câu hỏi cần trả lời trước khi quyết định

Tác giả đề xuất framework đánh giá rất thực dụng. Không phải slide đẹp — là những câu hỏi BA và PM có thể mang thẳng lên steering committee:

**① Phần nào của customization thực sự bị trùng với standard?**

Đừng nhìn tổng thể. Mổ ra từng module, từng function. Có khi 70% trùng nhưng 30% còn lại là thứ chỉ business của mình mới có — standard không làm được.

**② Chi phí thật của việc tiếp tục là bao nhiêu?**

Không chỉ tiền dev. Tính cả maintain, upgrade, test hồi quy mỗi lần vendor release. Có những customization hôm nay build 2 tháng, nhưng nuôi nó mất 5 năm.

**③ Dừng lại thì vận hành bị ảnh hưởng thế nào?**

Ai bị đứt process? Có workaround tạm được không — hay user đứng hình? Câu này phải hỏi trực tiếp người dùng cuối, không đoán trong phòng họp.

**④ Standard feature đó bao lâu nữa mới có thật?**

Vendor nói "upcoming release" — nhưng release nào? Tháng sau, quý sau, hay chỉ là "trên roadmap" mơ hồ? Phải verify với account manager. Đừng tin slide marketing.

**⑤ Quyết định nào tạo giá trị dài hạn nhất?**

Không phải cái nào bảo vệ schedule. Không phải cái nào bảo vệ sunk cost. Là cái nào để 3 năm nữa nhìn lại, mình không thấy hối hận.

## Ba con đường — và cái giá của từng con đường

Bài báo mô tả ba scenario dựa trên pattern lặp lại ở nhiều dự án ERP lớn. Không dựa trên một khách hàng cụ thể nào — nhưng ai làm ERP lâu năm sẽ thấy quen.

### Con đường 1: Tiếp tục làm custom, go-live đúng hạn

Đây là lựa chọn phổ biến nhất. Schedule không xáo trộn, stakeholder không phải họp lại. Ai cũng thở phào.

Vấn đề đến sau go-live. Khi vendor release standard feature, tổ chức lại đối mặt với một mini-project: evaluate, retire, replace, test, retrain. Cái custom được build với tâm thế "tạm thời" giờ đã thành production — và cắt nó đi tốn gần bằng build nó lúc đầu.

Có một tổ chức trong bài chọn con đường này, nhưng điểm khác biệt là: trước khi team implementation giải tán, họ đã lên sẵn post-go-live roadmap để retire custom và chuyển qua standard. Funding được duyệt ngay, ownership được assign. Transition sau này là chủ động, không phải chữa cháy.

### Con đường 2: Dừng hẳn, đợi standard

Đây là quyết định khó nói nhất trong phòng họp. Mấy tháng công sức — write-off. Timeline dời vài tuần. Sponsor hỏi: "Vậy team làm gì mấy tháng qua?"

Nhưng khi overlap giữa custom và standard là lớn, đây thường là quyết định khôn ngoan nhất về dài hạn. Chi phí hôm nay có thể bằng đúng chi phí maintain 3-5 năm. Chưa kể giảm technical debt, giảm rủi ro upgrade.

Tác giả nói một câu mình rất tâm đắc: "Câu hỏi không phải là đã bỏ bao nhiêu tiền. Mà là — nếu biết những gì mình biết hôm nay, mình có làm cái custom đó không?"

### Con đường 3: Hybrid — làm minimum, defer phần còn lại

Đây là con đường dễ bị bỏ qua nhất. Thay vì chọn trắng-đen, hỏi một câu khác: "Minimum capability nào đủ để business vận hành lúc go-live?"

Team chỉ build những thứ thực sự cần cho user làm việc ngày đầu tiên. Phần còn lại — defer. Khi vendor ra standard, transition dễ hơn nhiều vì cái interim solution được thiết kế với tâm thế "nó sẽ biến mất."

Không phải dự án nào cũng hợp với hybrid. Nhưng mình thấy nhiều team mặc định bỏ qua lựa chọn này chỉ vì chưa ai nghĩ tới.

## Thứ quan trọng hơn cả quyết định

Cả ba tổ chức trong bài chọn ba con đường khác nhau. Nhưng họ có một điểm chung: **không ai phản ứng bốc đồng.**

Họ dừng lại. Đánh giá. Ra quyết định dựa trên dữ liệu. Không để áp lực schedule ép mình vào ngõ cụt.

Mình từng viết về [nợ quyết định — thứ nguy hiểm hơn technical debt](/posts/no-quyet-dinh-decision-debt/). Nhưng quyết định vội cũng là một dạng nợ khác. Giống như bốc thuốc không bắt mạch — triệu chứng hết, nhưng bệnh vẫn còn.

Mà trong ERP, bệnh không chữa kịp thì vài năm sau nằm trong danh sách [dự án thất bại](/posts/tai-sao-du-an-erp-that-bai/).

## Vậy nếu sáng mai vendor của bạn publish roadmap mới?

Câu hỏi thật sự không phải là bạn sẽ chọn con đường nào. Mà là: **governance model của bạn có đủ nhanh để phản ứng không?**

Steering committee có ai chịu trách nhiệm theo dõi vendor roadmap không? Có process escalation khi phát hiện overlap giữa standard feature và customization đang build không? Hay mọi thứ phụ thuộc vào việc PM "thấy thì báo"?

Những tổ chức xử lý tốt mấy inflection point này không phải vì họ đoán giỏi. Mà vì họ có cơ chế để biết — và có kỷ luật để hành động.

Bạn đã có cơ chế đó chưa?
