import { Component } from '@angular/core';

@Component({
  selector: 'app-recovery',
  templateUrl: 'recovery.page.html',
  styleUrls: ['recovery.page.scss'],
})
export class RecoveryPage {

  logo: String;

  constructor() {
    this.logo = "./assets/logo/ecoshower.png";
  }

}
