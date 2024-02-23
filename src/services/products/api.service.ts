import { Injectable } from "@angular/core";
import { Product } from '../../modules/product';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  constructor(private http: HttpClient) { }

    public getProduct():Observable<any>{
      return this.http.get<any>(`http://fakestoreapi.com/products`);
    }

    
   
}
