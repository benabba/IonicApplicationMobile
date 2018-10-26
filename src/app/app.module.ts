import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TypePrelevementPage } from '../pages/TypePrelevement/TypePrelevement';
import { SignalerUrgencePage } from '../pages/SignalerUrgence/SignalerUrgence';
import { SignalerPannePage } from '../pages/SignalerPanneMateriel/SignalerPanneMateriel';
import { SeConnecterPage } from '../pages/SeConnecter/SeConnecter';
import { SaisirPrelevementPage } from '../pages/SaisirPrelevement/SaisirPrelevement';
import { ReserverVehiculePage } from '../pages/ReserverVehicule/ReserverVehicule';
import { PrelevementPage } from '../pages/Prelevement/Prelevement';
import { MdpOubliePage } from '../pages/MotDePasseOublie/MotDePasseOublie';
import { MapPage } from '../pages/Map/Map';
import { ContactezNousPage } from '../pages/ContactezNous/ContactezNous';
import { AProposPage } from '../pages/APropos/APropos';
import { CalendrierPage } from '../pages/Calendrier/Calendrier';


@NgModule({
  declarations: [
    MyApp,
    HomePage,CalendrierPage,MapPage,MdpOubliePage,PrelevementPage,ReserverVehiculePage,SaisirPrelevementPage,SeConnecterPage,
    SignalerPannePage,SignalerUrgencePage,TypePrelevementPage,ContactezNousPage,AProposPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,CalendrierPage,MapPage,MdpOubliePage,PrelevementPage,ReserverVehiculePage,SaisirPrelevementPage,SeConnecterPage,
    SignalerPannePage,SignalerUrgencePage,TypePrelevementPage,ContactezNousPage,AProposPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
