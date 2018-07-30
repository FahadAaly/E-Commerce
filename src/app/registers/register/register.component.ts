import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData={}
  constructor(private _auth : AuthService, private router : Router) { }

  ngOnInit() {
  }
  registerUser(){
   this._auth.registerUser(this.registerUserData)
   .subscribe(result=>{
    
    if(result){
      this.router.navigate(['/']); 
      console.log(result);
    }
    else{
      console.log('something went wrong');
    }
   },
   (err)=>{
     console.log(err);
   })
  };



}
