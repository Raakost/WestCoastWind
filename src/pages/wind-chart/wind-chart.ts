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
            data: [1.5, 2, 3, 5, 8, 1, 4, 9], // y-axis
            backgroundColor: ['rgba(14,194,255, 0.3)'], // color below line
            borderColor: ['#0ec2ff'], // line color
            borderWidth: 1, // line width
            pointRadius: 3,
            pointHitRadius: 15
          }, {
            label: 'Wind Gust', // label for info/top
            data: [3.4, 4, 4, 8, 14, 3, 8, 16], // y-axis
            backgroundColor: ['rgba(248,142,25, 0.3)'], // color below line
            borderColor: ['#f88e19'], // line color
            borderWidth: 1, // line width
            pointRadius: 3,
            pointHitRadius: 40,
          }],
        },
        options: {
          layout: {
            padding: {
              top: 26,
              bottom: 26,
              right: 26
            }
          },
          legend: {
            labels: {
              fontColor: '#ffffff',
              fontSize: 14,
              boxWidth: 45
            },
            position: 'top'
          },
          maintainAspectRatio: false,
          scales: {
            // X-Axis styling
            xAxes: [{
              display: true,
              gridLines: {
                display: true,
                color: '#ffffff'
              },
              ticks: {
                fontColor: '#ffffff',
                fontSize: 12,
                padding: 10
              },
            }],
            // Y-Axis styling
            yAxes: [{
              gridLines: {
                display: true,
                color: '#ffffff'
              },
              ticks: {
                beginAtZero: true,
                stepSize: 1,
                max: 18,
                fontColor: '#ffffff',
                fontSize: 12,
                padding: 10
              },
              scaleLabel: {
                display: true,
                labelString: 'm/s',
                fontColor: '#ffffff',
                fontSize: 18
              }
            }]
          }
        }
      }
    );
  }
}
