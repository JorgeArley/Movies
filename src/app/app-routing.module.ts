import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './list/movies/error404/error404.component';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () => import('./list/movies/movies.module').then(m => m.MoviesModule),
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo:'404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
