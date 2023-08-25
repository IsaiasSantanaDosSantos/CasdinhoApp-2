import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosCasdinhersPage } from './dados-casdinhers.page';

const routes: Routes = [
  {
    path: '',
    component: DadosCasdinhersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosCasdinhersPageRoutingModule {}
