# NgGraphics &middot; [![npm](https://img.shields.io/npm/dw/ng-graphics?style=flat-square)](https://www.npmjs.com/package/ng-graphics)

A d3-driven charting library for Angular applications 📊
contributor friendly and idiomatic 🤗

## Installing / Getting started

First Install this dependency:

```shell
npm i ng-graphics
```

Then put the following line into your **app.module.ts** file and add that variable to your **imports** array:

```typescript
import { NgChartsModule } from "ng-graphics";
```

Add the following to lines to your **angular.json**:

```text
"node_modules/d3/dist/d3.min.js",
"node_modules/jquery/dist/jquery.min.js",
"node_modules/popper.js/dist/umd/popper.min.js",
"node_modules/tippy.js/dist/tippy-bundle.iife.min.js"
```

If for instance you want a bar-chart, add this to your html:

```html
<div style="height: 500px; width: 500px">
  <lib-bar-chart
    [data]="[
      {
        key: 'A',
        value: 30
      },
      {
        key: 'B',
        value: 50
      }
    ]"
  ></lib-bar-chart>
</div>
```

It will inherit the height and the width of its parent element 🌳

## Developing

### Building

You can build the library by running the following line:

```shell
npm run build:ngCharts
```

and verify that it's working by using the components inside of `src`, run it with:

```shell
npm start
```
