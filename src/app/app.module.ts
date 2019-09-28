import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng-charts';
import material from './app.material';

import { HighlightModule } from 'ngx-highlightjs';
import json from 'highlight.js/lib/languages/typescript';

import { MyNavComponent } from './components/my-nav/my-nav.component';
import { ComponentsComponent } from './components/components/components.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';
import { HistogramComponent } from './components/histogram/histogram.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

const appRoutes: Routes = [
  { path: 'components', component: ComponentsComponent },
  { path: 'components/barchart', component: BarChartComponent },
  { path: 'components/scatterchart', component: ScatterChartComponent },
  { path: 'components/histogram', component: HistogramComponent },
  { path: 'components/piechart', component: PieChartComponent },
  { path: '', redirectTo: '/components', pathMatch: 'full'},
  { path: '**', component: ComponentsComponent }
];

export function hljsLanguages() {
  return [
    {name: 'json', func: json}
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ComponentsComponent,
    BarChartComponent,
    ScatterChartComponent,
    HistogramComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    BrowserAnimationsModule,
    ...material,
    RouterModule.forRoot(appRoutes),
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
