import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {HomeTabModel} from "../../models/HomeTabModel";

@Injectable()
export class HomeProvider {

  constructor(public http: HttpClient) {
  }

  _url: string = 'http://api.apixu.com/v1/current.json?key=cef57cc59d9f4148871220732182709&q=Esbjerg';
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
