import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { RecoveryRoutingRoutingModule } from './recovery-routing.module';

import { RecoveryPage } from './recovery.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoveryRoutingRoutingModule
  ],
  declarations: [RecoveryPage]
})
export class RecoveryPageModule {}
