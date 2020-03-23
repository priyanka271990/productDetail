import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AddProductComponent, ProductDetailComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
