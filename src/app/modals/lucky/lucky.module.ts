import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuckyPageRoutingModule } from './lucky-routing.module';

import { LuckyPage } from './lucky.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LuckyPageRoutingModule
  ],
  declarations: [LuckyPage]
})
export class LuckyPageModule {}
