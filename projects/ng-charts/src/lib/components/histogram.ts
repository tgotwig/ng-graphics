import { Component, OnInit, Input } from '@angular/core';
declare const d3: any;
declare const $: any;

@Component({
  selector: 'lib-histogram',
  template: `<svg />`,
  styles: ['svg { width: 100%; height: 100%; }']
})
export class NgHistogramComponent implements OnInit {
  d3: any;
  $: any;
  @Input() data: any;

  constructor() { }

  ngOnInit() {
    const data = this.data;
    const svg = d3.select('svg');

    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    const width = +document.querySelector('svg').clientWidth - margin.left - margin.right;
    const height = +document.querySelector('svg').clientHeight - margin.top - margin.bottom;

    // X input -> output mapping
    const x = d3.scaleLinear()
      .domain(d3.extent(data)).nice()
      .range([5, width])

    const histogram = d3.histogram()
      .domain(x.domain())
      .thresholds(x.ticks(20))

    const bins = histogram(data)

    // Y input -> output mapping
    const y = d3.scaleLinear()
      .domain([0, d3.max(bins, d => d.length)]).nice()
      .range([height, 0]);

    const xAxisCall = d3.axisBottom(x);
    const yAxisCall = d3.axisLeft(y);

    // Create our main child inside the parent, this is the canvas and its a bit smaller than the entire SVG
    const g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    const xAxis = g.append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(0, ' + height + ')');

    const yAxis = g.append('g')
      .attr('class', 'y-axis')
      .attr('transform', 'translate(5,0)');

    const bars = g.append('g')
      .selectAll('rect')
      .data(bins);

    bars.enter().append('rect')
      .attr('x', d => x(d.x0) + 1)
      .attr('width', d => Math.max(0, x(d.x1) - x(d.x0) - 1))
      .attr('fill', 'steelblue')
      .attr('fill-opacity', 1)
      .attr('y', d => y(d.length))
      .attr('height', d => y(0) - y(d.length));

    xAxis.call(xAxisCall);
    yAxis.call(yAxisCall);

    return svg.node();
  }
}
