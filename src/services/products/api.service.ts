import { Injectable } from "@angular/core";
import { Product } from '../../modules/product';
import { Categories } from '../../modules/categories';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  constructor(private http: HttpClient) { }

    public getCategories():Observable<any>{
      return this.http.get<any>(`https://fakestoreapi.com/products/categories`);
    }
    public getProducts():Observable<any>{
      return this.http.get<any>(`https://fakestoreapi.com/products`);
    }
    public saveProduct(obj: any):Observable<any>{
      return this.http.post<any>(`https://fakestoreapi.com/products`,obj);
    }
    public updateProduct(id:any, obj: any):Observable<any>{
      return this.http.put<any>(`https://fakestoreapi.com/products/`+ id,obj);
    }
    public deleteProduct(id:any):Observable<any>{
      return this.http.delete<any>(`https://fakestoreapi.com/products/`+ id);
    }

    
   
}
