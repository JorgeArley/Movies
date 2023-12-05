import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent {
  @Input()
  public movie!: Movie;
  public listMovies: string | null = '';

  constructor( private route: Router,
               private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getStorage();
  }

  getStorage() {
    this.listMovies = localStorage.getItem('listMovies');
  }

  detailMovie(id: number) {
    this.route.navigateByUrl(`movies/detail/${id.toString()}`)
  }

  AddFavorites(idMovie: number) {
    this.moviesService.addFavorires(idMovie);
  }

  isFavorite(id: number): boolean {
    this.getStorage();
    let list = this.listMovies?.split(',');
    let eleToDel = list?.indexOf(id.toString());
    return eleToDel !== -1 ? true : false
  }
}
