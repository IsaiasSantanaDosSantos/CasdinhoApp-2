import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { IMotoristas } from '../models/IMotoristas.models';

@Component({
  selector: 'app-dados-motoristas',
  templateUrl: './dados-motoristas.page.html',
  styleUrls: ['./dados-motoristas.page.scss'],
})
export class DadosMotoristasPage implements OnInit {

  motoristas: IMotoristas;

  constructor( public dadosService: DadosService) { }

  ngOnInit() {
    this.motoristas = this.dadosService.pegarDados('motoristas');
    console.log('Motorista enviado!', this.motoristas);
  }

}
