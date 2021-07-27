import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditluckyPageRoutingModule } from './editlucky-routing.module';

import { EditluckyPage } from './editlucky.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditluckyPageRoutingModule
  ],
  declarations: [EditluckyPage]
})
export class EditluckyPageModule {}
