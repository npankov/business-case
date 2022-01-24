import { lastValueFrom } from 'rxjs';
import { AuthService } from './../../services/auth.service';
import { ApiStatsData } from './../../models/types';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-page',
  templateUrl: './sales-page.component.html',
  styleUrls: ['./sales-page.component.css']
})
export class SalesPageComponent implements OnInit {
  montantTotalVentes!: number;

  constructor(public httpClient: HttpClient, private authService: AuthService) {
    this.getAllStats();
  }

  ngOnInit(): void {
  }

  getAllStats() {
    const url = 'https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/stats/2021/2022'
    const httpHeaders = new HttpHeaders({
      'Authorization': this.authService.token,
      'Content-Type': 'application/json'
    })

    lastValueFrom(this.httpClient.get<ApiStatsData>(url, { headers: httpHeaders}))
    .then((res) => this.montantTotalVentes = res.montantTotalVentes)
  }
}
