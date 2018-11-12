import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Chart} from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-wind-chart',
  templateUrl: 'wind-chart.html',
})
export class WindChartPage {
  @ViewChild('historyChart') lineChart;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    var chart = new Chart(this.lineChart.nativeElement.getContext('2d'), {
      type: 'line', // what type of chart
      data: {
        labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',], // labels for data points/x-axis
        datasets: [{
          label: 'Mean Wind Speed', // label for info/top
          data: [1, 2, 3, 5, 8, 1, 4, 9], // y-axis
          backgroundColor: ['transparent'], // color below line
          borderColor: ['rgba(255,99,132,1)'], // line color
          borderWidth: 1 // line width
        }, {
          label: 'Wind Gust', // label for info/top
          data: [3, 4, 4, 8, 14, 3, 8, 16], // y-axis
          backgroundColor: ['transparent'], // color below line
          borderColor: ['rgba(100,250', ',255,1)'], // line color
          borderWidth: 1 // line width
        }],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
