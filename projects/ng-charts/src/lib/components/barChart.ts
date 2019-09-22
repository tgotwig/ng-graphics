import { Component, OnInit, Input } from '@angular/core';
declare const d3: any;
declare const $: any;

@Component({
  selector: 'lib-bar-chart',
  template: `<svg />`,
  styles: ['svg { width: 100%; height: 100%; }']
})
export class NgBarChartComponent implements OnInit {
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

    const x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
    const y = d3.scaleLinear().rangeRound([height, 0]);

    const g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    x.domain(data.map( (d: any) => d.key));
    y.domain([0, d3.max(data, (d: any) => d.value)]);

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y));

    g.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
        .attr('class', 'bar')
        .attr('x', (d: any) => x(d.key))
        .attr('y', (d: any) => y(d.value))
        .attr('width', x.bandwidth())
        .attr('height', (d: any) => height - y(d.value))
        .attr('title', (d: any) => d.value)
        .style('fill', 'steelblue')
        .on('mouseover mousemove', function(d: any) {
          $(this).css('fill', 'tomato');
        })
          .on('mouseout', function(d: any) {
          $(this).css('fill', 'steelblue');
        });

    return svg.node();
  }
}
