import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authentification-page',
  templateUrl: './authentification-page.component.html',
  styleUrls: ['./authentification-page.component.css']
})
export class AuthentificationPageComponent implements OnInit {
  public email!: string;
  public pass!: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  validateForm() {
    console.log(this.email, this.pass);
    this.authService.isAuthenticated = true;
    this.router.navigate(['ventes']);
    console.log(this.authService.isAuthenticated)
  }

}
