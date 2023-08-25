import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  name1: string;
  senha: string ;

  name2: string;

  name3: string;


  constructor(public toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }

  login(){
if(this.name1 === 'Isaias' && this.senha === '123456'){
  this.route.navigateByUrl('/tabs/tab1');
  this.presentToast(`Seja bem vindo(a) ${this.name1}!`, 'success');
} else {
  this.presentToast(`ERRO, usuário e/ou senha inválidos!`, 'danger');
}
  }

  async presentToast(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 2000
    });
    toast.present();
  }

}
