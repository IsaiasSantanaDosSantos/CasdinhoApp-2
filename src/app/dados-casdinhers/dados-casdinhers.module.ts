import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosCasdinhersPageRoutingModule } from './dados-casdinhers-routing.module';

import { DadosCasdinhersPage } from './dados-casdinhers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosCasdinhersPageRoutingModule
  ],
  declarations: [DadosCasdinhersPage]
})
export class DadosCasdinhersPageModule {}
