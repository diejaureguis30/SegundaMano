import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http';
import { CasaPage } from '../pages/casa/casa';
import { BuscarPage } from '../pages/buscar/buscar';
import { FavsPage } from '../pages/favs/favs';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { FavoritosProvider } from '../providers/favoritos/favoritos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CasaPage,
    BuscarPage,
    FavsPage,
    FavoritosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CasaPage,
    BuscarPage,
    FavsPage,
    FavoritosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
