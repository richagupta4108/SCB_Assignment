import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
    }, { validator: this.checkPasswords });
  }

  checkPasswords(formGroup: FormGroup) {
    let pass = formGroup.controls.password.value;
    let confirmPass = formGroup.controls.cpassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  get formControls() { return this.registerForm.controls; }

  register() {
    this.isSubmitted = true;
    if(this.registerForm.valid) {
    this.registerService.registerUser(this.formControls)
            .subscribe(
                data => {
                    console.log('Registration successful');
                    this.router.navigate(['/login']);
                });
  }
}

}
