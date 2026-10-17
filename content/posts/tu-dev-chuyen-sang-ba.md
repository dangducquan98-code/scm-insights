---
title: "Từ dev chuyển sang BA — mình học cách hỏi 'tại sao' trước khi viết code"
date: 2026-10-18T03:00:00+07:00
draft: false
featureimage: "images/posts/tu-dev-chuyen-sang-ba.jpg"
featureAlt: "Lập trình viên chuyển sang BA với laptop và bảng trắng"
description: "Từ dev chuyển sang BA có gì được, gì mất? Lợi thế kỹ thuật của dân code, cái khó khi bỏ thói quen 'viết cho chạy', và cách rẽ sang BA mà không phải nghỉ việc."
tags: ["business-analyst", "huong-nghiep", "lap-trinh"]
---

Một bạn dev inbox mình lúc nửa đêm: "Anh ơi, em viết code ba năm rồi, giờ thấy chán, muốn chuyển sang BA. Có nên không?"

Mình đọc mà thấy quen. Mình cũng từng ngồi code, đọc API, viết SQL, tự build module ERP lóc cóc. Rồi một ngày nhận ra mình hợp với phần hỏi "tại sao" hơn là phần "viết sao cho chạy".

Nên bài này mình không khuyên "nên hay không". Mình kể chuyện thật, để bạn tự soi vào.

## Cái được: bạn hiểu dev nghĩ gì

Dev chuyển sang BA có một lợi thế mà BA thuần nghiệp vụ không có: nghe requirement xong là hình dung được technical constraint ngay.

Khi dev nói "cái này phải gọi batch 100 records, không thì timeout", bạn hiểu ngay nó nghĩa là gì. Khi user đòi một màn hình real-time update liên tục, bạn biết cái đó tốn resource ra sao. Dev không "bịp" được bạn, mà cũng chẳng phải giải thích lại từ đầu.

Mình viết kỹ chỗ này rồi: [Làm BA có cần biết code không](/posts/lam-ba-co-can-biet-code-khong/). Đọc xong bạn sẽ thấy code không phải gánh nặng — nó là vũ khí.

## Cái khó: bỏ thói quen "viết cho chạy"

Dev giỏi là dev viết ra thứ chạy được. BA giỏi là người dừng lại hỏi "chạy để làm gì".

Cái khó nhất không phải học nghiệp vụ. Nghiệp vụ vài tháng là nắm. Cái khó là bỏ bản năng "thấy vấn đề là nhảy vào giải". BA ngồi họp, nghe user than "em muốn thêm một nút báo cáo", phải ghìm mình lại mà hỏi ngược: "Anh cần báo cáo đó để trả lời câu hỏi gì?"

Cái phản xạ hỏi "tại sao" trước khi viết — nó mất thời gian mới thành bản năng.

{{< compare title="Một vấn đề, hai kiểu nhìn" >}}
| Dev nghĩ | BA nghĩ |
|---|---|
| Code chạy là xong | Code chạy để trả lời câu hỏi gì |
| Bug là lỗi cần sửa | Bug là dấu hiệu requirement chưa rõ |
| User nói gì làm nấy | User nói là một chuyện, cần là chuyện khác |
{{< /compare >}}

## Nhưng không phải dev nào cũng hợp làm BA

Mình nói thẳng: đừng nghĩ chuyển sang BA là "nhẹ hơn" vì khỏi code. BA không nhẹ hơn, chỉ mệt kiểu khác.

Dev mệt vì bug. BA mệt vì stakeholder không chịu nói thật, vì requirement đổi ba lần một tuần, vì đứng giữa user và dev mà cả hai đều không hài lòng. Có bạn dev rẽ sang BA rồi lại quay về code, vì không chịu nổi cảnh ngày nào cũng họp, không có cái "done" rõ ràng.

Trước khi nhảy, tự hỏi một câu: bạn thích một ngày kết thúc bằng "code chạy rồi", hay bằng "mọi người hiểu nhau hơn rồi"? Cả hai đều có giá, nhưng là hai kiểu người khác nhau.

## Rẽ sang BA mà không phải nghỉ việc

Đừng nghỉ việc rồi mới học. Bắt đầu ngay trong vai dev của mình:

📌 **Đọc requirement kỹ hơn.** Trước khi code, hỏi PM hoặc BA một câu "tại sao" mỗi lần. Bạn sẽ ngạc nhiên vì một nửa requirement mơ hồ tới mức dev phải tự đoán.

📈 **Học SQL.** Không phải để thành data engineer, mà để tự mở dữ liệu ra trả lời câu hỏi. [SQL cho BA](/posts/sql-cho-ba-select-join-group-by-la-du-song/) mình viết đủ để bạn sống được.

🗣️ **Xung phong họp với user.** Dev mà chịu ngồi họp nghiệp vụ, nghe user kể chuyện đau khổ, là đã đi được nửa đường sang BA rồi.

Chuyển từ dev sang BA không phải bỏ code. Nó là đổi câu hỏi trong đầu: từ "viết sao cho chạy" thành "viết cái gì cho đúng người".

Câu hỏi mình để lại: nếu bạn đang là dev và muốn rẽ sang BA, điều khiến bạn chán code — là việc code, hay là việc code những thứ không ai cần?
