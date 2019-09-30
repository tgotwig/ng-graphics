import { Component, OnInit, Input } from '@angular/core';
declare const d3: any;
declare const $: any;

@Component({
  selector: 'lib-heatmap',
  template: `<svg />`,
  styles: ['svg { width: 100%; height: 100%; }']
})
export class NgHeatmapComponent implements OnInit {
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

    const g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // Labels of row and columns
    const myGroups = ['A', 'B'];
    const myVars = ['v1', 'v2'];

    // Build X scales and axis:
    const x = d3.scaleBand()
      .range([ 0, width ])
      .domain(myGroups)
      .padding(0.01);
    g.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

    // Build X scales and axis:
    const y = d3.scaleBand()
      .range([ height, 0 ])
      .domain(myVars)
      .padding(0.01);
    g.append('g')
      .call(d3.axisLeft(y));

    // Build color scale
    const myColor = d3.scaleLinear()
      .range(['white', '#69b3a2'])
      .domain([1, 100]);

    g.selectAll()
      .data(data, function(d) {return d.group + ':' + d.key; })
      .enter()
      .append('rect')
        .attr('x', (d: any) => x(d.group))
        .attr('y', (d: any) => y(d.key))
        .attr('width', x.bandwidth() )
        .attr('height', y.bandwidth() )
        .style('fill', (d: any) => myColor(d.value))
        .style('opacity', '0.8')
        .on('mouseover mousemove', function(d: any) {
          $(this).css('opacity', '1.0');
        })
        .on('mouseout', function(d: any) {
          $(this).css('opacity', '0.8');
        });

    return svg.node();
  }
}
