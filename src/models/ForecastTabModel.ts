import {LocationModel} from "./LocationModel";
import {CurrentModel} from "./CurrentModel";
import {ForecastdayModel} from "./ForecastdayModel";

export class ForecastTabModel {
  constructor(loc: LocationModel, cur: CurrentModel, day: Array<ForecastdayModel>) {
    this.location = loc;
    this.forecastday = day;
    this.current = cur;
  }

  location: LocationModel;
  current: CurrentModel;
  forecastday: Array<ForecastdayModel>;
}
