import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	signinForm: FormGroup;
	constructor(private auth: AuthenticationService) {

	}
	dangNhap(taiKhoan,matKhau) {
		this.auth.dangNhap({
			taiKhoan:taiKhoan,
			matKhau:matKhau
		}).subscribe({
			next:(result)=>{
				localStorage.setItem('userInfo', JSON.stringify(result));
				console.log(result);
				location.reload();
			}
		})
	}

	ngOnInit(): void {
		this.signinForm = new FormGroup({
			taiKhoan: new FormControl(),
			matKhau: new FormControl()
		});
	}

}
