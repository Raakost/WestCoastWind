import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ForecastServiceProvider} from "../../providers/forecast-service/forecast-service";
import {ForecastTabModel} from "../../models/ForecastTabModel";
import {SpotModel} from "../../models/SpotModel";
import {ConfigServiceProvider} from "../../providers/config-service/config-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentContent: ForecastTabModel;
  spot: SpotModel;
  spots: Array<SpotModel>;

  constructor(public navCtrl: NavController, public service: ForecastServiceProvider, public config: ConfigServiceProvider) {
    service.getHomeTabContent().subscribe(result => {
      this.currentContent = result;
    });
    this.spots = config.config.spots;
    this.spot = config.config.selectedSpot;
    console.log('ionViewDidLoad HomePage');
  }

  SpotChanged() {
    config.config.selectedSpot = this.spot;
  }
}
