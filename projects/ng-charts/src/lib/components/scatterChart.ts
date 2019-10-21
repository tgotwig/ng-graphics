import { Component, OnInit, AfterViewInit, Input } from '@angular/core'
declare const d3
declare const $
declare const tippy

@Component({
  selector: 'lib-scatter-chart',
  template: `<svg />`,
  styles: ['svg { width: 100%; height: 100%; }']
})
export class NgScatterChartComponent implements OnInit, AfterViewInit {
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

    const margin = {top: 25, right: 10, bottom: 30, left: 30}
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

    if (xlabel) {
      g.append('text')
        .attr('transform',
              'translate(' + (width / 2) + ' ,' +
                              (height + margin.top) + ')')
        .style('text-anchor', 'middle')
        .text(xlabel)
    }

    g.append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
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

    g.append('g')
      .attr('stroke', '#000')
      .attr('stroke-opacity', 0.2)
      .selectAll('circle')
      .data(data)
      .enter().append('circle')
        .attr('cx', (d) => xScale(d.key))
        .attr('cy', (d) => yScale(d.value))
        .attr('r', 2.5)
        .attr('title', (d) => `
          <div style="text-align: left;">
            Key: <b>${d.key.toFixed(3)}</b><br>
            Value: <b>${d.value.toFixed(3)}</b>
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
