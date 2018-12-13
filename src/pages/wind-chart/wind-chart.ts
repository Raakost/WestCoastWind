import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Chart} from 'chart.js';
import {ScraperServiceProvider} from "../../providers/scraper-service/scraper-service";
import {ChartModel} from "../../models/ChartModel";
import {ChartDataPointModel} from "../../models/ChartDataPointModel";


@IonicPage()
@Component({
  selector: 'page-wind-chart',
  templateUrl: 'wind-chart.html',
})
export class WindChartPage {
  @ViewChild('historyChart') lineChart;

  chart: Chart;
  interval: any;
  isRecording: boolean = false;
  timePassed = 0;
  intervalMs = 60000;

  constructor(public navCtrl: NavController, public navParams: NavParams, public scraper: ScraperServiceProvider) {
  }

  Record() {
    if (!this.isRecording) {
      clearInterval(this.interval);
      this.interval = undefined;
    } else {
      this.interval = setInterval(this.Scrape.bind(this), this.intervalMs);
      this.Scrape();
    }
  }

  Scrape() {
    this.scraper.ScrapeHvideSande().subscribe((result : ChartDataPointModel) => {
      this.chart.data.labels.push(result.timeStamp); // x-axis
      this.chart.data.datasets.forEach((dataSet) => { // y-axis
        switch (dataSet.label) {
          case 'Mean Wind':
            dataSet.data.push(result.meanWind);
            break;
          case 'Wind Gust':
            dataSet.data.push(result.windGust);
            break;
          case 'Wind Average':
            dataSet.data.push(result.windAverage);
            break;
        }
      });
      this.chart.update();
      this.timePassed = this.timePassed + this.intervalMs;
      if (this.timePassed > 900000) {
        clearInterval(this.interval);
        this.isRecording = false;
        this.interval = undefined;
      }
    });
  }

  ionViewDidLoad() {
    this.chart = new Chart(this.lineChart.nativeElement.getContext('2d'), {
        type: 'line', // what type of chart
        data: {
          // labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',], // labels for data points/x-axis
          labels: [],
          datasets: [{
            label: 'Mean Wind', // label for info/top
            // data: [1.5, 2, 3, 5, 8, 1, 4, 9], // y-axis
            data: [],
            backgroundColor: ['rgba(14,194,255, 0.4)'], // color below line
            borderColor: ['#0ec2ff'], // line color
            borderWidth: 1, // line width
            pointRadius: 3,
            pointHitRadius: 40
          }, {
            label: 'Wind Gust', // label for info/top
            // data: [3.4, 4, 4, 8, 14, 3, 8, 16], // y-axis
            data: [],
            backgroundColor: ['rgba(248,142,25, 0.4)'], // color below line
            borderColor: ['#f88e19'], // line color
            borderWidth: 1, // line width
            pointRadius: 3,
            pointHitRadius: 40
          },
            {
              label: 'Wind Average', // label for info/top
              // data: [2, 3, 2.5, 7, 12, 2, 6, 14], // y-axis
              data: [],
              backgroundColor: ['rgba(129,248,103, 0.4)'], // color below line
              borderColor: ['#81f867'], // line color
              borderWidth: 1, // line width
              pointRadius: 3,
              pointHitRadius: 40
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
              boxWidth: 16
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
                // max: 25,
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
