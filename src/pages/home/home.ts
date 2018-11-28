import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from "../contact/contact";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  public titulo:string = "Bem Vindo ao Cardapio Web"; // propriedade
  constructor(public navCtrl: NavController) {

  }

  callCadastrar() {
    this.navCtrl.push(ContactPage);
  }
}
