import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  	constructor(private formBuilder: FormBuilder, private router: Router) { }

	loginForm : FormGroup;
	errMsg:String;

	ngOnInit(): void {
		this.validate();
	}
	  
	validate () {
		this.loginForm = this.formBuilder.group({
			'email' : ['', Validators.required],
			'password' : ['', Validators.required]
		})
	}

	loginData () {
		let data = this.loginForm.getRawValue();
		let locEmail = localStorage.getItem('email');
		if(data.email == locEmail) {
			this.router.navigate(['/product/home'])
		}else{
			this.errMsg = "Your emailId is not correct or not registered.";
		}
	}


}
