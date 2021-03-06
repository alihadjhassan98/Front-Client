import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public loggedIn=false;

  
  logoutUser(){
    this.loginService.logout();
    location.reload();
  }










  credentials={
    username:'',
    password:''
  }
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn();

  }
  formSubmit(){
    if((this.credentials.username!='' && this.credentials.password!=null) && (this.credentials.username!='' && this.credentials.password!='')){
      console.warn("Submit the form to the server");
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          console.warn(response.token);
          this.loginService.loginUser(response.token);
          window.location.href="/about";
        },
        error => {
          console.warn(error);

        }
      )
    }else{
      console.warn("Fields are empty");
    }
  }

}
