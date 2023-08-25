import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsabellaPageRoutingModule } from './isabella-routing.module';

import { IsabellaPage } from './isabella.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsabellaPageRoutingModule
  ],
  declarations: [IsabellaPage]
})
export class IsabellaPageModule {}
