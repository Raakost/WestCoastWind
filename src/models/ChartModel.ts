import {ChartDataPointModel} from "./ChartDataPointModel";

export class ChartModel {

  constructor() {
    this.dataPoints = [];
  }

  dataPoints: Array<ChartDataPointModel>;
}
