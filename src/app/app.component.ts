import { Component, OnInit } from '@angular/core';
import eCharts from '../../node_modules/echarts';
import eChartPie from '../../node_modules/echarts/lib/chart/pie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  description: string;

  constructor() {
    this.title = 'Async';
    this.description = 'Асинхронные запросы и RxJs';
  }

  ngOnInit() {
    this.drawEchart();
    console.log(eChartPie);
  }

  drawEchart() {
    const chartEl = document.getElementById('eChartsBox');

    eCharts.init(chartEl).setOption({
      series: {
        type: 'pie',
        data: [
          {name: 'A', value: 1212},
          {name: 'B', value: 2323},
          {name: 'C', value: 1919}
        ]
      }
    });
  }

}
