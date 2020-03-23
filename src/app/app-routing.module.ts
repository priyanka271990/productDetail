import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './guard/login/login.component';
import { RegisterComponent } from './guard/register/register.component';
import { HomeComponent } from './product/home/home.component'
import { AddProductComponent } from './product/add-product/add-product.component';
import { AuthGuard } from './guard/auth.guard'


const routes: Routes = [
	{path:'', component:LoginComponent},
	{path: 'register', component:RegisterComponent},
	{path: 'product/home', component:HomeComponent, canActivate:[AuthGuard], children: [
		{path:'addproduct', component:AddProductComponent}
	]}
];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
