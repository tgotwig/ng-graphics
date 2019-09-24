import { Component, OnInit, Input } from '@angular/core';
declare const d3: any;
declare const $: any;

@Component({
  selector: 'lib-scatter-chart',
  template: `<svg />`,
  styles: ['svg { width: 100%; height: 100%; }']
})
export class NgScatterChartComponent implements OnInit {
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

    const xScale = d3.scaleLinear()
      .domain([0, 1])
      .range([margin.left, width - margin.right]);

    const yScale = d3.scaleLinear()
      .domain([0, 1])
      .range([height - margin.bottom, margin.top]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append('g')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(xAxis);
    svg.append('g')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(yAxis);

    svg.append('g')
        .attr('stroke', '#000')
        .attr('stroke-opacity', 0.2)
      .selectAll('circle')
      .data(data)
      .enter().append('circle')
        .attr('cx', (d: any) => xScale(d.x))
        .attr('cy', (d: any) => yScale(d.y))
        .attr('r', 2.5);

    return svg.node();
  }
}
