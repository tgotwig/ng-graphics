import { Component, OnInit, AfterViewInit, Input } from '@angular/core'
declare const d3
declare const $
declare const tippy

@Component({
  selector: 'lib-pie-chart',
  template: `<svg />`,
  styles: ['svg { width: 100%; height: 100%; }']
})
export class NgPieChartComponent implements OnInit, AfterViewInit {
  d3
  $
  tippy
  @Input() data
  @Input() title

  constructor() { }

  ngOnInit() {
    const data = this.data
    const svg = d3.select('svg')
    const title = this.title

    const margin = 20
    const width = +document.querySelector('svg').clientWidth - margin * 2
    const height = +document.querySelector('svg').clientHeight - margin * 2

    svg.attr('width', width + margin * 2)
      .attr('height', height + margin * 2)

    const g = svg.append('g')
      .attr('transform', 'translate(' + (margin + width / 2) + ',' + (margin + height / 2) + ')')

    const color = d3.scaleOrdinal(d3.schemePaired)

    const pie = d3.pie().value((d) => d.value)

    const path = d3.arc()
      .outerRadius(width / 2 - margin)
      .innerRadius(0)

    const arc = g.selectAll()
      .data(pie(data))
      .enter()
      .append('g')

    arc.append('path')
      .attr('d', path)
      .attr('fill', (d) => color(d.data.value))
      .attr('title', (d) => `
        <div style="text-align: left;">
          key: <b>${d.data.key}</b><br>
          value: <b>${d.data.value}</b>
        </div>
      `)
      .style('opacity', '0.8')
      .on('mouseover mousemove', function(d) {
        $(this).css('opacity', '1.0')
      })
      .on('mouseout', function(d) {
        $(this).css('opacity', '0.8')
      })

    if (title) {
      g.append('text')
        .attr('x', 0)
        .attr('y', 0 - height / 2 - margin + 16)
        .attr('text-anchor', 'middle')
        .text(title)
    }
  }

  ngAfterViewInit() {
    tippy('[title]', {
      content(reference) {
        const title = reference.getAttribute('title');
        reference.removeAttribute('title');
        return title;
      },
    });
  }
}
