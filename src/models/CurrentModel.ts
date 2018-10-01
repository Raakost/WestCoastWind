import {ConditionModel} from "./ConditionModel";

export class CurrentModel {

  condition : ConditionModel;

    temp_c: number; // Decimal
    wind_mph: number; // Decimal
    wind_degree: number; // Direction in degrees
    wind_dir: string; // "W"
}
