import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditluckyPage } from './editlucky.page';

const routes: Routes = [
  {
    path: '',
    component: EditluckyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditluckyPageRoutingModule {}
