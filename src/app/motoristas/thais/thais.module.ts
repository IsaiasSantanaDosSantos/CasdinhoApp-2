import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThaisPageRoutingModule } from './thais-routing.module';

import { ThaisPage } from './thais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThaisPageRoutingModule
  ],
  declarations: [ThaisPage]
})
export class ThaisPageModule {}
