import { Component, OnInit } from '@angular/core';
declare const d3: any;

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  selector = 'lib-line-chart';
  data = d3.range(5).map(function(d: any) { return {y: d3.randomUniform(1)() }; });
  dataStr = JSON.stringify(this.data, null, 2);

  constructor() { }

  ngOnInit() {
  }

}
