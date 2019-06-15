import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataFile } from '../data/movies.data';


@Injectable()
export class DataService {
    constructor(private http: HttpClient,
        private dataFile: DataFile) {
        }

    getMovies() {
        let url = 'http://www.omdbapi.com/?s=one&page=1&apikey=66d6dbc3';
        return this.http.get(url);
    }

    getMovieById(id: string) {
        let selectedMovie = this.dataFile['_' +id];
        return selectedMovie;
    }

}