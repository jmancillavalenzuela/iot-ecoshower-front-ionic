import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  leftImage: String;
  ecoshowerLogo: String;

  constructor() {
    this.leftImage = "./assets/images/left-image-register.png";
    this.ecoshowerLogo = "./assets/logo/ecoshower.png";
  }

  ngOnInit() {
  }

}
