import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NycollasKurtPageRoutingModule } from './nycollas-kurt-routing.module';

import { NycollasKurtPage } from './nycollas-kurt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NycollasKurtPageRoutingModule
  ],
  declarations: [NycollasKurtPage]
})
export class NycollasKurtPageModule {}
