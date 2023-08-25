import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private dados: any = []; /* variável para armazenar dados */

  constructor() { }

  /* Metódo para guardar dados */
  guardarDados(index: string, dados: any): boolean {
    if (index){
      this.dados[index] = dados;
      return true;
    } else {
      return false;
    }
  }

/* Metódo para pegar dados */
  pegarDados(index: string): any {
    if(index){
      return this.dados[index];
    } else {
      return null;
    }
  }

/*Metódo para deletar dados */
  delatarDados(index: string): boolean {
    return delete this.dados[index];
  }
}
