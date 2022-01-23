import { Component, Input } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'business-case';
  isAuth!: boolean;

  constructor(private authService: AuthService ) {
    console.log(this.authService.isAuthenticated)
    this.isAuth = this.authService.isAuthenticated;
  }



}
