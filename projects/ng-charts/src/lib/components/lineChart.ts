
import { Component, OnInit, AfterViewInit, Input } from '@angular/core'
declare const d3
declare const $
declare const tippy


@Component({
  selector: 'lib-line-chart',
  template: `<svg />`,
  styles: ['svg { width: 100%; height: 100%; }']
})
export class NgLineChartComponent implements OnInit, AfterViewInit {
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

    const keyMin = Math.min.apply(Math, data.map((d) => d.key))
    const keyMax = Math.max.apply(Math, data.map((d) => d.key))
    const valueMin = Math.min.apply(Math, data.map((d) => d.value))
    const valueMax = Math.max.apply(Math, data.map((d) => d.value))

    const xScale = d3.scaleLinear()
      .domain([keyMin, keyMax])
      .range([0, width])

    const yScale = d3.scaleLinear()
      .domain([valueMin, valueMax])
      .range([height, 0])

    const line = d3.line()
      .x((d) => xScale(d.key))
      .y((d) => yScale(d.value))
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
        .attr('cx', (d, i) => xScale(d.key))
        .attr('cy', (d) => yScale(d.value))
        .attr('r', 5)
        .attr('title', (d) => `
          <div style="text-align: left;">
            Key: <b>${d.key.toFixed(3)}</b><br>
            Value: <b>${d.value.toFixed(3)}</b>
          </div>
        `)
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
