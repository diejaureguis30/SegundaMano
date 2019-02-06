import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FavoritosPage } from '../favoritos/favoritos';

/**
 * Generated class for the FavsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favs',
  templateUrl: 'favs.html',
})
export class FavsPage {
  tab1=HomePage;
  tab2=FavoritosPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavsPage');
  }

}
