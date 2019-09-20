# ng-charts

A d3-driven charts library for Angular applications 📊
contributor friendly and idiomatic 🤗

## Getting Started

First Install this dependency:

```shell
npm i @tgotwig/ng-charts
```

Then put the following line into your **app.module.ts** file and add that variable to your **imports** array:

```typescript
import { NgChartsModule } from "@tgotwig/ng-charts";
```

Add the following to lines to your **angular.json**:

```text
"node_modules/d3/dist/d3.min.js",
"node_modules/jquery/dist/jquery.min.js"
```

If for instance you want a bar-chart, add this to your html:

```html
<div style="height: 500px; width: 500px">
  <lib-bar-chart
    [data]="[
      {
        letter: 'A',
        frequency: 30
      },
      {
        letter: 'B',
        frequency: 50
      }
    ]"
  ></lib-bar-chart>
</div>
```

It will inherit the height and the width of its parent element 🌳
