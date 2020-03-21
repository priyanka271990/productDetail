import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

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

}
