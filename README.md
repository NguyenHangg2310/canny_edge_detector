HƯỚNG DẪN CÀI ĐẶT
Setup:
Visual Studio Code: Các bạn có thể tải VS Code tại đây.
Bước 1: Cài đặt môi trường Node.js
­	Tải nodejs tại đây.
­	Sau khi cài đặt xong, mở terminal VS Code và chạy 2 lệnh: node -v và npm -v để xem phiên bản cài đặt, nếu kết quả trả về là 2 phiên bản giống như bên dưới là cài đặt thành công.
      ![alt]([http://~](https://github.com/NguyenHangg2310/canny_edge_detector/assets/121224475/27d9503a-4226-497b-b1a3-ff7957868408))

Bước 2: Cài đặt bộ cài app React
npm install -g create-react-app
Bước 3: Tạo project React.js
­	Trong terminal, nhập lệnh để tạo 1 react project có tên là interface: 
npx create-react-app interface
­	Sẽ mất vài phút để tạo project, sau đó bạn có thể chuyển hướng tới thư mục interface bằng cách chạy lệnh sau:
cd Interface
Bước 4: Thực thi lệnh chạy
­	Khởi động máy chủ Node và chạy ứng dụng của bạn: npm start
­	Khi này ta thấy ứng dụng React sẽ tự động mở một trang chạy trên trình duyệt với đường dẫn: http://localhost:3000/, kết quả hiển thị như bên dưới là bạn đã cài đặt thành công.
         ![image](https://github.com/NguyenHangg2310/canny_edge_detector/assets/121224475/ea560c72-6e58-4229-8b76-a7867fc2841f)


Hướng dẫn tải mã nguồn từ github:
­	Vào github Canny project tại đây. 
­	Chọn nút Code:
 
­	Khi đó 1 bảng thông báo sẽ hiện ra, chọn Download ZIP để tải toàn bộ mã nguồn về máy và giải nén. Sau đó chuyển code vào thư mục vừa tạo react và tiến hành cài đặt các thư viện như hướng dẫn ở trên.
Package:
OpenCV: 	pip install opencv-python
Numpy: 	pip install numpy
npm install axios
pip install fastapi
pip install uvicorn
Run project:
Bước 1: Mở 1 terminal mới, chuyển tới thư mục canny_edge_detector:
cd canny_edge_detector
		 Chạy lệnh: 		  uvicorn main:app --reload
 
		Bấm vào đường dẫn: 127.0.0.1:8000 chuyển tới 1 trang web như hình tức là chạy được file main.py thành công.
 
Bước 2: Mở 1 terminal mới, chuyển tới thư mục Interface chứa react project:
cd Interface
Chạy ứng dụng:        npm start
Khi đó, React tự động chuyển tới trang ứng dụng như hình:
 


Hướng dẫn sử dụng Canny Edge Detector React App
Bước 1: Tải ảnh cần tìm biên lên ở mục Choose File
Bước 2: Nhập các thông số cho input của thuật toán Canny Edge Detector, gồm:
	Kernel size (kích thước kernel) - phải là số lẻ (thường bằng 3, 5, 7, muốn ảnh biên chi tiết thì chọn kernel nhỏ, muốn ít chi tiết hơn thì tăng size kernel lên)
	Low threshold (ngưỡng thấp) (0-255, thường chọn từ 150 đổ về trước)
	High threshold (ngưỡng cao) (0-255, thường chọn từ 200 trở lên)
Bước 3: Chọn nút Detect Edge để tiến hành tìm biên ảnh.
Nhấn nút Download nếu muốn tải ảnh biên về máy.

