import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './recovery.page';

import { RecoveryRoutingRoutingModule } from './recovery-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoveryRoutingRoutingModule
  ],
  declarations: [HomePage]
})
export class RecoveryPageModule {}
