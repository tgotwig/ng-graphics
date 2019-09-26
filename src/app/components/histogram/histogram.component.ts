import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss']
})
export class HistogramComponent implements OnInit {
  selector = 'lib-histogram';
  data = Array.from({length: 30}, () => Math.floor(Math.random() * 101));
  dataStr = JSON.stringify(this.data, null, 2);

  constructor() { }

  ngOnInit() {
  }

}
