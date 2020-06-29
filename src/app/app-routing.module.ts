import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ShopsComponent } from './shops/shops.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shops', component: ShopsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
