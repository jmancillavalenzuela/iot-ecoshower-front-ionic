import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recovery',
  templateUrl: 'recovery.page.html',
  styleUrls: ['recovery.page.scss'],
})
export class RecoveryPage {

  logo = "./assets/logo/ecoshower.png";

  recoveryForm = new FormGroup({
    emailPhone: new FormControl('', Validators.required),
  });
  
  constructor(public router: Router) { }

  onSignIn() {
    this.router.navigateByUrl('/home');
  }

  onSubmit() {
    console.warn(this.recoveryForm.value);
  }
}