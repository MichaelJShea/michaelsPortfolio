import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '',             component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),    
    CommonModule,
    BrowserModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
