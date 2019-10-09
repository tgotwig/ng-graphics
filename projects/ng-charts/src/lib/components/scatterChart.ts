import { Component, OnInit, Input } from '@angular/core'
declare const d3: any
declare const $: any

@Component({
  selector: 'lib-scatter-chart',
  template: `<svg />`,
  styles: ['svg { width: 100%; height: 100%; }']
})
export class NgScatterChartComponent implements OnInit {
  d3: any
  $: any
  @Input() data: any
  @Input() title: any

  constructor() { }

  ngOnInit() {
    const data = this.data
    const svg = d3.select('svg')
    const title = this.title

    const margin = {top: 25, right: 10, bottom: 10, left: 20}
    const width = +document.querySelector('svg').clientWidth - margin.left - margin.right
    const height = +document.querySelector('svg').clientHeight - margin.top - margin.bottom

    svg.attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)

    const g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    const xScale = d3.scaleLinear()
      .domain([0, 1])
      .range([margin.left, width - margin.right])

    const yScale = d3.scaleLinear()
      .domain([0, 1])
      .range([height - margin.bottom, margin.top])

    g.append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
    g.append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale))

    g.append('g')
      .attr('stroke', '#000')
      .attr('stroke-opacity', 0.2)
      .selectAll('circle')
      .data(data)
      .enter().append('circle')
        .attr('cx', (d: any) => xScale(d.x))
        .attr('cy', (d: any) => yScale(d.y))
        .attr('r', 2.5)
        .style('fill', 'steelblue')
        .style('opacity', '0.8')
        .on('mouseover mousemove', function(d: any) {
          $(this).css('opacity', '1.0')
        })
        .on('mouseout', function(d: any) {
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
