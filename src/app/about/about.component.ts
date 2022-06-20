import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public loggedIn=false;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  this.loggedIn=this.loginService.isLoggedIn();
  }
  logoutUser(){
    this.loginService.logout();
    location.reload();
  }

}
