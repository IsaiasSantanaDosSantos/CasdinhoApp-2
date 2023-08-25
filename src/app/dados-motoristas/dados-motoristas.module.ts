import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosMotoristasPageRoutingModule } from './dados-motoristas-routing.module';

import { DadosMotoristasPage } from './dados-motoristas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosMotoristasPageRoutingModule
  ],
  declarations: [DadosMotoristasPage]
})
export class DadosMotoristasPageModule {}
