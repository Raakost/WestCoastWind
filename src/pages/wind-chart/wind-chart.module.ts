import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WindChartPage } from './wind-chart';

@NgModule({
  declarations: [
    WindChartPage,
  ],
  imports: [
    IonicPageModule.forChild(WindChartPage),
  ],
})
export class WindChartPageModule {}
