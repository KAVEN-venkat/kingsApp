import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerpricePageRoutingModule } from './customerprice-routing.module';

import { CustomerpricePage } from './customerprice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerpricePageRoutingModule
  ],
  declarations: [CustomerpricePage]
})
export class CustomerpricePageModule {}
