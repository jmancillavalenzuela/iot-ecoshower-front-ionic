import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { RecoveryRoutingRoutingModule } from './recovery-routing.module';

import { RecoveryPage } from './recovery.page';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RecoveryRoutingRoutingModule
  ],
  declarations: [RecoveryPage]
})
export class RecoveryPageModule {}
