import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
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
