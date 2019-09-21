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

const appRoutes: Routes = [
  { path: 'components', component: ComponentsComponent },
  { path: 'components/barchart', component: BarChartComponent },
  { path: '', redirectTo: '/components', pathMatch: 'full'},
  { path: '**', component: ComponentsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ComponentsComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    BrowserAnimationsModule,
    ...material,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
