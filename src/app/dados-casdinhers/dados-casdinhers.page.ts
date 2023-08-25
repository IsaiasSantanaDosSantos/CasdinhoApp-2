import { ICasdinhors } from './../models/ICasdinhers.models';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-casdinhers',
  templateUrl: './dados-casdinhers.page.html',
  styleUrls: ['./dados-casdinhers.page.scss'],
})
export class DadosCasdinhersPage implements OnInit {

  casdinhers: ICasdinhors;

  constructor( public dadosService: DadosService ) { }

  ngOnInit() {
    this.casdinhers = this.dadosService.pegarDados('casdinhers');
    console.log('Casdinhers enviado!', this.casdinhers);
  }

}
