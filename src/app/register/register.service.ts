import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User {
    username: string;
    contact: number;
    email: string;
    address: string;
    password: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(controls: any) {
        
      let user = new User();
      user.username = controls['username'].value;
      user.password = controls['password'].value;
      user.contact = controls['contact'].value;
      user.address = controls['address'].value;
      user.email = controls['email'].value;
      return this.http.post(`/users/register`, user);
    //   localStorage.setItem('users', JSON.stringify(user));

  }

}