import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuckypricePage } from './luckyprice.page';

const routes: Routes = [
  {
    path: '',
    component: LuckypricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuckypricePageRoutingModule {}
