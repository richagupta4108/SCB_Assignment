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
  // liked: boolean = false;
  constructor(private router: Router,
    private dataservice: DataService) { 
      this.movieList = new Array<Movie>();
      this.dataservice.getMovies().subscribe((response) => {
        this.movieList = response['Search'];
        // this.dataservice.emitMovieList(this.movieList);
      })
    }

  ngOnInit() {
  }

  likeClicked(movie: any) {
    let currentUserLikes: any[] = JSON.parse(localStorage.getItem('currentUserLikes')) || [];
    currentUserLikes.push(movie);
    localStorage.setItem('currentUserLikes', JSON.stringify(currentUserLikes));
    this.movieList.map(_movie => {
      if(_movie.imdbID === movie.imdbID)
      _movie.liked = true;
    })
  }

  unLikeClicked(movie: any) {
    localStorage.removeItem('currentUserLikes');
    this.movieList.map(_movie => {
      if(_movie.imdbID === movie.imdbID)
      _movie.liked = false;
    })
  }

  getDetails(movie: Movie) {
    console.log(movie.imdbID);
    this.router.navigate(['/details', movie.imdbID]);
  }

}
