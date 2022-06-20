import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';

const routes: Routes = [ 
{path:"",component:MainComponent },
{path:"about",component:AboutComponent},
{path:"location",component:LocationComponent},
{path:"contact",component:ContactComponent},
{path:"login",component:LoginComponent},
{path: 'Reservations',component:  ReservationComponent },
{path: 'addReservation',component:  AddReservationComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
