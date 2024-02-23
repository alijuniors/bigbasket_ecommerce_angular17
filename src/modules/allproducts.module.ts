import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from '../app/pages/admin/products/products.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsComponent
  ],
  exports: [ProductsComponent]
})
export class AllproductsModule { }
