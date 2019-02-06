import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CasaPage } from '../casa/casa';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
  casas=[];
  items=[];
  casP= CasaPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.casas= this.navParams.get('casas');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }

  getItems(ev: any){
    console.log(ev.target.value);
  
    this.items=this.casas.filter(casa=>{ return casa.ad.locations[0].locations[0].label.toLowerCase()== ev.target.value.toLowerCase()})
  }

  verCasa(item){
    this.navCtrl.push(this.casP, {casa:item})
  }
}
