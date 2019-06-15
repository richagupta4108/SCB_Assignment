import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  likedMovies: Array<Movie>;
  constructor(private router: Router) { }

  ngOnInit() {
    this.likedMovies = JSON.parse(localStorage.getItem('currentUserLikes'));
    console.log(this.likedMovies);
  }

  getDetails(movie: Movie) {
    console.log(movie.imdbID);
    this.router.navigate(['/details', movie.imdbID]);
  }

}
