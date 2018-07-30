import { Products } from './../shared/product-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http : HttpClient) { }
  private baseUrl="http://localhost:3000/api/products"
  products : any
 
  createProducts(products){
    return this.http.post(this.baseUrl,products)
  }
    getProductsList(){
     return this.http.get(this.baseUrl);
  }

  getProduct(id: number){  
    return this.http.get(this.baseUrl + '/' + id);
    }

    updateProduct(products){
      return this.http.put(this.baseUrl, products);
    }

    deleteProduct(id : number){
      console.log('The delete id is ' + id);
      let hit = this.baseUrl +'/'+id;
      console.log('hit url is ' + hit);
      return this.http.delete(this.baseUrl + '/' + id);
    }

}
