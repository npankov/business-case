import { ApiLoginData } from './../models/types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = false;
  public token!: string;

  constructor(private httpClient: HttpClient, router: Router) {
    this.getToken(router);
  }

  checkAuth(email: string, pass: string): Promise<boolean> {
    const url = 'https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/login';
    const storageName = 'userData';
    
    return lastValueFrom(
      this.httpClient.post<ApiLoginData>(url, JSON.stringify({
        email: email,
        password: pass
      }))
    ).then(
      (res) => {
        this.token = res.token;
        this.isAuthenticated = true;
        localStorage.setItem(storageName, res.token)
        console.log(localStorage)
        return true;
      },
      (error) => false
    )
  }

  getToken(router: Router) {
    const storageName = 'userData';
    let oldToken = localStorage.getItem(storageName)
    if (oldToken) {
      this.isAuthenticated = true;
      this.token = oldToken;
      router.navigate(['/ventes'])
    }
  }
}
