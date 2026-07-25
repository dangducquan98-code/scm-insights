---
title: "Scope creep — chuyện kinh điển và cách sống sót"
date: 2026-07-26T03:00:00+07:00
draft: false
featureimage: "images/posts/scope-creep-chuyen-kinh-dien-va-cach-song-sot.jpg"
featureAlt: "Scope creep trong dự án phần mềm"
description: "Scope creep không phải exception — nó là default trong mọi dự án ERP. Bài viết chỉ ra 5 dấu hiệu nhận biết sớm và cách xử lý thực tế, không lý thuyết suông."
tags: ["business-analyst", "quan-ly-pham-vi", "kinh-nghiem-thuc-chien", "quan-ly-du-an"]
---

Buổi sáng thứ Hai. PM gọi: "Anh ơi, bên khách hàng muốn thêm cái màn hình này. Nhỏ thôi. Một buổi chiều là xong."

Mình gật. Một buổi chiều thành ba ngày. Ba ngày kéo theo sáu cái change request khác. Cuối tuần, team dev căng thẳng. Lịch release trễ hai tuần.

Chuyện cũ rích. Ai làm BA lâu năm chắc thuộc nằm lòng.

Scope creep — cái thuật ngữ nghe rất chuyên nghiệp — thực chất là câu chuyện của những cái "thêm tí nữa" không bao giờ dừng lại. Nó không chỉ là vấn đề của BA, nó là vấn đề của cả team, cả dự án, cả deadline.

## Scope creep có thực sự là "lỗi" của ai không?

Mình từng đổ tại khách hàng. "Họ không biết họ muốn gì." Rồi đổ tại PM. "Nhận bừa change request." Rồi đổ tại dev. "Không phản biện sớm."

Sau vài lần vỡ mặt mới thấy: không ai có lỗi cả. Scope creep là chuyện bình thường của một dự án đang sống.

Vấn đề là mình có nhìn thấy nó từ xa không — và có plan để xử lý hay để nó cuốn mình đi. Cái bẫy ở bài [BA mới vào nghề: 5 cú sốc không ai nói trước](/posts/ba-moi-vao-nghe-5-cu-soc-khong-ai-noi-truoc/) cũng nhắc chuyện này: requirement thay đổi mỗi ngày là chuyện cơm bữa.

## Năm dấu hiệu scope creep đang đến

Mình đúc kết từ mấy lần "nhận nhầm" change:

**"Cái này nhỏ thôi, một tiếng là xong."** — câu nói nguy hiểm nhất trong làng IT. Không có cái gì nhỏ nếu nó chạm vào logic nghiệp vụ.

**"Làm luôn cái này, đằng nào cũng đang sửa."** — một cái nhỏ, ghép với mấy cái nhỏ khác, thành một cái to không ai lường trước.

**"Hồi sáng em mới nghĩ ra, hay quá anh ơi."** — ý tưởng mới lúc nào cũng có vẻ hay. Cái hay đó có đáng để trễ deadline không.

**"Khách hàng bảo thêm, không làm mất lòng."** — nỗi sợ mất lòng khách hàng là cái bẫy lớn nhất của BA mới. Mình từng mắc.

**"BA ơi, cái này giống cái kia, copy qua sửa tí thôi."** — nếu đã giống, sao lúc elicitation requirement không ai nói? Vì nó KHÔNG giống.

## Cách xử lý — từ thực tế, không phải sách vở

Mình không có công thức magic. Nhưng có mấy cái rút ra sau nhiều lần "dính đòn":

**Chốt scope baseline rõ ràng.** Trước khi bắt đầu build, phải có một cái mà cả hai bên đều nhìn vào và nói "đây là scope". Không nhất thiết phải là document 50 trang — có thể là một cái bảng, một cái spreadsheet, thậm chí một cái email. Nhưng phải có. Bài [3 nguyên tắc sống còn để lấy yêu cầu hiệu quả](/posts/3-nguyen-tac-song-con-de-lay-yeu-cau-hieu-qua/) nói kỹ về chuyện này.

**Phân biệt "must-have" và "nice-to-have".** Khi ai đó nói "thêm cái này nữa", câu hỏi đầu tiên không phải "có làm được không" mà là "có cần cho go-live không?" — nếu không, nó vào v2.

**Không nói "có" ngay lập tức.** Câu thần chú: "Để em xem tác động rồi trả lời anh." — nó cho mình thời gian đánh giá, và cho họ thấy mình không phải cái máy gật đầu.

**Change request phải đi kèm trade-off.** "Làm cái này, release trễ 2 tuần. OK không?" — ai cũng có quyền thay đổi scope, nhưng phải chấp nhận hậu quả.

## Nhưng — không phải lúc nào "creep" cũng xấu

Scope creep có mặt tốt của nó.

Đôi lúc cái "thêm tí nữa" tiết lộ một requirement thật mà giai đoạn elicitation bỏ sót. Mình từng có dự án mà chính cái change request bất ngờ lại là thứ cứu cả module khỏi fail sau go-live.

Vấn đề là phân biệt được đâu là **khám phá giá trị** và đâu là **thiếu chuẩn bị**.

Cách phân biệt: nếu cái "thêm" giải quyết một pain-point thật, chưa ai nghĩ đến — đó là discovery value. Nếu nó là cái đã có trong requirement từ đầu nhưng không ai đọc — đó là thiếu chuẩn bị.

---

Mình vẫn nhớ cái dự án đầu tiên bị scope creep "ăn thịt". 6 tháng thành 9 tháng. Team quay ra quay vô. Khách hàng mệt mỏi. Mình cũng mệt.

Bài học đau nhất: **scope creep không giết dự án — việc không dám nói "không" mới giết.**

Bạn đã từng bị scope creep "hành" như thế nào? Có mẹo gì hay để xử lý cái câu "cái này nhỏ thôi" chưa?
