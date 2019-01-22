import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ChartDataPointModel} from "../../models/ChartDataPointModel";
import * as cheerio from 'cheerio';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ScraperServiceProvider {

  _hvideSandeUrl: string = 'http://hyde.dk/';
  _esbjergUrl: string = 'http://portesbjerg.dk/en/api/weather';

  constructor(public http: HttpClient) {
    console.log('Hello ScraperServiceProvider Provider');
  }

  ScrapeHvideSande() {
    return this.http.get(this._hvideSandeUrl, {responseType: 'text'}).map((res: any) => {
      const htmlParsed: any = cheerio.load(res);
      // let meanWind = htmlParsed('.row:nth-child(3) span').contents().first().text();
      let meanWind = htmlParsed('.row:nth-child(3) > div > div > div table tr:nth-child(2) td').contents().eq(1).text();
      let windGust = htmlParsed('.row:nth-child(3) > div > div > div table tr:nth-child(3) td').contents().eq(1).text();
      let dataPoint = new ChartDataPointModel();
      let now = new Date();

      dataPoint.timeStamp = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
      dataPoint.meanWind = parseFloat(meanWind.replace(',', '.').replace(' m/s', ''));
      dataPoint.windGust = parseFloat(windGust.replace(',', '.').replace(' m/s', ''));
      dataPoint.windAverage = (dataPoint.meanWind + dataPoint.windGust) / 2;

      return dataPoint;
    });
  }

  ScrapeEsbjerg() {
    return this.http.get(this._esbjergUrl).map((result: any) => {
      let dataPoint = new ChartDataPointModel();
      let now = new Date();

      dataPoint.timeStamp = now.getHours() + ':' + now.getMinutes();
      dataPoint.meanWind = parseFloat(result.data.VHastMid);
      dataPoint.windGust = parseFloat(result.data.VStoedMax);
      dataPoint.windAverage = (dataPoint.meanWind + dataPoint.windGust) / 2;

      return dataPoint;
    });
  }

}
