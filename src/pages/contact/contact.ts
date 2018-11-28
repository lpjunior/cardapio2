import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private nome:string;
  private email:string;
  private telefone:string;
  private msg:string;

  public txtNome:string;
  public txtEmail:string;
  public txtTelefone:string;
  public txtMsg:string;

  constructor(public navCtrl: NavController) {

  }

  showContactFull() {
    alert(
      "Nome: " + this.nome
      +"\nEmail: " + this.email
      +"\nTelefone: " + this.telefone
      +"\nMensagem: " + this.msg
    );

    this.txtNome = this.nome;
    this.txtEmail = this.email;
    this.txtTelefone = this.telefone;
    this.txtMsg = this.msg;
  }
}
