import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NycollasKurtPage } from './nycollas-kurt.page';

const routes: Routes = [
  {
    path: '',
    component: NycollasKurtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NycollasKurtPageRoutingModule {}
