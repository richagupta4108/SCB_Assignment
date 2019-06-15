import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // login: Login;
  loginForm: FormGroup;
  isSubmitted  =  false;
  wrongCredentials: string;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get formControls() { return this.loginForm.controls; }

  login() {
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.formControls.username.value, this.formControls.password.value)
            .subscribe(
                data => {
                    console.log('logged in');
                    this.router.navigate(['/dashboard']);
                },
                error => {
                  console.log(error.error.message);
                  this.wrongCredentials = error.error.message;
              });
  }

}
