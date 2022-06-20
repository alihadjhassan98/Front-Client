import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/commun/client';
import { Locale } from 'src/app/commun/locale';
import { Seance } from 'src/app/commun/seance';
import { ClientService } from 'src/app/services/client.service';
import { LocaleService } from 'src/app/services/locale.service';
import { LoginService } from 'src/app/services/login.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { SeanceService } from 'src/app/services/seance.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservation: any = {};
  id: any;
 seance:Seance[]=[];
 locale:Locale[]=[];
  client:Client[]=[] ;
  loggedIn: boolean | undefined;

  constructor( private activateRouter: ActivatedRoute, private router: Router, 
    private LService: LocaleService,private cService: ClientService,
    private rService: ReservationService,private SService: SeanceService,
    private loginService:LoginService) { }
  ngOnInit(): void {
  
    this.getAllRes();

    this.loggedIn=this.loginService.isLoggedIn();





  }


  logoutUser(){
    this.loginService.logout();
    this.router.navigate(['/']);
  }
  getAllRes() {
    this.id=this.activateRouter.snapshot.paramMap.get("id");
    this.rService.getAllRes().subscribe(
      (data) => {
        this.reservation = data;
      }
    );
   
  }
  addReservation(){
    this.router.navigate(['addReservation']);
   }
   displayRes(id: any) {
    this.router.navigate([`displayRes/${id}`]);
  }
  deleteRes(id: any) {
    this.rService.deleteRes(id).subscribe(
      () => {
        console.log('client delete');
        this.getAllRes();
      });
  }
  editRes(r:any) {
    
  }


  


}
