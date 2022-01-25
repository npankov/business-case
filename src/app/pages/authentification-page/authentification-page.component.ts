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
  public credentialsIsBad = false;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  validateForm() {
    this.authService.checkAuth(this.email, this.pass).then((credentialsIsOk) => {
      if (credentialsIsOk) {
        this.router.navigate(['ventes']);
      } else {
        this.credentialsIsBad = true;
      }
    })
  }

}
