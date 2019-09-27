import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  selector = 'lib-pie-chart';
  data = [
    {fruit: 'bananas', percentage: 20},
    {fruit: 'apples', percentage: 45},
    {fruit: 'carrots', percentage: 35}
  ];
  dataStr = JSON.stringify(this.data, null, 2);

  constructor() { }

  ngOnInit() {
  }

}
