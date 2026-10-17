---
title: "Portfolio BA khi chưa có dự án khách — làm case simulation thay kinh nghiệm"
date: 2026-10-17T21:30:00+07:00
draft: false
featureimage: "images/posts/portfolio-ba-khi-chua-co-du-an-khach-case-simulation.jpg"
featureAlt: "BA fresher dựng portfolio bằng case simulation trên bàn làm việc"
description: "Chưa có dự án khách vẫn làm được portfolio BA: chọn quy trình quen, vẽ as-is, chỉ ra pain-point có số, viết requirement kèm acceptance criteria."
tags: ["business-analyst", "portfolio", "fresher", "ba-thuc-chien"]
---

"Anh ơi em chưa đi làm, chưa có dự án nào thì portfolio viết cái gì?" — câu này mình nhận không dưới chục lần, từ sinh viên năm ba tới người vừa chuyển ngành. Ai cũng nghĩ portfolio là bằng chứng mình từng làm dự án thật. Không có dự án thì bó tay.

Nhưng nghĩ lại: nhà tuyển dụng fresher đâu kỳ vọng bạn có ba năm kinh nghiệm. Họ cần biết bạn có biết cách nghĩ như một BA không. Mà cái đó thì chứng minh được, kể cả khi chưa từng ký hợp đồng nào.

## Họ không tìm dự án, họ tìm cách bạn nghĩ

Một CV fresher ghi "thành thạo nghiệp vụ, giao tiếp tốt, chịu được áp lực" thì không ai tin, cũng không ai bắt bẻ — vì nó vô nghĩa. Cái đáng đọc là: bạn nhìn một quy trình và chỉ ra được chỗ nào đang tắc, chỗ nào đang thừa.

Case simulation làm đúng việc đó. Bạn không cần khách hàng. Bạn chỉ cần một quy trình có thật và một tờ giấy.

## Lấy quy trình bạn đã thấy hằng ngày

Đừng chọn cái gì to tầm ERP cho cả tập đoàn. Chọn cái bạn từng sống trong đó: quy trình đặt hàng của quán cà phê chỗ bạn làm thêm, quy trình chấm công của công ty mẹ, quy trình nhập kho của cửa hàng tạp hóa, quy trình đăng ký môn học ở trường.

Mình hay khuyên chọn quy trình có 3-5 bước và có ít nhất một người phải chuyển giấy tờ hoặc gõ lại dữ liệu cho người khác. Chỗ gõ lại đó chính là mỏ vàng — 90% pain-point nằm ở đó.

## Một case đủ dùng cần 5 phần

📌 **Bối cảnh** — 5 dòng. Ai làm, làm ở đâu, mục đích là gì. Đừng phân tích gì ở đây.

🔄 **As-is** — vẽ lại quy trình hiện tại bằng swimlane, đúng 5-7 bước. Vẽ xấu không sao, miễn người khác đọc hiểu.

🧱 **Pain-point có số** — đây là phần ăn tiền. Không viết "quy trình còn thủ công". Viết "mỗi đơn hàng phải nhập liệu hai lần, ước tính 4 phút/đơn, một ngày 60 đơn là mất 4 tiếng". Số ước lượng vẫn tốt hơn cảm tính, miễn bạn nói rõ là ước lượng.

🎯 **To-be** — quy trình sau khi sửa. Chỉ cần 3-4 thay đổi, đừng vẽ lại cả thế giới.

📝 **Requirement + acceptance criteria** — 3-5 user story kèm Given-When-Then. Mình có bài viết kỹ phần này ở [User story và acceptance criteria](/posts/user-story-acceptance-criteria/), đọc xong là làm được ngay.

{{< info label="💡" >}}
Mỗi case đừng quá 8-10 trang. Dài quá thì người ta không đọc. Một case 8 trang sắc gọn ăn đứt bộ hồ sơ 40 trang toàn sơ đồ copy trên mạng.
{{< /info >}}

## Đừng làm năm case nông

Sai lầm phổ biến nhất: làm 5 case, mỗi case một trang, mỗi case một lĩnh vực. Nhìn vào tưởng đa dạng, đọc kỹ thì không case nào cho thấy bạn hiểu vấn đề tới đâu.

Một case làm sâu — có as-is, có số, có to-be và có phần bạn tự phản biện "nếu làm thế này thì rủi ro gì" — đáng giá hơn nhiều. Người phỏng vấn sẽ hỏi đúng một câu: "Vì sao em chọn giải pháp này?" Nếu bạn trả lời được, case đó đã làm xong nhiệm vụ. Chuyện phỏng vấn sâu hơn thế nào mình kể ở bài [Phỏng vấn BA fresher: câu hỏi thật, trả lời theo STAR](/posts/phong-van-ba-fresher-cau-hoi-that/).

## Nhưng đừng đánh tráo thành kinh nghiệm thật

Có bạn làm case xong rồi ghi trong CV là "dự án tối ưu quy trình kho cho doanh nghiệp X". Đừng. Người phỏng vấn chỉ cần hỏi ba câu về stakeholder là biết ngay.

Cách nói đúng rất đơn giản: "Đây là case em tự phân tích dựa trên quy trình em quan sát được, không phải dự án khách hàng." Không ai trừ điểm vì câu đó. Người ta chỉ trừ điểm khi phát hiện bạn nói dối. Mình từng chứng kiến một bạn kể chuyện "dự án thật" rất trôi chảy cho tới khi bị hỏi quy trình duyệt mua hàng nội bộ — và tắt đài.

Thêm một chi tiết nữa: ghi rõ bạn dùng tool gì. Vẽ bằng draw.io hay Figma, viết spec bằng Google Docs hay Notion, quản lý backlog bằng Jira bản free. Fresher mà biết dùng tool thì đỡ được kha khá thời gian onboarding.

Case simulation không biến bạn thành BA có kinh nghiệm. Nó chỉ chứng minh bạn đã tập nghĩ như BA trước khi được trả lương để làm việc đó. Với người tuyển fresher, thế là đủ để gọi bạn vào vòng trong.

Câu hỏi mình để lại: nếu phải chọn một quy trình quanh bạn để mổ xẻ thành case đầu tiên, bạn sẽ chọn cái nào — và chỗ nào đang làm bạn phát điên nhất?
