import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {ForecastTabModel} from "../../models/ForecastTabModel";
import 'rxjs/add/observable/interval';


@Injectable()
export class ForecastServiceProvider {

  constructor(public http: HttpClient) {

  }

  _foreCastUrl: string = 'http://api.apixu.com/v1/forecast.json?key=cef57cc59d9f4148871220732182709&q=hvide%20sande&days=4';

  getHomeTabContent(): Observable<ForecastTabModel> {
    return this.http.get(this._foreCastUrl).map(result =>
      result as ForecastTabModel);
  }

  /*
   * WITH CITY PARAM
  */

   // _foreCastUrl : string = 'http://api.apixu.com/v1/forecast.json?key=cef57cc59d9f4148871220732182709&q=[CITY]&days=4';
   //
   // getHomeTabContent(city: string): Observable<ForecastTabModel> {
   //   const url = this._foreCastUrl.replace('[CITY]', city);
   //
   //   return this.http.get(url).map(result =>
   //     result as ForecastTabModel);
   // }


}
