import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiovannaPage } from './giovanna.page';

const routes: Routes = [
  {
    path: '',
    component: GiovannaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiovannaPageRoutingModule {}
