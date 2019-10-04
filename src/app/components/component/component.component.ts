import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

export interface Property {
  name: string;
  type: string;
  desc: string;
}

const PROPERTY_DATA: Property[] = [
  {name: 'xlabel', type: 'String', desc: 'Label which should be shown along the x-achses'},
  {name: 'ylabel', type: 'String', desc: 'Label which should be shown along the y-achses'}
];

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {
  url = this.router.url;
  name = this.route.snapshot.data.name;
  selector = this.route.snapshot.data.selector;
  data = this.route.snapshot.data.data;
  dataStr = JSON.stringify(this.data, null, 2);

  displayedColumns: string[] = ['name', 'type', 'desc'];
  dataSource = PROPERTY_DATA;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit() {
  }

}
