import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AllproductsModule} from '../../../../modules/allproducts.module';
import { ApiService } from '../../../../services/products/api.service';
import { Observable } from 'rxjs';
import { Product } from '../../../../modules/product';
import { Categories } from '../../../../modules/categories';



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
    "id": "",
    "title": "",
    "price": 0,
    "description": "",
    "image": "",
    "category":""
  };
  data : any[] = [];
  products : any[] = [];
  constructor (private service: ApiService ){} 
  getProducts(){
    this.service.getProducts().subscribe(products =>{
      this.products = products;
    });
  }
  
  getData(){
    this.service.getCategories().subscribe(data =>{
      this.data = data;
    });
  }
  
  ngOnInit(): void {
  this.getData(); 
  this.getProducts(); 
  }

  onSave() {
    
    this.service.saveProduct(this.productObj).subscribe((res:any)=>{
      if(res.result) {
        alert("product created")
        this.getProducts();
      }else{
        alert(res.message);
      }
    })
  }

  onEdit(item: any){
    this.productObj = item;
    console.log(item);    
    this.openSidePanel();
    return false;
  }
  onUpdate(){
   
    this.service.updateProduct(this.productObj.id, this.productObj).subscribe((res:any)=>{
      if(res.result) {
        alert("product updated")
        this.getProducts();
      }else{
        alert(res.message);
      }
    })


  }
  onDelete(id:any){  
    const isDelete = confirm('Are you sure want to delete');
    if (isDelete){
    this.service.deleteProduct(id).subscribe((res:any)=>{
      if(res.result) {
        alert("product deleted")
        this.getProducts();
      }else{
        alert(res.message);
        
      }
    })
    

  }else {
    alert("no se elimino");
  }
  return false;
}

  openSidePanel(){
    this.isSidePanelVisible = true;
  }

  closeSidePanel(){
    this.isSidePanelVisible = false;
  }

}
