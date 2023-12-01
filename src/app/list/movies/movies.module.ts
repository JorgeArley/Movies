import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { MoviesRoutingModule } from './movies-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
