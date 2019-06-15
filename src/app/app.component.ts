import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SCB';
  currentUser: any;
  constructor(
    private router: Router,
    private authenticationService: AuthService
) {
    this.authenticationService.currentUserSubject.subscribe(user => this.currentUser = user);
}

logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}
}
