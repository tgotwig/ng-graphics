import { NgModule } from '@angular/core';
import { NgBarChartComponent } from './components/barChart';
import { NgScatterChartComponent } from './components/scatterChart';



@NgModule({
  declarations: [
    NgBarChartComponent,
    NgScatterChartComponent
  ],
  imports: [
  ],
  exports: [
    NgBarChartComponent,
    NgScatterChartComponent
  ]
})
export class NgChartsModule { }
