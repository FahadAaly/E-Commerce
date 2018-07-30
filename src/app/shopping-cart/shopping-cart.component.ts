import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  product = []
  quantity : any
  totalPrice : any
  price : any

  

  constructor(
    private router : Router,
    private orderService : OrderService
  ) { }

  ngOnInit() {
    this.cart();
    this.sumTotal();
 
  }

  postProduct(){
    let payload = {
      product : this.product,
      totalPrice : this.totalPrice
      
    }

    this.orderService.postProductList(payload)
  }
  
  cart(){
  
   let itemList= this.orderService.getCart()
   this.product = itemList 
   console.log("get products",this.product);
}
   
  
  remove(id){
    console.log('id' , id);
    this.orderService.removeItem(this.product,id);
    this.product = this.orderService.getCart();
  }

  add(productId){
    let cart :any =JSON.parse(localStorage.getItem('cart')); 
    var index = cart.findIndex(item => item.id == productId);
  
      
      cart[index].quantity++
       this.price = 0
       this.price = cart[index].price * cart[index].quantity
       cart[index].totalPrice = this.price
       console.log("price",this.price)
      localStorage.setItem('cart', JSON.stringify(cart)); 
       this.cart();

  }
  delete(productId){
    console.log("this price befor", this.price)
    let cart :any =JSON.parse(localStorage.getItem('cart')); 
    var index = cart.findIndex(item => item.id == productId);
    cart[index].quantity--
   
   
    this.price  = this.price - cart[index].price
    cart[index].totalPrice = this.price
    console.log("decrease", cart[index].totalPrice)
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart();


  }
  sumTotal(){
    let total = 0;
    this.product.forEach(function(item){
      total += item.totalPrice
    })
    this.totalPrice = total;
  
  }
}
