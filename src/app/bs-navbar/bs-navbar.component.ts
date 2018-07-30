import { Users } from './../shared/user-model';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
username : any

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser(){
    this.authService.getCurrentUser()
    .subscribe((res : any)=>{
      this.username= res.response[0].name;
     
      console.log(this.username);
      
       })
  }

}
