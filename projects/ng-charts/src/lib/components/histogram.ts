import { Component, OnInit, AfterViewInit, Input } from '@angular/core'
declare const d3
declare const $
declare const tippy

@Component({
  selector: 'lib-histogram',
  template: `<svg />`,
  styles: ['svg { width: 100%; height: 100%; }']
})
export class NgHistogramComponent implements OnInit, AfterViewInit {
  d3
  $
  tippy
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
      .range([height, 0])

    const xAxisCall = d3.axisBottom(x)
    const yAxisCall = d3.axisLeft(y)

    // Create our main child inside the parent, this is the canvas and its a bit smaller than the entire SVG
    const g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    const xAxis = g.append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(0, ' + height + ')')

    if (xlabel) {
      g.append('text')
        .attr('transform',
              'translate(' + (width / 2) + ' ,' +
                              (height + margin.top) + ')')
        .style('text-anchor', 'middle')
        .text(xlabel)
    }

    const yAxis = g.append('g')
      .attr('class', 'y-axis')
      .attr('transform', 'translate(5,0)')

    if (ylabel) {
      g.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - margin.left)
        .attr('x', 0 - (height / 2))
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .text(ylabel)
    }

    const bars = g.append('g')
      .selectAll('rect')
      .data(bins)

    bars.enter().append('rect')
      .attr('x', d => x(d.x0) + 1)
      .attr('width', d => Math.max(0, x(d.x1) - x(d.x0) - 1))
      .attr('fill', 'steelblue')
      .attr('fill-opacity', 1)
      .attr('y', d => y(d.length))
      .attr('height', d => y(0) - y(d.length))
      .attr('title', (d) => `
        <div style="text-align: left;">
          Value: <b>${d.length}</b>
        </div>
      `)
      .style('fill', 'steelblue')
      .style('opacity', '0.8')
      .on('mouseover mousemove', function(d) {
        $(this).css('opacity', '1.0')
      })
      .on('mouseout', function(d) {
        $(this).css('opacity', '0.8')
      })

    xAxis.call(xAxisCall)
    yAxis.call(yAxisCall)

    if (title) {
      g.append('text')
        .attr('x', (width / 2))
        .attr('y', 0 - (margin.top / 2))
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
