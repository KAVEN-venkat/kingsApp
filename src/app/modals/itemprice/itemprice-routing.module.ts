import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItempricePage } from './itemprice.page';

const routes: Routes = [
  {
    path: '',
    component: ItempricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItempricePageRoutingModule {}
