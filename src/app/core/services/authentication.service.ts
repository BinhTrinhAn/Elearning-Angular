import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private http: HttpClient) { }
  dangNhap(value) {
    let url = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';
    return this.http.post(url,value)
  }
}
