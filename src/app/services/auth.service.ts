import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User } from '../register/register.service';

@Injectable()
export class AuthService {
    currentUserSubject: BehaviorSubject<User>;
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    }

    login(username: string, password: string) {
        return this.http.post<any>(`/users/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }


    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}