import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';
import {WindChartPage} from "../pages/wind-chart/wind-chart";
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HomeProvider} from '../providers/home/home';
import {HttpClientModule} from "@angular/common/http";
import {ForecastServiceProvider} from '../providers/forecast-service/forecast-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    WindChartPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    WindChartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HomeProvider,
    ForecastServiceProvider
  ]
})
export class AppModule {
}
