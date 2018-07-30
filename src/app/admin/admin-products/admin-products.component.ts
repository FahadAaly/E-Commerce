import { Router } from '@angular/router';
import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products : any;
  constructor(private productService : ProductServiceService, private router : Router) { }

  ngOnInit() {
    this.getProducts();
    // this.editProduct(product);
  }

  getProducts(){
    this.productService.getProductsList()
    .subscribe((res : any)=>{
      this.products = res
      console.log("product list", this.products);
    })
  }
  editProduct(product){
    this.router.navigate(['/admin/products/'], product.id);
    console.log("product id",product.id);
  }

 

}
