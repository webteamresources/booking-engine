import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FlightsResultComponent } from './flights-result/flights-result.component';

const routes: Routes = [
  {path:'', component:HomeComponent, data: { breadcrumb: 'Home' }, pathMatch:'full'},
  {path:'home', component:HomeComponent, data: { breadcrumb: 'Home' }},
  {path:'flight-result', component:FlightsResultComponent, data: { breadcrumb: 'Flight Result' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
