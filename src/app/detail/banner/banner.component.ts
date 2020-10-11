import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailService } from 'src/app/core/services/course-detail.service'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  course = {
    "maKhoaHoc": "Backend-00112326",
    "biDanh": "java-can-ban-cho-nguoi-moi",
    "tenKhoaHoc": "Java căn bản cho người mới",
    "moTa": "Hướng đối tượng - Trong Java, mọi thứ đều là một Object. Java có thể dễ dàng mở rộng và bảo trì vì nó được xây dựng dựa trên mô hình Object. Nền tảng độc lập - Không giống nhiều ngôn ngữ lập trình khác bao gồm cả C và C ++, khi Java được biên dịch, nó không được biên dịch thành ngôn ngữ máy nền tảng cụ thể, thay vào mã byte - nền tảng độc lập. Mã byte này được thông dịch bởi máy ảo (JVM) trên nền tảng nào đó mà nó đang chạy. Đơn giản - Java được thiết kế để dễ học. Nếu bạn hiểu khái niệm cơ bản về OOP Java, sẽ rất dễ để trở thành master về java. Bảo mật - Với tính năng an toàn của Java, nó cho phép phát triển các hệ thống không có virut, giả mạo. Các kỹ thuật xác thực dựa trên mã hoá khóa công khai. Kiến trúc - trung lập - Trình biên dịch Java tạo ra định dạng tệp đối tượng kiến trúc trung lập, làm cho mã biên dịch được thực thi trên nhiều bộ vi xử lý, với sự hiện diện của hệ điều hành Java. Portable - Là kiến trúc tập trung và không có khía cạnh thực hiện phụ thuộc của đặc tả này làm cho Java khả chuyển. Trình biên dịch trong Java được viết bằng ANSI C, đó là một tập con POSIX. Mạnh mẽ - Java làm nỗ lực để loại trừ các tình huống dễ bị lỗi bằng cách kiểm tra lỗi tại thời gian biên dịch và kiểm tra lỗi tại runtime.",
    "luotXem": 10,
    "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/java-can-ban-cho-nguoi-moi.jpg",
    "maNhom": "GP05",
    "ngayTao": "24/08/2020",
    "soLuongHocVien": 0,
    "nguoiTao": {
      "taiKhoan": "caochihieu123admin",
      "hoTen": "Cao Chi Hieu Admin",
      "maLoaiNguoiDung": "GV",
      "tenLoaiNguoiDung": "Giáo vụ"
    },
    "danhMucKhoaHoc": {
      "maDanhMucKhoahoc": "TuDuy",
      "tenDanhMucKhoaHoc": "Tư duy lập trình"
    }
  };
  constructor(private activateRoute: ActivatedRoute, private courseDetail: CourseDetailService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe({
      next: (param)=>{
        this.courseDetail.getCourseDetail(param.maKhoaHoc).subscribe({
          next: (result)=>{
            this.course = result;
            console.log(this.course);
            console.log(result)
          },
          error: (err)=>{
            console.log(err)
          },
          complete: ()=>console.log('done')
        })
      }
    })
  }

}
