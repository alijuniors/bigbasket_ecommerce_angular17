import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AllproductsModule} from '../../../../modules/allproducts.module';
import { ApiService } from '../../../../services/products/api.service';
import { Observable } from 'rxjs';
import { Product } from '../../../../modules/product';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,AllproductsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  isSidePanelVisible: boolean = false;
  productObj: any ={
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": ""

  };
  data : any[] = [];
  constructor (private service: ApiService ){} 

  getData(){
    this.service.getProduct().subscribe(data =>{
      this.data = data;
      const unique = [...new Set(data.map((item: any) => item.category))];
      this.data = unique;
    });
  }
  
  ngOnInit(): void {
  this.getData(); 
  }

  
 


  openSidePanel(){
    this.isSidePanelVisible = true;
  }

  closeSidePanel(){
    this.isSidePanelVisible = false;
  }

}
