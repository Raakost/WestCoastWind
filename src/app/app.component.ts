import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {TabsPage} from '../pages/tabs/tabs';

import firebase from 'firebase';
//import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCQzuK2ySWMmEqB1Ls32-jN2HdKzmuRX80',
  authDomain: 'westcoastwind-20b3e',
  databaseURL: 'https://westcoastwind-20b3e.firebaseio.com/',
  projectId: 'westcoastwind-20b3e',
  storageBucket: 'YOUR_STORAGE_BUCKET',
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
