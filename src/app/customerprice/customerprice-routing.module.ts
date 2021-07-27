import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerpricePage } from './customerprice.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerpricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerpricePageRoutingModule {}
