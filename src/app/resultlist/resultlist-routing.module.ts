import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultlistPage } from './resultlist.page';

const routes: Routes = [
  {
    path: '',
    component: ResultlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultlistPageRoutingModule {}
