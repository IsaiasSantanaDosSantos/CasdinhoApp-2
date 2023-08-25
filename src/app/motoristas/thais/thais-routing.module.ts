import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThaisPage } from './thais.page';

const routes: Routes = [
  {
    path: '',
    component: ThaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThaisPageRoutingModule {}
