
import { Component, OnInit, Input } from '@angular/core'
declare const d3
declare const $

@Component({
  selector: 'lib-line-chart',
  template: `<svg />`,
  styles: ['svg { width: 100%; height: 100%; }']
})
export class NgLineChartComponent implements OnInit {
  d3
  $
  @Input() data
  @Input() title
  @Input() xlabel
  @Input() ylabel

  constructor() { }

  ngOnInit() {
    const data = this.data
    const svg = d3.select('svg')
    const title = this.title
    const xlabel = this.xlabel
    const ylabel = this.ylabel

    const margin = {top: 40, right: 20, bottom: 50, left: 50}
    const width = +document.querySelector('svg').clientWidth - margin.left - margin.right
    const height = +document.querySelector('svg').clientHeight - margin.top - margin.bottom

    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width])

    const yScale = d3.scaleLinear()
      .domain([0, 1])
      .range([height, 0])

    const line = d3.line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d.y))
      .curve(d3.curveMonotoneX)

    svg.attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)

    const g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    g.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale))

    if (xlabel) {
      g.append('text')
        .attr('transform',
              'translate(' + (width / 2) + ' ,' +
                              (height + margin.top) + ')')
        .style('text-anchor', 'middle')
        .text(xlabel)
    }

    g.append('g')
      .attr('class', 'y axis')
      .call(d3.axisLeft(yScale))

    if (ylabel) {
      g.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - margin.left)
        .attr('x', 0 - (height / 2))
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .text(ylabel)
    }

    g.append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', line)
      .style('fill', 'none')
      .style('stroke', '#ffab00')
      .style('stroke-width', 3)

    g.selectAll('.dot')
      .data(data)
      .enter().append('circle')
        .attr('class', 'dot')
        .attr('cx', (d, i) => xScale(i))
        .attr('cy', (d) => yScale(d.y))
        .attr('r', 5)
        .style('fill', '#ffab00')
        .style('stroke', '#fff')
        .style('opacity', '0.8')
        .on('mouseover mousemove', function(d) {
          $(this).css('opacity', '1.0')
        })
        .on('mouseout', function(d) {
          $(this).css('opacity', '0.8')
        })

    if (title) {
      g.append('text')
        .attr('x', (width / 2))
        .attr('y', 0 - (margin.top / 2))
        .attr('text-anchor', 'middle')
        .text(title)
    }

    return svg.node()
  }
}
