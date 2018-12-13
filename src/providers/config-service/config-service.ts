import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ScraperServiceProvider} from "../scraper-service/scraper-service";
import {ConfigurationModel} from "../../models/ConfigurationModel";


@Injectable()
export class ConfigServiceProvider {

  config: ConfigurationModel = {
    spots: [{
      name: 'Hvide Sande',
      getDataPoint: this.scraper.ScrapeEsbjerg

    }, {
      name: 'Esbjerg',
      getDataPoint: this.scraper.ScrapeHvideSande
    }], selectedSpot: undefined
  };

  constructor(public http: HttpClient, public scraper: ScraperServiceProvider) {
    console.log('Hello ConfigServiceProvider Provider');
    this.config.selectedSpot = this.config.spots[0];
  }

}
