---
title: "Tích hợp trước AI: Bài học từ dược phẩm và quốc phòng Mỹ"
date: 2026-07-15T16:15:00+07:00
draft: false
featureimage: "images/posts/tich-hop-truoc-ai-bai-hoc-tu-duoc-pham-va-quoc-phong.jpg"
featureAlt: "Sơ đồ tích hợp ERP và hệ thống nhà máy"
description: "Ngành dược phẩm ưu tiên integration hơn AI khi chạy SAP S/4HANA. DLA quốc phòng Mỹ chọn audit readiness làm design requirement. Bài học cho BA: Governance và integration là nền tảng, AI chỉ là topping."
tags: ["erp", "business-analyst", "tich-hop", "chuyen-doi-so", "sap"]
---

Tuần rồi mình đọc được hai case study trên ERP Today làm mình suy nghĩ cả buổi tối.

Một bài về ngành dược phẩm — họ đang chạy SAP S/4HANA migration nhưng mối quan tâm số một không phải AI. Một bài về Defense Logistics Agency (DLA) của Mỹ — audit readiness lại là động lực chính cho ERP modernization của họ, vượt trước kế hoạch nhiều năm.

Hai ngành khác nhau hoàn toàn: một bên là thuốc men, một bên là vũ khí. Nhưng chung một câu chuyện: **AI không thể cứu bạn nếu integration với governance chưa có**.

Mình đã từng viết về [ERP không chạy trên phần mềm, mà chạy trên dữ liệu](/posts/erp-khong-chay-tren-phan-mem-ma-chay-tren-du-lieu/) — bài này đi sâu hơn về cái giá của việc bỏ qua hai thứ đó.

## 🏭 Ngành dược: Integration > AI

Bài báo phân tích ngành pharma đang migrate lên SAP S/4HANA. Điều đáng chú ý: họ chọn **integration và audit readiness làm ưu tiên số một**, hơn hẳn AI adoption.

Lý do đơn giản: FDA guidance (21 CFR Part 11) về data integrity không cho phép cắt góc. Khi bạn sản xuất thuốc, mỗi batch đều phải trace được từ nguyên liệu đầu vào đến lô xuất xưởng. MES (Manufacturing Execution Systems), lab systems, quality platforms — tất cả đều phải tích hợp đồng bộ.

AI outputs chỉ có giá trị khi data và governance frameworks đã vững. Nếu data còn lộn xộn, AI chỉ tạo ra lộn xộn ở tốc độ cao hơn.

SAP BTP (Business Technology Platform) và SAP Integration Suite trở thành thành phần quan trọng nhất — không phải AI copilot. Họ kết nối regulated business processes giữa SAP và non-SAP environments trước, tính chuyện AI sau.

## 📈 DLA: Audit là design requirement, không phải event cuối năm

Case thứ hai còn ấn tượng hơn.

Defense Logistics Agency — cơ quan hậu cần của Lầu Năm Góc — đang chạy đua ERP modernization. Họ chuyển từ legacy systems được customize nặng nề sang SAP NS2 PCE RISE Cloud Services.

Động lực? Không phải "chuyển đổi số" hay "AI cách mạng". Là **audit deadline 2027**.

DLA phải accelerate: establish technical baseline, normalize processes, tạo evidentiary material cho audits. Cái hay là họ xử lý audit không phải như một reporting event cuối năm — mà là design requirement cho ERP program ngay từ đầu.

Mình thấy bài học này đúng với mọi dự án ERP, không chỉ quốc phòng. Nếu bạn thiết kế system từ đầu với mindset "mọi transaction đều phải audit được", bạn sẽ không phải đau đầu retrofit về sau. Mình đã thấy quá nhiều dự án [thất bại vì bỏ qua governance từ đầu](/posts/tai-sao-du-an-erp-that-bai/).

## 💡 BA học được gì?

### Integration không sexy nhưng là xương sống

AI ERP đang hot. Oracle ra mắt Fusion Agentic Applications, IFS xây operations layer, SAP có Joule. Bài nào cũng nói về AI.

Nhưng mấy anh làm ERP implementation biết: chuyện tích hợp MES với ERP, WMS với TMS, Lab system với Quality module — đó mới là thứ quyết định project thành bại. Không có integration vững, AI chỉ là cái loa phóng đại cái mess của bạn lên.

### Governance không phải chuyện của compliance

DLA và pharma dạy mình một bài: **audit readiness thiết kế ngay từ architecture**. Không phải đến giai đoạn testing mới nghĩ "à quên mất cái validation này".

Là BA, khi viết requirements, mình hay hỏi: "Transaction này ai sẽ kiểm tra? Cần log những gì? Data có cần sign-off không?" Governance không phải chuyện của sếp — là chuyện của người thiết kế quy trình.

### AI ngon nhất khi data đã sạch

Bài pharma nói về điều này rất rõ: họ không anti-AI, họ đang chuẩn bị để AI thực sự hiệu quả. Khi MES, Lab systems, quality platforms đã tích hợp đúng, dữ liệu đã đồng bộ, governance frameworks đã vững — *đến lúc đó* AI mới phát huy.

## Nhưng...

Không phải lúc nào cũng chờ đợi.

Cả hai case đều là regulated environments (FDA, DoD). Với doanh nghiệp sản xuất thông thường, bạn có thể chạy song song: vừa clean data, vừa thử nghiệm AI ở phạm vi nhỏ — như predictive maintenance, demand forecasting, hay anomaly detection trong quality.

Vấn đề là thứ tự ưu tiên. Nếu budget ERP có hạn, bạn nên đầu tư vào integration architecture trước, rồi mới đến AI features. Đừng để sales demo AI lung linh làm bạn quên mất rằng data của mình còn chưa sạch.

---

## Câu hỏi để suy ngẫm

Dự án ERP của bạn — hoặc cái bạn đang tư vấn — đã đầu tư đủ cho integration và governance chưa, hay cũng đang chạy theo AI hype mà quên mất nền móng?

#DehaDigitalSolutions #BusinessAnalyst #DigitalTransformation #ERP
