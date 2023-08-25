import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WillianMiguelPage } from './willian-miguel.page';

const routes: Routes = [
  {
    path: '',
    component: WillianMiguelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WillianMiguelPageRoutingModule {}
