import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { AuthGuard } from './services/auth.guard';
import { authInterceptorProviders } from './services/auth.interceptor';
import { AddReservationComponent } from './component/add-reservation/add-reservation.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { DisplayReservationComponent } from './component/display-reservation/display-reservation.component';
import { NgxPrintModule } from 'ngx-print';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    LocationComponent,
    ContactComponent,
    LoginComponent,
    AddReservationComponent,
    ReservationComponent,
    DisplayReservationComponent,
    
  ],
  imports: [
   
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule,
    
    AgmCoreModule.forRoot({apiKey:'AIzaSyBAy9HysTH_05UUZ6DZecezgv56HXCzsfk'})
  ],
  providers: [LoginService, AuthGuard, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
