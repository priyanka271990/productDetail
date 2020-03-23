import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  registrationForm : FormGroup;

	ngOnInit(): void {
		this.validate();
	}
	  
	validate () {
		this.registrationForm = this.formBuilder.group({
			'name' : ['', Validators.required],
			'email' : ['', Validators.required],
			'password' : ['', Validators.required]
		})
	}

	registerData () {
		let data = this.registrationForm.getRawValue();
		if(!this.registrationForm.invalid) {
			localStorage.setItem('email', data.email)
			this.router.navigate(['/'])
		}
	}

}
