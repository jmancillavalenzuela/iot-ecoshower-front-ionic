import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  leftImage = "./assets/images/left-image-register.png";
  ecoshowerLogo = "./assets/logo/ecoshower.png";
  
  registerForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
    }),
    phone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    acceptTerms: new FormControl(false),
  });

  constructor(public router: Router) {}
  
  ngOnInit() {}

  onSubmit() {
    console.warn(this.registerForm.value);
  }

  onSignIn() {
    this.router.navigateByUrl('/home');
  }
}
