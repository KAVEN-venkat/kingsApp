import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinnerPageRoutingModule } from './winner-routing.module';

import { WinnerPage } from './winner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    WinnerPageRoutingModule
  ],
  declarations: [WinnerPage]
})
export class WinnerPageModule {}
