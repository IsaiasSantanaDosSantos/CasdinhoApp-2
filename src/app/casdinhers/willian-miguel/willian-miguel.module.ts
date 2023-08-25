import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WillianMiguelPageRoutingModule } from './willian-miguel-routing.module';

import { WillianMiguelPage } from './willian-miguel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WillianMiguelPageRoutingModule
  ],
  declarations: [WillianMiguelPage]
})
export class WillianMiguelPageModule {}
