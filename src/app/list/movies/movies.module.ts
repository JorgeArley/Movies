import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { YouTubePlayerModule} from '@angular/youtube-player'


@NgModule({
  declarations: [
    HomeComponent,
    Error404Component,
    CardMovieComponent,
    DetailMovieComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    YouTubePlayerModule
  ]
})
export class MoviesModule { }
