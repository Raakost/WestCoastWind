import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HomeTabModel} from "../../models/HomeTabModel";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {ForecastTabModel} from "../../models/ForecastTabModel";
import 'rxjs/add/observable/interval';

@Injectable()
export class ForecastServiceProvider {

  constructor(public http: HttpClient) {

  }

  _homeUrl: string = 'http://api.apixu.com/v1/current.json?key=cef57cc59d9f4148871220732182709&q=Esbjerg';
  _foreCastUrl: string = 'http://api.apixu.com/v1/forecast.json?key=cef57cc59d9f4148871220732182709&q=Esbjerg&days=4';


  getHomeTabContent(): Observable<ForecastTabModel> {
    return this.http.get(this._foreCastUrl).map(result =>
      result as ForecastTabModel);
  }

  getForecastTabContent(): Observable<ForecastTabModel> {
    return this.http.get(this._foreCastUrl).map(result =>
      result as ForecastTabModel);
  }

  /*
   * WITH CITY PARAM
  */

  // _foreCastUrl : string = 'http://api.apixu.com/v1/forecast.json?key=cef57cc59d9f4148871220732182709&q=[CITY]&days=4';
  // _homeUrl: string = 'http://api.apixu.com/v1/current.json?key=cef57cc59d9f4148871220732182709&q=[CITY]';

  // getHomeTabContent(city: string): Observable<HomeTabModel> {
  //   const url = this._homeUrl.replace('[CITY]', city);
  //
  //   return this.http.get(url).map(result =>
  //     result as HomeTabModel);
  // }

  // getForecastTabContent(city: string): Observable<ForecastTabModel> {
  //   return this.http.get(this._foreCastUrl).map(result =>
  //   result as ForecastTabModel);
  // }

}
