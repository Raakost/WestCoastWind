import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ForecastServiceProvider} from "../../providers/forecast-service/forecast-service";
import {ForecastTabModel} from "../../models/ForecastTabModel";

@IonicPage()
@Component({
  selector: 'page-forecast',
  templateUrl: 'forecast.html',
})

export class ForecastPage {

  content: ForecastTabModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ser: ForecastServiceProvider) {
    ser.getForecastTabContent().subscribe(result => {
      this.content = result;
      // console.log(this.content);
    });
  }
}
