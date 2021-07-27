import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuckypricePageRoutingModule } from './luckyprice-routing.module';

import { LuckypricePage } from './luckyprice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuckypricePageRoutingModule
  ],
  declarations: [LuckypricePage]
})
export class LuckypricePageModule {}
