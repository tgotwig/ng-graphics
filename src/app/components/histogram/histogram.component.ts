import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss']
})
export class HistogramComponent implements OnInit {
  data = Array.from({length: 1000}, () => Math.floor(Math.random() * 101));

  constructor() { }

  ngOnInit() {
  }

}
