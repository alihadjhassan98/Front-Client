import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
