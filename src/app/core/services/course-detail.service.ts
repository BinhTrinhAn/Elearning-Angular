import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CourseDetailService {

  constructor(private http: HttpClient) { }
  getCourseDetail(maKhoaHoc):Observable<any> {
    return this.http.get(`http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)

  }
}
