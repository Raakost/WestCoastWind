import {ChartDataPointModel} from "./ChartDataPointModel";
import {Observable} from "rxjs/Observable";

export class SpotModel {
  name: string;
  getDataPoint: () => Observable<ChartDataPointModel>;
}
