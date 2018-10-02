import {LocationModel} from "./LocationModel";
import {CurrentModel} from "./CurrentModel";
import {ForecastdayModel} from "./ForecastdayModel";

export class ForecastTabModel {
  location: LocationModel;
  current: CurrentModel;
  forecastday: ForecastdayModel[];
}
