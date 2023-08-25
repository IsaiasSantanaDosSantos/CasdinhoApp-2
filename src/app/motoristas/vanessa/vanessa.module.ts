import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VanessaPageRoutingModule } from './vanessa-routing.module';

import { VanessaPage } from './vanessa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VanessaPageRoutingModule
  ],
  declarations: [VanessaPage]
})
export class VanessaPageModule {}
