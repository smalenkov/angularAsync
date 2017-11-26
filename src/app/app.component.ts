import { Component, OnInit } from '@angular/core';
import * as eCharts from 'echarts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private myPieChar: any;
  data: Array<object> = null;
  title: string;
  description: string;

  constructor() {
    this.title = 'Async';
    this.description = 'Асинхронные запросы и RxJs';
  }

  ngOnInit() {
    this.setData();
    this.drawChart();
    this.addEventHandlers();
  }

  setData() {
    this.data = [
      {name: 'Введение', value: 17},
      {name: 'Первая глава', value: 36},
      {name: 'Вторая глава', value: 58},
      {name: 'Третья глава', value: 29},
      {name: 'Заключение', value: 6},
      {name: 'Заметки', value: 4}
    ];
  }

  drawChart() {
    const el = document.getElementById('eChartsBox');
    const options = {
      series: {
        type: 'pie',
        data: this.data
      }
    };

    this.myPieChar = eCharts.init(el);
    this.myPieChar.setOption(options);
  }

  addEventHandlers() {
    this.myPieChar.on('click', function(params) {
      console.log(params.name);
    });
  }

  onSelectLegendItem(index: number) {
    this.myPieChar.dispatchAction({
      type: 'pieToggleSelect',
      seriesIndex: 0,
      dataIndex: index
    });
  }

  onClickLegendItem(item: object) {
    console.dir(item);
  }
}
