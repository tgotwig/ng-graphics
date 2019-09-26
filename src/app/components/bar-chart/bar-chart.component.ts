import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  selector = 'lib-bar-chart';
  data = [
    {
      key: 'A',
      value: 30
    },
    {
      key: 'B',
      value: 50
    }
  ];
  dataStr = JSON.stringify(this.data, null, 2);


  constructor() { }

  ngOnInit() {
  }

}
