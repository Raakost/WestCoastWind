import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {HomeTabModel} from "../../models/HomeTabModel";

@Injectable()
export class HomeProvider {

  constructor(public http: HttpClient) {
  }

  _url : string = 'http://vejr.eu/api.php?location=[CITY]&degree=C';

  /* Get content from API, replace [CITY] in url with chosen city in app. */
  getHomeTabContent(city : string): Observable<HomeTabModel>{
    const url = this._url.replace('[CITY]', city);

    return this.http.get(url).map(result =>
      result as HomeTabModel);
  }

  getcontent(){
    return this.http.get('http://vejr.eu/api.php?location=Esbjerg&degree=C').map(result =>
    result as HomeTabModel);
}

}
