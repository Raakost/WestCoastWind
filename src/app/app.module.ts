import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';
import {WindChartPage} from "../pages/wind-chart/wind-chart";
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HttpClientModule} from "@angular/common/http";
import {ForecastServiceProvider} from '../providers/forecast-service/forecast-service';
import {HistoryPage} from "../pages/history/history";
import {IonicStorageModule} from "@ionic/storage";
import {ScraperServiceProvider} from '../providers/scraper-service/scraper-service';
import {ConfigServiceProvider} from '../providers/config-service/config-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    WindChartPage,
    HistoryPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    WindChartPage,
    HistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ForecastServiceProvider,
    ScraperServiceProvider,
    ConfigServiceProvider,
  ]
})
export class AppModule {
}
