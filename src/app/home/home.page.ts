import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  leftImage: String;
  ecoshowerLogo: String;
  
  constructor() {
    this.leftImage = "./assets/images/left-image-login.png";
    this.ecoshowerLogo = "./assets/logo/ecoshower.png";
  }

}
