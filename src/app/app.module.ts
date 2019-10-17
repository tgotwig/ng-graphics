import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { NgChartsModule } from 'ng-charts'
import material from './app.material'

import { HighlightModule } from 'ngx-highlightjs'
import json from 'highlight.js/lib/languages/typescript'

import { MyNavComponent } from './components/my-nav/my-nav.component'
import { ComponentsComponent } from './components/components/components.component'
import { ComponentComponent } from './components/component/component.component'

const appRoutes: Routes = [
  {
    path: 'components',
    component: ComponentsComponent
  },
  {
    path: 'components/scatterchart',
    component: ComponentComponent,
    data: {
      name: 'Scatterchart',
      selector: 'lib-scatter-chart',
      data: Array.from({length: 3}, () => ({x: Math.random(), y: Math.pow(Math.random(), 2)})),
      properties: [
        {name: 'title', type: 'String', desc: 'Title of the plot'},
      ]
    }
  },
  {
    path: 'components/histogram',
    component: ComponentComponent,
    data: {
      name: 'Histogram',
      selector: 'lib-histogram',
      data: Array.from({length: 30}, () => Math.floor(Math.random() * 101)),
      properties: [
        {name: 'title', type: 'String', desc: 'Title of the plot'},
        {name: 'xlabel', type: 'String', desc: 'Label which should be shown along the x-achses'},
        {name: 'ylabel', type: 'String', desc: 'Label which should be shown along the y-achses'}
      ]
    },
  },
  {
    path: 'components/piechart',
    component: ComponentComponent,
    data: {
      name: 'Pie-Chart',
      selector: 'lib-pie-chart',
      data: [
        {fruit: 'bananas', percentage: 20},
        {fruit: 'apples', percentage: 45},
        {fruit: 'carrots', percentage: 35}
      ],
      properties: [
        {name: 'title', type: 'String', desc: 'Title of the plot'},
      ]
    }
  },
  {
    path: 'components/heatmap',
    component: ComponentComponent,
    data: {
      name: 'Heatmap',
      selector: 'lib-heatmap',
      data: [
        { group: 'A', key: 'v1', value: 30 },
        { group: 'A', key: 'v2', value: 95 },
        { group: 'B', key: 'v1', value: 37 },
        { group: 'B', key: 'v2', value: 50 }
      ],
      properties: [
        {name: 'title', type: 'String', desc: 'Title of the plot'},
      ]
    }
  },
  {
    path: 'components/linechart',
    component: ComponentComponent,
    data: {
      name: 'Line-Chart',
      selector: 'lib-line-chart',
      data: Array.from({length: 5}, () => ({y: Math.random()})),
      properties: [
        {name: 'title', type: 'String', desc: 'Title of the plot'},
        {name: 'xlabel', type: 'String', desc: 'Label which should be shown along the x-achses'},
        {name: 'ylabel', type: 'String', desc: 'Label which should be shown along the y-achses'}
      ]
    }
  },
  {
    path: 'components/barchart',
    component: ComponentComponent,
    data: {
      name: 'Bar-Chart',
      selector: 'lib-bar-chart',
      data: [
        { key: 'A', value: 30 },
        { key: 'B', value: 50 }
      ],
      properties: [
        {name: 'title', type: 'String', desc: 'Title of the plot'},
        {name: 'xlabel', type: 'String', desc: 'Label which should be shown along the x-achses'},
        {name: 'ylabel', type: 'String', desc: 'Label which should be shown along the y-achses'}
      ]
    }
  },
  {
    path: '',
    redirectTo: '/components',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ComponentsComponent
  }
]

export function hljsLanguages() {
  return [
    {name: 'json', func: json}
  ]
}

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ComponentsComponent,
    ComponentComponent
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
