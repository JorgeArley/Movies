import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent {

  public movies: Movie[] = [];
  public movie: Movie = {
    id: 0,
    Title:         '',
    Description:   '',
    Rating:        '',
    Duration:      '',
    Genre:         [],
    Released_date: '',
    Trailer_Link:  '',
    image:         ''
  };

  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MoviesService,
              public route: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getMovieByID(params['id']);
    });
  }

  getMovieByID(id: string): void {
    this.movieService.getMovies().subscribe((resp: any) => {
      this.movie = resp.find((movie:any) => {
        return movie.id == id
      });
    })
  }

  getIdVideo(idMovie: string) {
    let id = idMovie.split('=');
    return id[1];
  }

}
