import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from '../../interfaces/movie.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public movies: Movie[] = [];

  constructor( private movieService: MoviesService ) {}

  ngOnInit() {
    this.getMovies();
    console.log(this.movieService.listFavorites)
  }

  getMovies() {
    this.movieService.getMovies().subscribe((resp: any) => {
      this.movies = resp;
    })
  }

  orderBy( data:string ) {
    this.movies.sort(function(a:any, b:any) {
      if (data === 'Tittle') {
        return a.Title.localeCompare(b.Title);
      } else {
        return new Date(a.Released_date).getTime() - new Date(b.Released_date).getTime();
      }
    });
  }
}
