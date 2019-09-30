import { NgModule } from '@angular/core';
import { NgBarChartComponent } from './components/barChart';
import { NgScatterChartComponent } from './components/scatterChart';
import { NgHistogramComponent } from './components/histogram';
import { NgPieChartComponent } from './components/pieChart';
import { NgHeatmapComponent } from './components/heatmap';



@NgModule({
  declarations: [
    NgBarChartComponent,
    NgScatterChartComponent,
    NgHistogramComponent,
    NgPieChartComponent,
    NgHeatmapComponent
  ],
  imports: [
  ],
  exports: [
    NgBarChartComponent,
    NgScatterChartComponent,
    NgHistogramComponent,
    NgPieChartComponent,
    NgHeatmapComponent
  ]
})
export class NgChartsModule { }
