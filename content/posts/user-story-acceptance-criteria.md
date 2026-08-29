---
title: "User story và acceptance criteria: hai thứ fresher hay viết sai nhất"
date: 2026-08-30T03:00:00+07:00
draft: false
featureimage: "images/posts/user-story-acceptance-criteria.jpg"
featureAlt: "BA ghi user story lên thẻ kèm acceptance criteria"
description: "Fresher hay viết user story như một câu requirement khô khan. Dùng INVEST và Given-When-Then để viết story và acceptance criteria chuẩn ngay từ đầu."
tags: ["user-story", "acceptance-criteria", "business-analyst", "agile", "fresher"]
---

Hôm trước mình nhận một file spec từ bạn fresher bên team. Mở ra, toàn những câu kiểu "Hệ thống cho phép người dùng thêm sản phẩm vào giỏ hàng". Đọc lướt tưởng đúng, ngồi xuống thẩm duyệt thì mình hỏi một câu: "Thêm vào giỏ hàng để làm gì?". Bạn ấy đơ ra.

Đấy là lúc mình nhận ra: viết user story không khó, nhưng phần lớn fresher đang viết sai ngay từ câu đầu.

## 📝 1. User story không phải requirement viết dạng câu

Một user story chuẩn chỉ cần trả lời ba thứ: ai, muốn gì, và để làm gì. Công thức "As a... I want... So that..." nghe sách vở, nhưng nó ép bạn phải nghĩ tới người dùng thật, chứ không phải "hệ thống".

{{< compare title="User story: viết sai vs viết đúng" >}}
| Viết sai | Viết đúng |
|---|---|
| Hệ thống cho phép thêm sản phẩm vào giỏ hàng | As a khách hàng, I want thêm sản phẩm vào giỏ để so sánh giá trước khi mua |
{{< /compare >}}

Thấy khác chưa? Câu đúng trả lời luôn "để làm gì" — so sánh giá. Cái "So that" chính là lý do để dev không phải đoán mò.

## ✅ 2. Acceptance criteria: Given-When-Then

User story nói "muốn gì", acceptance criteria nói "thế nào là xong". Không có cái này, dev xong rồi tester cũng chẳng biết test theo cái gì.

{{< info label="🎯" >}}
Given-When-Then đơn giản: **Given** trạng thái ban đầu, **When** hành động, **Then** kết quả mong đợi. Mỗi cái một dòng, viết xong là có luôn test case.
{{< /info >}}

Ví dụ cho cái giỏ hàng phía trên:

- **Given** giỏ hàng đang có 2 sản phẩm
- **When** khách thêm sản phẩm thứ 3
- **Then** giỏ hàng hiển thị 3 sản phẩm, tổng tiền cập nhật ngay

Ba dòng thôi mà dev code đúng, tester test đủ, không ai phải hỏi lại.

## 🎯 3. INVEST: soi story trước khi quăng cho dev

Viết xong đừng vội giao. Lấy 6 chữ INVEST ra soi:

- **I** (Independent) — story đứng một mình được không
- **N** (Negotiable) — còn chỗ để bàn, không phải hợp đồng
- **V** (Valuable) — có mang giá trị cho user không
- **E** (Estimable) — dev ước lượng nổi không
- **S** (Small) — đủ nhỏ để làm gọn trong một sprint
- **T** (Testable) — có acceptance criteria để test không

Fail chữ nào thì quay lại sửa, đừng đợi dev ngồi soi ra mới chạy.

## Nhưng... đừng máy móc quá

Nói vậy chứ không phải story nào cũng phải viết Given-When-Then dài dòng. Bug fix một dòng, hay đổi màu cái nút, thì viết ngắn gọn là xong. Máy móc quá lại thành BA chỉ ngồi viết tài liệu, quên mất việc chính là hiểu người dùng.

Cái khó của user story không nằm ở chỗ viết, mà nằm ở chỗ hỏi đúng người. Không hiểu user thì viết bao nhiêu "So that" cũng là đoán. Nếu bạn mới, đọc lại bài [BA mới vào nghề: 5 cú sốc không ai nói trước](/posts/ba-moi-vao-nghe-5-cu-soc-khong-ai-noi-truoc/) để biết mình sắp đối mặt với gì, rồi bài [khai phá "nhu cầu thật"](/posts/bo-ky-nang-khai-pha-nhu-cau-that-ma-ba-nao-cung-can/) trước khi cầm bút viết story.

## Kết

User story là công cụ, không phải biểu mẫu hành chính. Viết đúng để cả team khỏi đoán, còn mình thì khỏi bị dev réo giữa đêm hỏi "cái này là gì vậy BA".

Bạn viết user story đầu tiên của mình như thế nào? Có bị PM trả lại vì "đây là requirement chứ không phải user story" không?
