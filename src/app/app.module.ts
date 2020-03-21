import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './guard/login/login.component';
import { RegisterComponent } from './guard/register/register.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  	declarations: [
      	AppComponent,
    	LoginComponent,
    	RegisterComponent,
    	HeaderComponent
  	],
  	imports: [
    	BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
