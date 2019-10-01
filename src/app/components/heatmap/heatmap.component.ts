import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})
export class HeatmapComponent implements OnInit {
  selector = 'lib-heatmap';
  data = [
    { group: 'A', key: 'v1', value: 30, },
    { group: 'A', key: 'v2', value: 95, },
    { group: 'B', key: 'v1', value: 37, },
    { group: 'B', key: 'v2', value: 50, },
  ];
  dataStr = JSON.stringify(this.data, null, 2);

  constructor() { }

  ngOnInit() {
  }

}
