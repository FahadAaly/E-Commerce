import { OrderService } from './../services/order.service';
import { Products } from './../shared/product-model';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './../services/category-service.service';
import { ProductServiceService } from './../services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  products : Products [] = []
  filteredProducts : Products [] = []
  categories = []
  category : string
  check : boolean = false
  cardId : any
  order : any

 

  
  constructor(
  private route : ActivatedRoute,
  private productService : ProductServiceService,
  private categoryService : CategoryService,
  private router : Router,
  private orderService : OrderService
 
) { }

  ngOnInit() {
    this.getAllProducts();
    this.getCategories();

    
  }

  getAllProducts(){
    this.productService.getProductsList()
   .pipe(switchMap((res : any)=>{
      this.products = res;
      return this.route.queryParamMap;
    }))
    .subscribe(params =>{
      this.category = params.get('category');

      this.filteredProducts = (this.category) ?
      this.products.filter(p => p.category === this.category) :
      this.products;
      console.log("get products here",this.filteredProducts)
    })
     
    
  }
  getCategories(){
    this.categoryService.getCategory()
    .subscribe((res : any)=>{
      this.categories = res
      console.log("categories",this.categories);
    })
  }
 
 
  select(product){
     let products =[]
      products.push(product)
       products.forEach((key) => {
        key["quantity"] = 1;
        key["totalPrice"] = product.price;
      })

  let cart = Object.assign({},product)
  
    this.orderService.create(cart);
    this.router.navigate(['shopping-cart']);
  }
}


     
   
  


  


