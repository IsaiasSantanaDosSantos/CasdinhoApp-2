import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsabellaPage } from './isabella.page';

const routes: Routes = [
  {
    path: '',
    component: IsabellaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsabellaPageRoutingModule {}
