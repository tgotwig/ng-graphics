import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  data = [
    {
      letter: 'A',
      frequency: 30
    },
    {
      letter: 'B',
      frequency: 50
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
