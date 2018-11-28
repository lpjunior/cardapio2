import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebCardapioProvider } from "../../providers/web-cardapio/web-cardapio";

@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
  providers: [
    WebCardapioProvider
  ]
})
export class CardapioPage {

  // definir que a variavel é um array
  cardapios = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private webCardapioProvider: WebCardapioProvider) {
  }

  ionViewDidLoad() {
    this.fillCards();
  }

  fillCards() {
    this.webCardapioProvider.getCardapios().subscribe(
      data=>{
      
        let dados = (data as any)._body;
        let json = JSON.parse(dados);
        this.cardapios = json;
        
       // this.cardapios = JSON.parse((data as any)._body);
      },
      error=>{
        let erro = (error as any)._body;
        console.log(erro);
      }
    );
  }
}