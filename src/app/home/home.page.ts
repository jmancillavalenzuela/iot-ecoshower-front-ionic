import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  leftImage: String;

  constructor() {
    this.leftImage = "./assets/images/left-image-login.png";
   }

}
