import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-charts';

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
}
