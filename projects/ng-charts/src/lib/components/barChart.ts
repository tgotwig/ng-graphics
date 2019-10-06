import { Component, OnInit, Input } from '@angular/core'
declare const d3: any
declare const $: any

@Component({
  selector: 'lib-bar-chart',
  template: `<svg />`,
  styles: ['svg { width: 100%; height: 100%; }']
})
export class NgBarChartComponent implements OnInit {
  d3: any
  $: any
  @Input() data: any
  @Input() title: any
  @Input() xlabel: any
  @Input() ylabel: any

  constructor() { }

  ngOnInit() {
    const data = this.data
    const title = this.title
    const xlabel = this.xlabel
    const ylabel = this.ylabel
    const svg = d3.select('svg')

    const margin = {top: 40, right: 20, bottom: 50, left: 50}
    const width = +document.querySelector('svg').clientWidth - margin.left - margin.right
    const height = +document.querySelector('svg').clientHeight - margin.top - margin.bottom

    const x = d3.scaleBand().rangeRound([0, width]).padding(0.1)
    const y = d3.scaleLinear().rangeRound([height, 0])

    const g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    x.domain(data.map( (d: any) => d.key))
    y.domain([0, d3.max(data, (d: any) => d.value)])

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))

    if (xlabel) {
      g.append('text')
        .attr('transform',
              'translate(' + (width / 2) + ' ,' +
                              (height + margin.top) + ')')
        .style('text-anchor', 'middle')
        .text(xlabel)
    }

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y))

    if (ylabel) {
      g.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - margin.left)
        .attr('x', 0 - (height / 2))
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .text(ylabel)
    }

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
