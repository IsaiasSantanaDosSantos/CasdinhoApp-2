import { DadosService } from './../services/dados.service';
import { IMotoristas } from './../models/IMotoristas.models';
import { ICasdinhors } from './../models/ICasdinhers.models';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo = 'Viagens Casdinho';

  listaCasdinhers: ICasdinhors[] = [
    {
      nome: 'Nycollas Kurt',
      contato: '12 99198-6219',
      idade: '14',
      foto: 'https://bit.ly/3aQcVCQ',
      pagina: '/nycollas-kurt'
    },
    {
      nome: 'Willian Miguel',
      contato: '****',
      idade: '**',
      foto: 'https://bit.ly/3zn7zJr',
      pagina: '/willian-miguel'
    },
    {
      nome: 'Isabella',
      contato: '12 98867-1016',
      idade: '**',
      foto: 'https://bit.ly/39j5kvY',
      pagina: '/isabella'
    },
    {
      nome: 'Giovanna',
      contato: '****',
      idade: '**',
      foto: 'https://bit.ly/3zn7zJr',
      pagina: '/giovanna'
    }
  ];

  listaMotoristas: IMotoristas[] = [
    {
      nome: 'Isaias Santana',
      contato: '12 97401-1729',
      foto: 'https://bit.ly/3O6r3Gy',
      diaFixo: 'Domingo',
      horario: '7h20/ida',
      pagina: '/isaias'
    },
    {
      nome: 'Vanessa',
      contato: '12 98804-5221',
      foto: 'https://bit.ly/3Q8VVaY',
      diaFixo: 'Sábado',
      horario: '12h50/volta',
      pagina: '/vanessa'
    },
    {
      nome: 'Thais',
      contato: '12 98819-5009',
      foto: 'https://bit.ly/3xrrci0',
      diaFixo: 'Sábado',
      horario: '7h20/ida',
      pagina: '/thais'
    }
  ];



  constructor(
    public dadosService: DadosService,
    public route: Router
  ) {
    /*const data = new Date();
    const hoje = data.getDay();
    console.log('aqui!');
    console.log(hoje);*/ /* 0= domingo, 1= segunda, etc... */
  }

  exibirCasdinhers(casdinhers: ICasdinhors) {
    this.dadosService.guardarDados('casdinhers', casdinhers);
    this.route.navigateByUrl('/dados-casdinhers');
  }

  exibirMotoristas(motoristas: IMotoristas) {
    this.dadosService.guardarDados('motoristas', motoristas);
    this.route.navigateByUrl('/dados-motoristas');
  }

}

/*
PAREI NESTE VÍDEO:
https://www.youtube.com/watch?v=cuBq5lS-1_U&list=PLuXkauUmG1ZH7iJfW5GpAKAQTo_NL5PZ7&index=23
NO MINUTO 3 segundo 45

 */
