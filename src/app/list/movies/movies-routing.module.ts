import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';

//localhost:4200/movies
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'detail/:id',
    component: DetailMovieComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
