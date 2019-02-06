import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { CasaPage } from '../casa/casa';
import { BuscarPage } from '../buscar/buscar';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  casas=[];
  cas=CasaPage;
  Busc=BuscarPage;
  constructor(public navCtrl: NavController, public http:HttpClient) {
    this.http.get('/v1/klfst?&category=1040&region=16&lang=es&lim=15')
  .subscribe(data=>
    {console.log(JSON.stringify(data));
    if(data.hasOwnProperty('counter_map')){
        console.log(data.counter_map.all);
      }
    if(data.hasOwnProperty('list_ads')){
      this.casas=data.list_ads;
    }
    }, 
    
    error =>{console.log(JSON.stringify(error));
    
    });
}
VerCasa(casa){
  this.navCtrl.push(this.cas, {casa: casa});
}

buscar(){
  this.navCtrl.push(this.Busc, {casas:this.casas});
}
}
