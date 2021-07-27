import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItempricePageRoutingModule } from './itemprice-routing.module';

import { ItempricePage } from './itemprice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ItempricePageRoutingModule
  ],
  declarations: [ItempricePage]
})
export class ItempricePageModule {}
