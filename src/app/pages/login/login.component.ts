import { Component, OnInit } from '@angular/core';
import {HttpLoginService} from '../../service/http-login.service';
//import {AuthHttp} from '../../module/auth/auth.module';
import { AuthHttp } from 'angular2-jwt-session';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user:string;
  private password:string;

  private someThing:string;

  constructor(private router:Router) { }

  ngOnInit() {
    this.user="jlopez@tiempodevelopment.com"
  }

   login(){
     console.log("ready to login "+this.user);
     this.router.navigate(['home']);
   }

   ask(){

   }

   private printResult(result){
     console.log(result);
   }

}
