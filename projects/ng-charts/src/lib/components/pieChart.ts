import { Component, OnInit, Input } from '@angular/core'
declare const d3: any
declare const $: any

@Component({
  selector: 'lib-pie-chart',
  template: `<svg />`,
  styles: ['svg { width: 100%; height: 100%; }']
})
export class NgPieChartComponent implements OnInit {
  d3: any
  $: any
  @Input() data: any

  constructor() { }

  ngOnInit() {
    const data = this.data
    const svg = d3.select('svg')

    const radius = 150

    const g = svg.append('g')
      .attr('transform', 'translate(' + radius + ',' + radius + ')')

    const color = d3.scaleOrdinal(d3.schemePaired)

    const pie = d3.pie().value((d: any) => d.percentage)

    const path = d3.arc()
      .outerRadius(radius)
      .innerRadius(0)

    const arc = g.selectAll()
      .data(pie(data))
      .enter()
      .append('g')

    arc.append('path')
      .attr('d', path)
      .attr('fill', (d: any) => color(d.data.percentage))
      .style('opacity', '0.8')
      .on('mouseover mousemove', function(d: any) {
        $(this).css('opacity', '1.0')
      })
      .on('mouseout', function(d: any) {
        $(this).css('opacity', '0.8')
      })

    return svg.node()
  }
}
