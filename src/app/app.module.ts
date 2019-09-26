import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyNavComponent } from './components/my-nav/my-nav.component';
import { ComponentsComponent } from './components/components/components.component';

import material from './app.material';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';
import { HistogramComponent } from './components/histogram/histogram.component';

const appRoutes: Routes = [
  { path: 'components', component: ComponentsComponent },
  { path: 'components/barchart', component: BarChartComponent },
  { path: 'components/scatterchart', component: ScatterChartComponent },
  { path: 'components/histogram', component: HistogramComponent },
  { path: '', redirectTo: '/components', pathMatch: 'full'},
  { path: '**', component: ComponentsComponent }
];

import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/typescript';
export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml},
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
    HistogramComponent
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
