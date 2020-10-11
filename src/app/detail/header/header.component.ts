import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	isLogin = false;
	userInfo = {
		"taiKhoan": "dsdsdsd",
		"email": "",
		"soDT": "",
		"maNhom": "",
		"maLoaiNguoiDung": "",
		"hoTen": "",
		"accessToken": ""
	}
	constructor() {

	}

	ngOnInit(): void {
		let userInfoNew = localStorage.getItem('userInfo');
		if (userInfoNew) {
			this.isLogin = true;
			this.userInfo = JSON.parse(userInfoNew)
		} else {
			this.isLogin = false;
		}

	}
	dangXuat() {
		localStorage.clear();
		location.reload()
	}

}

