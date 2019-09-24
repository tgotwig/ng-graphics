import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.scss']
})
export class ScatterChartComponent implements OnInit {
  data = Array.from({length: 30}, () => ({x: Math.random(), y: Math.pow(Math.random(), 2)}));

  constructor() { }

  ngOnInit() {
  }

}
