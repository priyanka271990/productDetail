import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  	selector: 'app-header',
  	templateUrl: './header.component.html',
  	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	userEmail:string;
	isLoggedIn:boolean = false;
  	constructor(private router: Router) { }

  	ngOnInit(): void {
		this.userEmail = localStorage.getItem('email')
		if(this.userEmail){
			this.isLoggedIn = true;
			//this.router.navigate(['/product/home'])
		}else {
			this.isLoggedIn = false;
			//this.router.navigate(['/login'])
		}
		
	}

	logout () {
		console.log('logout');
		localStorage.removeItem('email');
		this.isLoggedIn = false;
      	this.router.navigate(['/'])
	}

}
