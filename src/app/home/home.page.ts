import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  leftImage = "./assets/images/left-image-login.png";
  ecoshowerLogo = "./assets/logo/ecoshower.png";

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(public router: Router) {}

  ngOnInit() {}

  onSubmit() {
    console.warn(this.loginForm.value);
  }

  onRecovery() {
    this.router.navigateByUrl('/recovery');
  }

  onRegister() {
    this.router.navigateByUrl('/register');
  }
}
