import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies.model';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  movieList: Array<Movie>;
  filteredMovieList: Array<Movie>;
  constructor(private router: Router,
    private dataservice: DataService) {
    this.movieList = new Array<Movie>();
    this.dataservice.getMovies().subscribe((response) => {
      this.movieList = response['Search'];
      this.filteredMovieList = this.movieList;
    })
  }

  ngOnInit() {
  }

  search(searchInput: string) {
    if (searchInput) {
      this.filteredMovieList = [];
      this.movieList.map((_movie) => {
        if ((_movie.Title).includes(searchInput)) {
          this.filteredMovieList.push(_movie);
        }
      })
    } else {
      this.filteredMovieList = this.movieList;
    }

  }

  likeClicked(movie: any) {
    let currentUserLikes: any[] = JSON.parse(localStorage.getItem('currentUserLikes')) || [];
    currentUserLikes.push(movie);
    localStorage.setItem('currentUserLikes', JSON.stringify(currentUserLikes));
    this.movieList.map(_movie => {
      if (_movie.imdbID === movie.imdbID)
        _movie.liked = true;
    })
    console.log(movie);
  }

  unLikeClicked(movie: any) {
    localStorage.removeItem('currentUserLikes');
    this.movieList.map(_movie => {
      if (_movie.imdbID === movie.imdbID)
        _movie.liked = false;
    })
  }


  getDetails(movie: Movie) {
    console.log(movie.imdbID);
    this.router.navigate(['/details', movie.imdbID]);
  }

}
