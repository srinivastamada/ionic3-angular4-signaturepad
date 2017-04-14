import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {SignaturePage} from '../signature/signature'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public signatureImage : any;

  constructor(public navCtrl: NavController, public navParams:NavParams, public modalController:ModalController) {
  this.signatureImage = navParams.get('signatureImage');;
  }

  openSignatureModel(){
    setTimeout(() => {
       let modal = this.modalController.create(SignaturePage);
    modal.present();
    }, 300);
  
  }

}
