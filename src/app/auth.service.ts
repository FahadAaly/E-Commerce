import { Users } from './shared/user-model';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public username : any;
  
  user : Users[];

 private register_url="http://localhost:3000/login"
  constructor(
    private http : HttpClient,
    private router : Router) { }

  registerUser(user){
    return this.http.post(this.register_url,user)
   .pipe(map((response : any)=>{
     let result= response
    
     if(result && result.token){
      localStorage.setItem('token',result.token);  
      return true
     }
   })
   )};

   logOut(){
     localStorage.removeItem('token');
     this.router.navigate['/register'];
     
   }

   isLoggedIn(){
   let jwtHelper =  new JwtHelperService();
   let token = localStorage.getItem('token');
    if(!token){
      return false;
    }
     let expirationDate = jwtHelper.getTokenExpirationDate(token);
     let isExpired = jwtHelper.isTokenExpired(token);
     return isExpired;
     
   }

  getCurrentUser(){
    return this.http.get(this.register_url)
 
  }
}

 