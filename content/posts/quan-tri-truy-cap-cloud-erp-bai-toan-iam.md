---
title: "Triển khai ERP cloud: thứ âm thầm giết dự án là governance (không phải migration)"
date: 2026-07-22T09:00:00+07:00
draft: false
featureimage: "images/posts/quan-tri-truy-cap-cloud-erp-bai-toan-iam.jpg"
featureAlt: "Quản trị truy cập và bảo mật ERP cloud"
description: "Cloud ERP chạy tốt, authentication ổn, integration OK. Nhưng governance — role definitions, approval workflows, access ownership — lại lộ ra bao nhiêu lỗ hổng. Góc nhìn BA về cái bẫy ít ai nói trước khi deploy ERP trên cloud."
tags: ["business-analyst", "erp", "cloud-erp", "quan-tri-truy-cap", "digital-transformation"]
---

Tuần trước mình đọc được một bài báo hay trên ERP Today — tác giả Sridevi Mutyala từ Oracle, nói về identity governance trong cloud ERP.

Bài báo kể một chuyện tưởng đơn giản: một nhân viên chuyển phòng ban. HR update xong. Mấy ứng dụng cloud ERP (Oracle Fusion, SAP S/4HANA, Dynamics 365) đều chạy đúng config. Authentication OK. Provisioning OK. Integration OK.

Nhưng access vẫn bị delay. Vì approval paths khác nhau giữa các ứng dụng. Role definitions không đồng bộ. Và ownership của quyết định access — không ai nhớ rõ là của ai.

Chuyện ấy quen không? Với mình thì quen lắm.

## 🏭 1. Công nghệ không phải vấn đề — governance mới là

Đoạn Sridevi viết mà mình tâm đắc nhất:

> Identity management challenges often originate in governance structures that have not kept pace with increasingly interconnected cloud ERP environments.

Nôm na là: *Công nghệ authentication, provisioning, integration đều hoạt động tốt. Nhưng cấu trúc governance không theo kịp tốc độ mở rộng của hệ thống.*

Đây là cái bẫy mà ít ai nói trước khi deploy ERP cloud. Ai cũng lo migration, data cleansing, integration testing. Í ai lo: role definitions của mình có còn đúng không? Approval paths có bị phân mảnh không? Ai là owner thực sự của quyết định access?

## 📋 2. Góc nhìn BA: Governance không phải chuyện của IT

Khi làm BA cho các dự án ERP cloud, mình hay thấy một pattern: đội dự án coi IAM là một workstream kỹ thuật, giao cho team security hoặc infrastructure.

Nhưng Sridevi chỉ ra một điểm rất tinh:

> The greatest obstacles appeared when governance decisions lacked clear business ownership.

Governance là chuyện của business, không phải IT. Team IT có thể setup automation, enforce security policies. Nhưng việc định nghĩa "ai được access gì, ai approve, khi nào cần review" — đó là business decision.

Mà BA chính là cầu nối giữa business và IT. Nên nếu BA không đặt những câu hỏi về governance từ giai đoạn requirements, thì sau go-live sẽ rất muộn.

Bài này cũng làm mình nhớ đến ["Em ơi, làm giống Excel cũ nhé"](/posts/em-oi-lam-giong-excel-cu-nhe/) — cũng cùng một vấn đề: stakeholder nghĩ mọi thứ đơn giản chỉ vì công nghệ có sẵn. Nhưng cái thiếu là process design và governance.

## ⚠️ 3. Cái bẫy "cloud sẽ tự lo"

Có một assumption rất nguy hiểm khi chuyển lên cloud: "Cloud ERP có sẵn role-based access control (RBAC) rồi, chỉ việc config."

Đúng, cloud ERP có RBAC. Nhưng RBAC chỉ là một cái khung. Cái quyết định là role definitions, segregation of duties (SoD), approval matrices — những thứ này không có sẵn, phải do tổ chức tự xây.

Bài báo dẫn chứng: trong các cuộc audit, người ta thường phát hiện role definitions lệch chuẩn giữa các ứng dụng, approval workflows khác nhau, và ownership của các quyết định access không còn rõ ràng. Tất cả tích lũy qua nhiều năm, từng thay đổi nhỏ một.

Cloud không tạo ra những vấn đề này. Nó chỉ phơi bày chúng ra.

Nếu bạn đã đọc bài [ERP Cloud vs On-premise cho nhà máy Việt](/posts/erp-cloud-vs-on-premise-cho-nha-may-viet/) của mình, bạn sẽ thấy cùng một logic: chọn cloud hay on-premise không phải là câu hỏi duy nhất. Câu hỏi lớn hơn là tổ chức của bạn đã sẵn sàng cho cái cách cloud vận hành chưa.

## Nhưng...

Cloud ERP cũng không phải thủ phạm. Nếu bạn đang chạy ERP on-premise, governance gaps cũng tồn tại — chỉ là nó ít được chú ý hơn vì mọi thứ chạy chậm hơn, ít interconnected hơn.

Cloud ERP, với tốc độ thay đổi và số lượng integrations, phơi bày governance gaps nhanh hơn và đau hơn.

Vậy giải pháp là gì? Sridevi gợi ý ba điều:

1. **Clear role ownership** — ai thực sự chịu trách nhiệm về role definitions, không để IT tự luận
2. **Standardized approval workflows** — không để mỗi business unit tự làm theo cách riêng
3. **Governance như một operational discipline** — không phải một lần rồi thôi, mà là quy trình liên tục, gắn với employee lifecycle

Cả ba điều này, BA hoàn toàn có thể chủ động đưa vào requirements và solution design ngay từ đầu.

---

Thế nên lần tới bạn ngồi requirements workshop cho một dự án ERP cloud, thử hỏi đội dự án một câu:

> Sau go-live, ai sẽ approve access? Và nếu một đứa chuyển phòng ban, mất bao lâu để access được cập nhật trên tất cả các ứng dụng?

Câu trả lời sẽ nói lên rất nhiều về governance của tổ chức bạn. Có khi còn nhiều hơn cả cái migration plan.

**Câu hỏi để suy ngẫm:** Ở dự án ERP bạn đang làm hoặc từng làm, governance được xử lý như một workstream kỹ thuật (giao cho IT) hay một business process (có business ownership rõ ràng)?
