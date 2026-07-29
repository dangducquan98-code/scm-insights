---
title: "Nợ quyết định (decision debt) — thứ nguy hiểm hơn technical debt không dashboard nào đo được"
date: 2026-07-29T09:00:00+07:00
draft: false
featureimage: "images/posts/no-quyet-dinh-decision-debt.jpg"
featureAlt: "Sơ đồ so sánh decision debt và technical debt trong dự án ERP"
tags: ["decision-debt", "business-analyst", "erp", "quan-tri-du-an"]
description: "Decision debt là thứ tích tụ khi ERP program trì hoãn quyết định quan trọng và thay bằng giả định tạm thời. Nguy hiểm hơn technical debt vì không ai tracking được."
---

Mình từng ngồi một cuộc họp kéo dài 2 tiếng chỉ để chốt một câu hỏi tưởng chừng đơn giản: "Cột này để mấy số thập phân?" Dev nói 4 là đủ kỹ thuật. User nói 6 vì sợ sai số làm tròn. BA ngồi giữa, mỗi bên một ý, cuối cùng cả team thống nhất "để 6 cho chắc" — rồi ai về nhà nấy, chẳng có decision log nào được ghi lại.

Một quyết định nhỏ × 100 lần trong một dự án ERP = **decision debt**.

ERP Today tuần này có một bài viết rất hay về khái niệm này. Họ gọi decision debt là thứ tích tụ khi các ERP program trì hoãn những quyết định kinh doanh quan trọng và thay thế bằng giả định tạm thời. Họ dẫn McKinsey ước tính kỹ thuật debt đã chiếm 20-40% giá trị tech estate, nhưng decision debt còn nguy hiểm hơn — vì nó không bao giờ xuất hiện trên risk register hay dashboard.

## Decision debt là gì

Nói nôm na: decision debt là khoảng cách giữa "chúng ta biết cần quyết định cái gì" và "chúng ta thực sự chốt được nó".

Trong một ERP program, nó tích tụ khi team:

- Trì hoãn một quyết định architecture vì "để sau go-live tính"
- Chọn giải pháp tạm thời vì deadline đang dí
- Không chốt được business rule vì stakeholders không đồng thuận
- Dùng assumption thay vì data để đi tiếp

Mỗi quyết định bị hoãn là một khoản nợ. Lãi suất của nó là rework — khi dev đã code xong theo assumption, user mới nói "ơ nhưng hồi đó mình nói vậy thôi chứ không phải vậy".

Như mình từng viết trong bài [tại sao dự án ERP thất bại](/posts/tai-sao-du-an-erp-that-bai/), một trong những lý do sâu xa nhất mà ít ai nhìn ra chính là decision debt. Dự án ngốn 2 năm, 15 tỷ, nhưng thất bại không phải vì chọn sai phần mềm — mà vì không ai dám chốt quyết định đúng lúc.

## Tại sao decision debt nguy hiểm hơn technical debt

Technical debt có công cụ đo. SonarQube cho biết code quality của bạn đang ở mức nào. Bạn có thể lên kế hoạch refactor dần. Có thể tính toán được lãi suất.

Decision debt thì vô hình. Không có dashboard nào hiển thị: "Bạn đang nợ 47 quyết định chưa chốt, rework ước tính 340 giờ." Nó giống như một tảng băng trôi — bạn không thấy nó cho đến khi đâm vào.

Và nó ngấm ngầm hơn nhiều. Một quyết định sai thì dễ fix — chỉ cần quay lại chốt lại. Nhưng 47 quyết định bị hoãn, mỗi cái dựa trên một assumption khác nhau — khi chúng đụng nhau là lúc dự án vỡ. Dev nói "em code theo assumption A", Business nói "nhưng bên em muốn B". BA lúc đó mới ngã ngửa ra là mình quên chốt A vs B từ 3 tháng trước.

## Ba dấu hiệu nhận biết decision debt

Mình thấy 3 dấu hiệu này lặp đi lặp lại ở hầu hết các dự án ERP:

### Meeting liên tục nhưng không có decision log

Họp xong ai cũng gật đầu — nhưng không ai viết ra "đã quyết định XYZ". Tuần sau lại họp lại, hỏi lại cùng một câu, không ai nhớ. Đây là dấu hiệu số một.

### Assumption checklist dài hơn requirement list

Nếu decision log của bạn toàn "giả định là...", "chờ confirm với...", "tạm thời coi như..." — bạn đang nợ. Assumption là một dạng nợ chưa đáo hạn.

### Dev bắt đầu code trước khi BA kịp confirm

Khi dev phải "đoán" business logic vì BA chưa kịp chốt với stakeholder — đó là decision debt đang đẻ lãi. Và lãi suất của nó thường rất cao.

## BA có thể làm gì

Là BA, mình nghĩ mình có trách nhiệm prevent decision debt — không phải chỉ là ghi nhận requirement rồi bàn giao.

Mấy cái nhỏ nhưng hiệu quả:

- **Decision log** — sau mỗi workshop, ghi lại 2-3 decision đã chốt (dù nhỏ) + decision pending + người chốt + deadline. Gửi email trong vòng 24h. Làm đều, không bỏ phiên nào.
- **Decision deadline** — với mỗi decision quan trọng, set deadline cứng. Quá deadline thì escalate lên sponsor. Không để "pending" kéo dài quá 1 tuần.
- **Assumption tracker** — mỗi assumption là một risk. Nếu assumption quá 2 tuần chưa được verify, báo động đỏ.
- **Visual dependency map** — cho stakeholders thấy: quyết định A chưa chốt thì module B không thiết kế được, team C bị chờ. Trực quan hóa cái giá của việc trì hoãn.

Bài [scope creep — chuyện kinh điển và cách sống sót](/posts/scope-creep-chuyen-kinh-dien-va-cach-song-sot/) mình viết tuần trước cũng có một góc nhìn tương tự: càng sợ chốt quyết định, càng tốn nhiều rework sau này.

## Nhưng...

...nói thật, tránh tuyệt đối decision debt là không thể. ERP program phức tạp, có những decision cần thời gian — cần dữ liệu, cần approval từ người không có mặt, cần thí nghiệm để biết đáp án.

Vấn đề không phải là "zero decision debt". Vấn đề là quản lý nó như một loại risk chính thức: biết mình đang nợ gì, ảnh hưởng ra sao, và trả dần thế nào. Cũng giống như câu chuyện mình viết trong bài [tích hợp trước AI — bài học từ dược phẩm và quốc phòng](/posts/tich-hop-truoc-ai-bai-hoc-tu-duoc-pham-va-quoc-phong/) — foundation mới quyết định outcome, không phải tốc độ.

Cùng tuần này, ERP Today cũng đăng một bài khác rất đáng đọc: Infor thừa nhận chỉ 5% giá trị agentic AI nằm ở agent — 95% còn lại là governance, data foundation, và accountability. Mình nghĩ decision debt cũng vậy. 95% rủi ro của một ERP program nằm ở những thứ không ai tracking.

## Kết

Decision debt không xuất hiện trên dashboard. Không có số liệu, không có biểu đồ, không có alert. Nhưng BA nào đã từng đi qua một dự án ERP đều biết nó tồn tại. Vấn đề là bạn có dám nhìn thẳng vào nó không.

Hmm... dự án bạn đang làm, có bao nhiêu quyết định đang "chờ confirm" và đã chờ bao lâu rồi?
