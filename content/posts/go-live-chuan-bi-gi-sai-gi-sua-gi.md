---
title: "Go-live: chuẩn bị gì, sai gì, sửa gì"
date: 2026-09-27T03:00:00+07:00
draft: false
featureimage: "images/posts/go-live-chuan-bi-gi-sai-gi-sua-gi.jpg"
featureAlt: "Phòng điều khiển nhà máy đêm go-live ERP"
description: "Go-live ERP không phải ngày hội, là ngày thử lửa. Trước, trong và sau go-live cần chuẩn bị gì, sai gì, sửa gì — từ kinh nghiệm thực chiến dưới xưởng."
tags: ["erp", "go-live", "kinh-nghiem-thuc-chien", "chuyen-doi-so"]
---

Sáng ngày go-live, mình không mặc đồ đẹp để chụp hình. Mình xỏ giày bảo hộ, đứng cạnh anh trưởng ca ở xưởng, nhìn đám công nhân lần đầu quét mã hàng trên hệ thống mới. Tay ai cũng run, không phải vì sợ phần mềm, mà vì cả tháng nay họ nghe đi nghe lại một câu: "Ngày mai mình sẽ không dùng Excel nữa."

Go-live nghe oách, nhưng thật ra nó là ngày mà mọi thứ mình tin là "đã chuẩn bị xong" bị thử thật. Bài này mình kể lại ba giai đoạn — trước, trong, và sau cái ngày đó — để ai sắp dính go-live lần đầu đỡ phải học bằng cách té.

## Trước go-live: ba việc hay bị bỏ quên

🏭 1. Data chưa chốt được cắt ở đâu. Ai cũng biết phải chạy [data migration](/posts/data-migration-nhung-cai-bay-khong-ai-noi-truoc/), nhưng ít người chốt trước: tồn kho cắt lúc mấy giờ, cắt từ báo cáo nào, ai ký xác nhận con số đó. Đến đêm trước go-live mới đi hỏi thì chắc chắn lòi ra mỗi nơi một số.

📈 2. Quyền truy cập chưa được cấp thật. Mình từng thấy go-live mà kế toán kho không vào được màn hình xuất hàng, vì tài khoản test vẫn nằm ở môi trường dev. Test một lượt bằng đúng user thật, đúng phân quyền thật, trước ít nhất ba ngày.

📋 3. Không có người gác cổng thay đổi. Ba ngày cuối, kiểu gì cũng có người nhắn: "sửa thêm cái báo cáo này nữa thôi". Không ai đứng ra chặn thì scope nở ngay trước giờ G. Chốt một người duy nhất được duyệt thay đổi, rồi dán tên người đó lên tường.

## Ngày go-live: cái gì sẽ sai

Thường không phải phần mềm. Phần mềm chạy được, vì nó đã chạy trên UAT mấy tuần rồi. Cái sai nằm ở con người và data.

Thứ nhất, nhập liệu sai. Công nhân quen nhìn cột trong Excel, giờ màn hình xếp khác, họ nhập lộn trường. Thứ hai, tốc độ. Lần đầu ai cũng chậm, hàng ùn lại ở khâu nhập, xưởng đứng hình nửa buổi. Thứ ba, ai đó bị kẹt nhưng không dám nói, cứ im rồi tự bịa một cách chạy tạm — đây mới là cái nguy hiểm nhất.

Nên ngày go-live, đừng cử một mình bạn đi hỗ trợ. Cử nguyên một đội túc trực ở từng chốt, có cả người biết quy trình lẫn người biết hệ thống. Lập ngay một bảng ghi lỗi — ai gặp lỗi gì ghi vào đó, không chữa cháy bằng miệng.

## Sau go-live: đừng tuyên bố thắng sớm

Mình từng nghe một sếp vỗ ngực "go-live thành công" ngay chiều hôm đó, để rồi cuối tháng báo cáo tài chính lệch mấy chục triệu. Go-live chỉ là cái mốc, không phải cái đích. Hai tuần đầu là lúc lộ ra hết những lỗi UAT không bắt được: số liệu cuối kỳ, chênh lệch công nợ, hàng ảo.

Chốt một chu kỳ theo dõi ít nhất một tháng, mỗi tuần họp một lần để đối chiếu số liệu giữa hệ thống mới và cái cũ. Đến khi hai bên khớp nhau trong ba kỳ liên tiếp thì mới gọi là ổn.

## Vậy khi nào thì mới được thở?

Thật ra không bao giờ. Go-live xong không có nghĩa là dự án xong, mà là phần mềm bắt đầu sống thật. Đó cũng là lúc nhiều dự án ERP bắt đầu thất bại — không phải vì hệ thống không chạy, mà vì cả công ty tưởng nó "xong rồi" rồi ai về chỗ nấy. Chuyện này mình viết kỹ hơn ở bài [tại sao dự án ERP thất bại](/posts/tai-sao-du-an-erp-that-bai/), nhiều lý do gốc rễ nằm đúng ở cái mốc go-live.

Nếu bạn sắp trải qua go-live lần đầu, mình chỉ khuyên một câu: đừng hỏi "khi nào thì xong", hãy hỏi "ai đang gác mấy cái lỗi không ai dám khai báo".
