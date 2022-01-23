import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationPageComponent } from './pages/authentification-page/authentification-page.component';
import { BasketsPageComponent } from './pages/baskets-page/baskets-page.component';
import { SalesPageComponent } from './pages/sales-page/sales-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { AuthGuard } from  './guards/auth.guard'

const routes: Routes = [
  { path: 'login', component: AuthentificationPageComponent },
  { path: 'ventes', component: SalesPageComponent, canActivate: [AuthGuard] },
  { path: 'paniers', component: BasketsPageComponent, canActivate: [AuthGuard] },
  { path: 'clients', component: ClientsPageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
