import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VanessaPage } from './vanessa.page';

const routes: Routes = [
  {
    path: '',
    component: VanessaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VanessaPageRoutingModule {}
