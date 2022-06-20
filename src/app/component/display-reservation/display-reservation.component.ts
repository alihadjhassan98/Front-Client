import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-display-reservation',
  templateUrl: './display-reservation.component.html',
  styleUrls: ['./display-reservation.component.css']
})
export class DisplayReservationComponent implements OnInit {

  id:any;
  reservation:any;
  constructor(private activateRouter: ActivatedRoute,public rService: ReservationService) { }

  ngOnInit(): void {
    this.id=this.activateRouter.snapshot.paramMap.get("id"); 
  this.rService.getResById(this.id).subscribe(
   (data:any)=>{
     this.reservation=data;
   } 
  );

  }

}
