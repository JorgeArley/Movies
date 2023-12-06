import { Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import { Movie } from '../list/interfaces/movie.interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = environments.baseUrl;
  public favorites: number[] = [];

  constructor( private http: HttpClient ) {
    this.getStorage();
  }

  getStorage() {
   let list = localStorage.getItem('listMovies') || '';
   if (list) {
     this.favorites = list?.split(',').map( id => {
       return parseInt(id)
      })
    }
  }

  getMovies(): Observable<Movie> {
    return this.http.get<Movie>(`${ this.baseUrl }`);
  }

  addFavorires(idMovie: number):void {
    let eleToDel = this.favorites.indexOf(idMovie);
    if (eleToDel !== -1) {
      this.favorites.splice(eleToDel, 1);
    } else {
      this.favorites.push(idMovie);
    }
    localStorage.setItem('listMovies', this.favorites.join(','));
  }

  get listFavorites() {
    return this.favorites;
  }

}
