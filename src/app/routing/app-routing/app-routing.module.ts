import { AuthGuard } from './../../services/auth-guard.service';
import { RegisterComponent } from './../../registers/register/register.component';
import { AdminOrdersComponent } from './../../admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './../../admin/admin-products/admin-products.component';
import { ShoppingCartComponent } from './../../shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './../../check-out/check-out.component';
import { OrderSuccessComponent } from './../../order-success/order-success.component';
import { HomeComponent } from './../../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { MyOrdersComponent } from '../../my-orders/my-orders.component';
import { ProductsComponent } from '../../products/products.component';
import { ProductFormComponent } from '../../admin/product-form/product-form.component';


const routes: Routes=[


  {
    path:'',
    component:ProductsComponent
  },
  {
    path:'products',
    component:ProductsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'shopping-cart',
    component:ShoppingCartComponent
    // canActivate:[AuthGuard]
  },
  {
    path:'check-out',
    component:CheckOutComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'order-success',
    component:OrderSuccessComponent,
    canActivate:[AuthGuard]
  },
 
  {
    path:'register',
    component:RegisterComponent
  },
 
  {
    path:'admin/products/new',
    component:ProductFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/products/:id',
    component:ProductFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/products',
    component:AdminProductsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/orders',
    component:AdminOrdersComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'my/orders',
    component:MyOrdersComponent,
    canActivate:[AuthGuard]
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
