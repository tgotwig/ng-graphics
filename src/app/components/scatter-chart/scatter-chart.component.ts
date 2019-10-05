import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.scss']
})
export class ScatterChartComponent implements OnInit {
  selector = 'lib-scatter-chart'
  data = Array.from({length: 3}, () => ({x: Math.random(), y: Math.pow(Math.random(), 2)}))
  dataStr = JSON.stringify(this.data, null, 2)

  constructor() { }

  ngOnInit() {
  }

}
