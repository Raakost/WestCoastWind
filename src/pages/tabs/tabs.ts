import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {WindChartPage} from "../wind-chart/wind-chart";
import {ForecastPage} from "../forecast/forecast";
import {HistoryPage} from "../history/history";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = WindChartPage;
  tab3Root = ForecastPage;
  tab4Root = HistoryPage;

  constructor() {

  }
}
