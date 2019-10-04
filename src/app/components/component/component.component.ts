import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit() {
  }

}
