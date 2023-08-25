import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsaiasPage } from './isaias.page';

const routes: Routes = [
  {
    path: '',
    component: IsaiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsaiasPageRoutingModule {}
