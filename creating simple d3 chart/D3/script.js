// d3.select('#chart')
//   .append('svg')
//   .attr('width', 600)
//   .attr('height', 400)
//   .style('background', "#93A1A1")
//   .append("rect")
//   .attr('x', 200)
//   .attr('y', 100)
//   .attr('height', 200)
//   .attr('width', 200)
//   .style('fill', 'yellow')

// d3.select('svg')
//   .append('circle')
//   .attr('cx', 300)
//   .attr('cy', 200)
//   .attr('r', 50)
//   .style('fill', 'red')

var bardata = [20,30,45,15,100,49,62];
var height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;
 var yScale = d3.scale.linear()
              .domain([0,d3.max(bardata)])
              .range([0,height])


d3.select('#chart')
  .append("svg")
  .attr('width',width)
  .attr('height',height)
  .style('background','#C9D7D6')
  .selectAll('rect')
    .data(bardata)
    .enter().append('rect')
      .style('fill','#C61C6F')
      .attr('width',barWidth)
      .attr('height',(d)=>{
          return yScale(d)
      })
        //index of array
        .attr('x', (d,i)=>{
          return i * (barWidth + barOffset)
        })
        .attr('y', (d)=>{
          return height -  yScale(d);
        })


