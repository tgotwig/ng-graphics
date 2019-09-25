import { NgModule } from '@angular/core';
import { NgBarChartComponent } from './components/barChart';
import { NgScatterChartComponent } from './components/scatterChart';
import { NgHistogramComponent } from './components/histogram';



@NgModule({
  declarations: [
    NgBarChartComponent,
    NgScatterChartComponent,
    NgHistogramComponent
  ],
  imports: [
  ],
  exports: [
    NgBarChartComponent,
    NgScatterChartComponent,
    NgHistogramComponent
  ]
})
export class NgChartsModule { }
