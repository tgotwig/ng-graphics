<!-- ![Logo of the project](./images/logo.sample.png) -->

# NgCharts &middot; [![npm](https://img.shields.io/npm/dw/@tgotwig/ng-charts?style=flat-square)](https://www.npmjs.com/package/@tgotwig/ng-charts) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

<!-- > Additional information or tag line -->

A d3-driven charts library for Angular applications 📊
contributor friendly and idiomatic 🤗

## Installing / Getting started

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

## Developing

<!-- ### Built With

List main libraries, frameworks used including versions (React, Angular etc...)

### Prerequisites

What is needed to set up the dev environment. For instance, global dependencies or any other tools. include download links.

### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/your/your-project.git
cd your-project/
packagemanager install
```

And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here. -->

### Building

You can build the library by running the following line:

```shell
npm run build:ngCharts
```

and verify that it's working by using the components inside of `src`, run it with:

```shell
npm start
```

<!-- ### Deploying / Publishing

give instructions on how to build and release a new version
In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## Versioning

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).

## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```shell
Give an example
```

## Style guide

Explain your code style and show how to check it.

## Api Reference

If the api is external, link to api documentation. If not describe your api including authentication methods as well as explaining all the endpoints with their required parameters.

## Database

Explaining what database (and version) has been used. Provide download links.
Documents your database design and schemas, relations etc...

## Licensing

State what the license is and how to find the text version of the license. -->
