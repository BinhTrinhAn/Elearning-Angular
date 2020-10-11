import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  getCoursesList(): Observable<any> {
    const url = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP05';
    return this.http.get<any>(url)
  }
  getVietle() {

    let url = 'https://viettelstore.vn/AjaxAction.aspx';
    let value = { 'action': 'get-markets-suggestion', 'keyword': 'Hà Nội' };
    return this.http.post(url, value)
  }
}
