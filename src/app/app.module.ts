import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationPageComponent } from './pages/authentification-page/authentification-page.component';
import { SalesPageComponent } from './pages/sales-page/sales-page.component';
import { BasketsPageComponent } from './pages/baskets-page/baskets-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationPageComponent,
    SalesPageComponent,
    BasketsPageComponent,
    ClientsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
