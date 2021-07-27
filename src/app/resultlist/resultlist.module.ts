import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultlistPageRoutingModule } from './resultlist-routing.module';

import { ResultlistPage } from './resultlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultlistPageRoutingModule
  ],
  declarations: [ResultlistPage]
})
export class ResultlistPageModule {}
