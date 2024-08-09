import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BookingComponent } from '../booking/booking.component';
import { AmenitiesComponent } from '../amenities/amenities.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { RoomsComponent } from '../rooms/rooms.component';
import { VacationComponent } from '../vacation/vacation.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,BookingComponent,AmenitiesComponent,WelcomeComponent,RoomsComponent,VacationComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
