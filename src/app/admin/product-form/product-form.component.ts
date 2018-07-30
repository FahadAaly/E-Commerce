import { AdminProductsComponent } from './../admin-products/admin-products.component';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { ProductServiceService } from './../../services/product-service.service';
import { BsNavbarComponent } from './../../bs-navbar/bs-navbar.component';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category-service.service';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  success : boolean = false
  alert : boolean = false
  category = [] ;
  createProducts = {};
  categories : any
  productId : any
  edit : boolean = false
  id: number;
  message : string
  show : boolean = false
  

  constructor(
  private categoryService : CategoryService,
  private productService : ProductServiceService,
  private router : Router,
  private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCategoryList();

    this.route.params.subscribe(params => {
      this.id = +params["id"];
      if(this.id){  
      console.log("get the id",this.id);
      this.productService.getProduct(this.id)
      .subscribe(response=>{
        console.log(response);
        this.createProducts = response
        console.log("products get",this.createProducts)
      })
    }   
    });
  
  }

  getCategoryList(){
    this.categoryService.getCategory()
    .subscribe((category : any)=>{
     this.category=category; 
     console.log("catgeories List", category)
    })
  }

saveProducts(){
  if(this.id){
     this.edit = true;
     this.show = true
    this.productService.updateProduct(this.createProducts)
    .subscribe((response )=>{
      console.log(response);
      this.router.navigate(['/admin/products']);
    })
  }
  else{ 
    this.edit= false
    // this.show= false
    this.productService.createProducts(this.createProducts)
    .subscribe((res : any)=>{ 
      this.createProducts = res
      this.success = true;
      this.router.navigate(['/admin/products']);
      console.log(this.createProducts);
    });
  }
  (err)=>{
    this.alert = true ;
  }
 }

 delete(){
  
   this.productService.deleteProduct(this.id)
   .subscribe(response => console.log(response))
   alert("product Deleted");
   window.location.reload();
   this.router.navigate(['/admin/products']);


 }


}


