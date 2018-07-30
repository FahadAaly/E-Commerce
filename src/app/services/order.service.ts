import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Products } from './../shared/product-model';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order : any
  products : Products []

  

  constructor(private http : HttpClient) { }

  create(product){
   
    this.order = JSON.parse(localStorage.getItem('cart'));
  
    var index = this.order.findIndex(item => item.id == product.id);
    if (index !== -1) {
       this.order.splice(index, 1);
     
    }
    
    this.order.push(product)
    localStorage.setItem('cart', JSON.stringify(this.order));
    console.log("push order",this.order)

}
 
  getCart() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  removeItem(item,id){
    this.order = JSON.parse(localStorage.getItem('cart'));
    var remove = this.order.map(item => { return item.id}).indexOf(id)
    console.log("remove",remove)
    this.order.splice(remove,1);
    localStorage.setItem('cart', JSON.stringify(this.order));
    console.log('item: ' ,this.order);
  }

  postProductList(payload){
    console.log("payload receive",payload)

  

  }


  
  }



