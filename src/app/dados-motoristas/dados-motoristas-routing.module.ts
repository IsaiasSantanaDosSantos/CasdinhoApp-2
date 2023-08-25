import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosMotoristasPage } from './dados-motoristas.page';

const routes: Routes = [
  {
    path: '',
    component: DadosMotoristasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosMotoristasPageRoutingModule {}
