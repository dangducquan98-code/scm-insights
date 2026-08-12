---
title: "AI không cứu nổi quy trình rời rạc — nhưng nó sẽ chỉ cho bạn thấy"
date: 2026-08-12T16:30:00+07:00
draft: false
featureimage: "images/posts/ai-khong-cuu-noi-quy-trinh-roi-rac.jpg"
featureAlt: "Tấm gương trong nhà máy phản chiếu quy trình hỗn độn và quy trình ngăn nắp"
description: "AI không làm hệ thống thông minh hơn — nó phơi bày dữ liệu yếu, quy trình rời rạc và thiếu ownership. Trước khi mua AI, doanh nghiệp cần sửa nền móng ERP đã."
tags: ["ai", "erp", "business-analyst", "data-quality", "quy-trinh"]
---

Tuần trước mình ngồi cà phê với một anh giám đốc nhà máy. Ảnh hào hứng khoe: "Sắp tới tụi anh mua AI về chạy scheduling với dự báo đơn hàng. Khỏi cần planner ngồi chỉnh tay từng đơn nữa." Mình hỏi một câu: "Dữ liệu BOM với lead time trên ERP của anh giờ chuẩn hết chưa?"

Ảnh im một hồi. "Thì... cũng tàm tạm."

Đó. Mình không anti-AI. Nhưng sau mấy năm đi triển khai ERP với làm BA, mình thấy một pattern lặp đi lặp lại: doanh nghiệp muốn AI, nhưng cái nền để AI chạy trên đó đang là một mớ hỗn độn. Robert Kramer — managing partner của KramerERP — vừa viết một bài trên ERP Today ghim đúng chỗ ngứa này: **AI không làm hệ thống thông minh hơn. Nó phơi bày những điểm yếu vốn có.** Dữ liệu yếu, quy trình rời rạc, ownership mập mờ.

Đây không phải chuyện công nghệ. Đây là chuyện operating model.

## 🏭 AI chỉ chạy nhanh hơn cái đã hỏng sẵn

Kramer viết: "AI does not remove those weaknesses. It can make them move faster."

Mình đã thấy cảnh này ngoài đời thật. Một đơn hàng bị giữ vì vượt credit limit — nhưng email escalation gửi cho một người đã nghỉ việc ba tháng trước. Một purchase requisition nằm im trong inbox của approver, mà approver không biết mình là approver. Một BOM sai từ đời nào, xong production cứ thế chạy, tạo ra thành phẩm sai spec.

Giờ tưởng tượng AI agent được thả vào cái mớ này. Nó sẽ escalate nhanh hơn — vào đúng cái email cũ. Nó sẽ approve nhanh hơn — dựa trên cái BOM sai. Nó sẽ "tự động hóa" — nhưng là tự động hóa sai.

Kramer gọi ERP là "control point for execution." Không phải chỗ để AI tung hoành. Mà là chỗ control: định nghĩa approval threshold, exception path, escalation rule. AI có thể đề xuất, routing, thậm chí execute — nhưng phải nằm trong vòng kiểm soát, với audit trail rõ ràng, và con người giữ quyền override.

Điều này mình đã viết kỹ hơn ở bài về [nợ quyết định](/posts/no-quyet-dinh-decision-debt/) — thứ nguy hiểm hơn technical debt mà không dashboard nào đo được.

## 📊 Nhìn thấy không có nghĩa là giải quyết được

Supply chain bây giờ visibility tốt hơn xưa nhiều. Bạn biết hàng đang ở đâu, chậm bao lâu, tồn kho bao nhiêu. Nhưng Kramer có một câu đáng ghim: "Visibility without decision logic only shows the problem in higher resolution."

Giống như bạn gắn camera 4K trong nhà, thấy rõ mồn một cảnh nhà mình đang cháy. Rõ hơn. Nhưng không dập lửa được.

Cái thiếu ở đây không phải data. Mà là connected operating model: data → insight → decision → action → audit. Một chuỗi liền mạch. Mình đã thấy nhiều công ty đầu tư dashboard hoành tráng, real-time data đẹp mê — nhưng khi shortage xảy ra, planner vẫn phải gọi điện, check Excel, forward email qua 3 phòng ban mới ra được quyết định. AI mà recommend trong cái mớ đó thì cũng chỉ là thêm một tab browser nữa thôi.

## 🧹 Dữ liệu bẩn = AI càng ngu

Cái này mình đã viết rồi trong bài [ERP không chạy trên phần mềm, mà chạy trên dữ liệu](/posts/erp-khong-chay-tren-phan-mem-ma-chay-tren-du-lieu/) — nhưng nhắc lại không bao giờ thừa.

Mình từng ngồi clean data ba tuần cho một dự án migration. Item master trùng. Customer code một đằng trên CRM, một nẻo trên ERP. Supplier classification thì... ai nhớ đâu mà phân. Chạy MRP trên cái đống đó, kết quả ra toàn rác.

Giờ tưởng tượng AI agent lấy chính cái data đó để recommend mua hàng, chọn supplier, chốt lead time. Bạn có dám không?

Gartner báo cáo hồi tháng 4/2026: tổ chức có AI initiative thành công đầu tư gấp 4 lần vào data quality, governance, AI-ready people và change management so với tổ chức thất bại. Không phải họ có AI xịn hơn. Họ chỉ không để AI chạy trên nền rác.

## ⚖️ Decision rights trước, agents sau

Đây là đoạn mình tâm đắc nhất trong bài của Kramer. Trước khi thả AI agent vào core process, phải trả lời được: **ai authorize, cho ai, trong giới hạn nào, escalate ra sao, audit thế nào.**

Nghe quen không? Đúng là mấy thứ BA tụi mình ngồi facilitate với stakeholders hàng ngày. Nhưng thực tế thế nào? Mình thấy đa số công ty chưa có process map rõ ràng. Ai approve cái gì còn chưa thống nhất. Escalation path phụ thuộc vào "ai đang có mặt ở văn phòng hôm đó."

Xong định thả AI vào tự chạy?

Thôi. Ngồi xuống vẽ process map, định nghĩa RACI, thống nhất escalation rule trước đã. Mấy thứ nhàm chán ấy chính là thứ quyết định AI có chạy được hay không. Cũng là thứ mình nhắc tới trong bài [tích hợp trước AI](/posts/tich-hop-truoc-ai-bai-hoc-tu-duoc-pham-va-quoc-phong/) — bài học từ cả dược phẩm lẫn quốc phòng Mỹ.

## Nhưng...

Nói vậy không có nghĩa là đừng làm AI. Mình không anti-AI. Mình chỉ nói: AI sẽ có giá trị khi quy trình và dữ liệu đủ sạch, đủ rõ ràng. Nếu bạn đang nghĩ "mua AI về nó tự fix hết" — sai. AI không fix gì hết. Nó làm mọi thứ nhanh hơn. Kể cả sai.

Bắt đầu từ thứ nhàm chán nhất: data cleansing, process documentation, role definition, exception handling. Mấy thứ BA làm hàng ngày ấy. Không hào nhoáng. Không có demo đẹp. Nhưng là nền.

Lần tới có ai chào bạn giải pháp AI "cách mạng hóa doanh nghiệp trong 3 tháng", hỏi lại họ một câu: "ERP của tôi data đã sạch chưa? Quy trình đã mapped chưa? Approver đã biết mình là approver chưa?" Nếu câu trả lời là chưa — thì AI chỉ là cái loa phóng thanh cho mớ hỗn độn hiện tại thôi.

Bạn đã thấy trường hợp nào AI làm lộ ra điểm yếu quy trình trong công ty mình chưa, hay toàn thấy demo đẹp không?
