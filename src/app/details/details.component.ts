import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: string;
  movieList: any[];
  selectedMovie: any;
  constructor(private route: ActivatedRoute,
    private dataservice: DataService) { 
    }

  ngOnInit() {
    this.id= this.route.snapshot.paramMap.get('id');
    this.selectedMovie = this.dataservice.getMovieById(this.id);
  }

}
