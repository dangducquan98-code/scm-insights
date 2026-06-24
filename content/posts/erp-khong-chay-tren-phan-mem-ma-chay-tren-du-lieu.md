---
title: "ERP KHÔNG CHẠY TRÊN PHẦN MỀM, MÀ CHẠY TRÊN DỮ LIỆU — BÀI HỌC TỪ AIRBUS"
date: 2026-06-24T17:30:00+07:00
draft: false
featureimage: "images/posts/erp-khong-chay-tren-phan-mem-ma-chay-tren-du-lieu.jpg"
featureAlt: "Sơ đồ kết nối dữ liệu ERP và sản xuất"
description: "Airbus chạy SAP S/4HANA, MES, IBP — nhưng thứ làm nên sự khác biệt không phải phần mềm, mà là dữ liệu sạch và tích hợp xuyên suốt. Bài học cho BA làm ERP."
tags: ["erp", "business-analyst", "chuyen-doi-so", "tich-hop-du-lieu"]
---

Mới đọc một bài trên ERP Today về cách Airbus vận hành SAP — và mình ngồi nghĩ mãi.

Airbus có SAP S/4HANA, SAP Manufacturing Execution trên dây chuyền lắp ráp, SAP Integrated Business Planning xuyên suốt chuỗi cung ứng. Họ chở thân máy bay, cánh, đuôi qua châu Âu bằng tàu Beluga, ráp tại một dây chuyền cuối cùng, mỗi chiếc wide-body mất đến 12 tháng để hoàn thiện.

Nghe thì có vẻ là câu chuyện về phần mềm, nhưng sâu bên trong, đó là câu chuyện về dữ liệu.

Nicolas Jourdan, senior strategist ở Airbus, nói thẳng: "Without SAP, our systems would not be as efficient as they are." Câu này mình đọc đi đọc lại. Ông ấy không nói "SAP làm mọi thứ hoàn hảo". Ông ấy nói "không có SAP thì không hiệu quả như bây giờ" — và cái hiệu quả đó đến từ việc dữ liệu chạy xuyên suốt, không phải từ việc có SAP.

## 1. Vấn đề không phải là ERP gì, mà là dữ liệu có chạy xuyên không

Bài báo trích một nghiên cứu từ SAPinsider, mình thấy số đáng chú ý:

- **65%** tổ chức ưu tiên end-to-end, near-real-time asset visibility
- **64%** tập trung vào dữ liệu quản lý tài sản nhất quán và chất lượng cao
- Nhưng chỉ **16%** ưu tiên digital twin để kết nối NPI với quản lý tài sản

Nghĩa là ai cũng biết dữ liệu quan trọng, nhưng rất ít nơi thực sự làm được chuyện kết nối từ khâu thiết kế đến vận hành.

Mình từng gặp cảnh này nhiều lần. Một khách hàng có ERP, có MES, có hệ thống kho — nhưng mỗi hệ thống là một ốc đảo. Dữ liệu từ PLM sang ERP phải export Excel, ERP sang MES lại import bằng tay. Mỗi lần có thay đổi cấu hình sản phẩm là mất 2-3 ngày đối chiếu.

Airbus giải quyết bằng Skywise — một nền tảng gom dữ liệu từ aircraft, operations, maintenance lại một chỗ, chạy AI hỗ trợ predictive maintenance. Nhưng điểm mấu chốt: họ xây Skywise trên một SAP core đã được kết nối sạch sẽ trước đó, không phải là thêm một lớp sơn mới lên đống dữ liệu hỗn độn.

## 2. Integration gaps — nơi BA dễ bị ăn hành nhất

Bài báo chỉ ra 4 ranh giới tích hợp dễ đứt gãy nhất trong aerospace, nhưng mình thấy nó đúng với mọi ngành sản xuất:

- **PLM qua ERP**
- **ERP qua MES**
- **ERP qua hệ thống nhà cung cấp**
- **ERP qua MRO (Maintenance, Repair -- Overhaul)**

Chỗ nào có ranh giới, chỗ đó có spreadsheet archaeology — cái cảnh đào bới file Excel để đối chiếu dữ liệu. Một revision sai, một configuration thay đổi không cập nhật kịp, là cả chuỗi delivery, quality, exception-management vỡ trận.

Là BA, mỗi lần nghe stakeholder nói "cái này bọn anh toàn làm thủ công bằng Excel mà, cũng ổn mà" — mình biết ngay đây là pain-point thật. Vì ổn ở quy mô nhỏ, nhưng scale lên là chết.

## 3. Ba việc BA cần làm ngay

Từ câu chuyện của Airbus, mình rút ra 3 điều cho anh em làm ERP và BA:

**Thứ nhất — map integration gaps trước khi bàn đến AI hay công nghệ mới.**
Đừng vội chạy theo trend AI agents hay digital twin khi chưa biết dữ liệu từ PLM sang ERP đã clean chưa. Bước đầu tiên: inventory các handoff PLM–ERP, ERP–MES, ERP–supplier. Xem chỗ nào còn manual reconciliation. Đó mới là nơi cần fix trước.

**Thứ hai — predictive maintenance cần trusted master data trước.**
Có AI cỡ nào cũng vô ích nếu asset history, telemetry, configuration records không đáng tin. Mình thấy nhiều dự án AI trong sản xuất thất bại vì skip bước này. Làm sạch master data, fix integration, xong mới tính đến chuyện AI.

**Thứ ba — close the NPI-to-asset-management loop.**
Cái handoff từ engineering change sang production, tooling, maintenance, spares planning — đây là một trong những khoảng trống khó nhằn nhất. Program leaders cần coi đây là modernization priority, không phải là sẽ làm sau.

Bài trước mình từng nói về [tại sao dự án ERP thất bại](/posts/tai-sao-du-an-erp-that-bai/) — và integration chính là một trong 5 lý do đó. Cũng gần giống với chuyện [cấu hình IFS Cloud Procurement](/posts/ifs-cloud-procurement-pitfalls/) — nếu config mà không hiểu flow dữ liệu, thì sớm muộn cũng gặp rắc rối.

## Nhưng...

Mình không nói tất cả mọi nơi đều phải làm như Airbus. Không phải. Quy mô của họ là global, nguồn lực là unlimited gần như. Cái mình học được là tư duy: đầu tư vào dữ liệu trước, phần mềm sau.

Airbus có SAP, có Skywise, có AI — nhưng thứ làm họ khác biệt là họ giải quyết integration problem trước khi bỏ tiền vào công nghệ. Một bài viết khác của ERP Today về NTT DATA cũng chỉ ra rằng AI agents đang bắt đầu ảnh hưởng đến product planning và ERP đầu vào — nhưng nếu dữ liệu nền không sạch, AI chỉ sinh ra rác nhanh hơn thôi.

Với mình, lúc đi tư vấn hay review hệ thống cho khách hàng, câu hỏi đầu tiên không phải là xưởng dùng ERP gì, mà là dữ liệu từ bước A sang bước B mất bao lâu, bao nhiêu người phải gõ lại tay.

Câu trả lời thường làm mình... ừ thì, biết mà.

---

Bạn đã bao giờ gặp cảnh dữ liệu giữa hai hệ thống phải đi bộ qua Excel chưa? Làm sao để thuyết phục team đầu tư vào integration trước khi mua công nghệ mới? Hãy chia sẻ dưới comment nhé. 👇

#DehaDigitalSolutions #erp #chuyen-doi-so #business-analyst
