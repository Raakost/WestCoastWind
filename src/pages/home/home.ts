import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ForecastServiceProvider} from "../../providers/forecast-service/forecast-service";
import {ForecastTabModel} from "../../models/ForecastTabModel";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentContent: ForecastTabModel;

  // weatherColors : string[] = [
  //   '#6A3D9F', // 0-2 m/s
  //   '#494ba3', // 2-4 m/s
  //   '#3d64a3', // 4-6 m/s
  //   '#3d80a1', // 6-8 m/s
  //   '#3e9893', // 8-10 m/s
  //   '#439343', // 10-12 m/s
  //   '#47a13d', // 12-14 m/s
  //   '#a3a03d', // 14-16 m/s
  //   '#a38c3d', // 16-18 m/s
  //   '#a2783d', // 18-20 m/s
  //   '#98633f', // 20-22 m/s
  //   '#8c5049', // 22-24 m/s
  //   '#823d4a', // 24-26 m/s
  //   '#8d3d65'  // 26 -  m/s
  // ];

  constructor(public navCtrl: NavController, public ser: ForecastServiceProvider) {
    ser.getHomeTabContent().subscribe(result => {
      this.currentContent = result;
    });
    console.log('ionViewDidLoad HomePage');
  }
}
