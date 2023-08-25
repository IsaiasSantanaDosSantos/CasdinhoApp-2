import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsaiasPageRoutingModule } from './isaias-routing.module';

import { IsaiasPage } from './isaias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsaiasPageRoutingModule
  ],
  declarations: [IsaiasPage]
})
export class IsaiasPageModule {}
