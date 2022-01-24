import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = false;

  constructor(private httpClient: HttpClient) { }

  checkAuth(email: string, pass: string): Promise<boolean> {
    const url = 'https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/login';
    
    return lastValueFrom(
      this.httpClient.post(url, JSON.stringify({
        email: email,
        password: pass
      }))
    ).then(
      (res) => {
        this.isAuthenticated = true;
        return true;
      },
      (error) => false
    )
  }
}
