import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HomeTabModel} from "../../models/HomeTabModel";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ForecastServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ForecastServiceProvider Provider');
  }

  _url: string = 'http://api.apixu.com/v1/current.json?key=cef57cc59d9f4148871220732182709&q=Esbjerg';
  _foreCastUrl : string = 'http://api.apixu.com/v1/forecast.json?key=cef57cc59d9f4148871220732182709&q=Esbjerg&days=4';

  // _foreCastUrl : string = 'http://api.apixu.com/v1/forecast.json?key=cef57cc59d9f4148871220732182709&q=[CITY]&days=4';
  // _url: string = 'http://api.apixu.com/v1/current.json?key=cef57cc59d9f4148871220732182709&q=[CITY]';

  // getHomeTabContent(city: string): Observable<HomeTabModel> {
  //   const url = this._url.replace('[CITY]', city);
  //
  //   return this.http.get(url).map(result =>
  //     result as HomeTabModel);
  // }

  getHomeTabContent(): Observable<HomeTabModel> {
    return this.http.get(this._url).map(result =>
      result as HomeTabModel);
  }



}
