import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { VacationComponent } from './components/vacation/vacation.component';
import { UserComponent } from './components/user/user.component';

import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,HomeComponent,BookingComponent,WelcomeComponent,RoomsComponent,AmenitiesComponent,VacationComponent,UserComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'paradiseHotel';
}
