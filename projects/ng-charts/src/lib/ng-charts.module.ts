import { NgModule } from '@angular/core'
import { NgBarChartComponent } from './components/barChart'
import { NgScatterChartComponent } from './components/scatterChart'
import { NgHistogramComponent } from './components/histogram'
import { NgPieChartComponent } from './components/pieChart'
import { NgHeatmapComponent } from './components/heatmap'
import { NgLineChartComponent } from './components/lineChart'



@NgModule({
  declarations: [
    NgBarChartComponent,
    NgScatterChartComponent,
    NgHistogramComponent,
    NgPieChartComponent,
    NgHeatmapComponent,
    NgLineChartComponent
  ],
  imports: [
  ],
  exports: [
    NgBarChartComponent,
    NgScatterChartComponent,
    NgHistogramComponent,
    NgPieChartComponent,
    NgHeatmapComponent,
    NgLineChartComponent
  ]
})
export class NgChartsModule { }
