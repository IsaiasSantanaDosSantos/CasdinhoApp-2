import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiovannaPageRoutingModule } from './giovanna-routing.module';

import { GiovannaPage } from './giovanna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiovannaPageRoutingModule
  ],
  declarations: [GiovannaPage]
})
export class GiovannaPageModule {}
