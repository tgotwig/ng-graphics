import { Component, OnInit, AfterViewInit, Input } from '@angular/core'
declare const d3
declare const $
declare const tippy

@Component({
  selector: 'lib-bar-chart',
  template: `<svg />`,
  styles: ['svg { width: 100%; height: 100%; }']
})
export class NgBarChartComponent implements OnInit, AfterViewInit {
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
    const title = this.title
    const xlabel = this.xlabel
    const ylabel = this.ylabel
    const svg = d3.select('svg')

    const margin = {top: 40, right: 20, bottom: 50, left: 60}
    const width = +document.querySelector('svg').clientWidth - margin.left - margin.right
    const height = +document.querySelector('svg').clientHeight - margin.top - margin.bottom

    const g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    const xScale = d3.scaleBand()
      .rangeRound([0, width])
      .padding(0.1)
      .domain(data.map( (d) => d.key))

    const yScale = d3.scaleLinear()
      .rangeRound([height, 0])
      .domain([0, d3.max(data, (d) => d.value)])

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale))

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(yScale))

    g.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
        .attr('class', 'bar')
        .attr('x', (d) => xScale(d.key))
        .attr('y', (d) => yScale(d.value))
        .attr('width', xScale.bandwidth())
        .attr('height', (d) => height - yScale(d.value))
        .attr('title', (d) => `
          <div style="text-align: left;">
            Key: <b>${d.key}</b><br>
            Value: <b>${d.value}</b>
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

    if (xlabel) {
      g.append('text')
        .attr('transform',
              'translate(' + (width / 2) + ' ,' +
                              (height + margin.top) + ')')
        .style('text-anchor', 'middle')
        .text(xlabel)
    }

    if (ylabel) {
      g.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - margin.left)
        .attr('x', 0 - (height / 2))
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .text(ylabel)
    }

    if (title) {
      g.append('text')
        .attr('x', (width / 2))
        .attr('y', 0 - (margin.top / 2))
        .attr('text-anchor', 'middle')
        .text(title)
    }
  }

  ngAfterViewInit() {
    tippy('.bar', {
      content(reference) {
        const title = reference.getAttribute('title');
        reference.removeAttribute('title');
        return title;
      },
    });
  }
}
