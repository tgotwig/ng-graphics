import { NgModule } from '@angular/core';
import { NgBarChartComponent } from './components/barChart';
import { NgScatterChartComponent } from './components/scatterChart';
import { NgHistogramComponent } from './components/histogram';
import { NgPieChartComponent } from './components/pieChart';



@NgModule({
  declarations: [
    NgBarChartComponent,
    NgScatterChartComponent,
    NgHistogramComponent,
    NgPieChartComponent
  ],
  imports: [
  ],
  exports: [
    NgBarChartComponent,
    NgScatterChartComponent,
    NgHistogramComponent,
    NgPieChartComponent
  ]
})
export class NgChartsModule { }
