import {DayModel} from "./DayModel";
import {AstroModel} from "./AstroModel";

export class ForecastdayModel {
  constructor(date: string, day: DayModel) {
    this.date = date;
    this.day = day;
  }

  date: string;
  day: DayModel;
  astro: AstroModel;
}
