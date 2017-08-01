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

// creating random data for chars
var bardata = [];
for (var index = 0; index < 50; index++) {
  var randomNumber = Math.round(Math.random() * 100) ;

  bardata.push(randomNumber)
}


// setting up params for char bar
var height = 400,
  width = 600,
  barWidth = 46,
  barOffset = 5;
// style char

var tempColor;
var tempPadd;
var colors = d3.scale.linear()
  //mapping to the decima throughout the graph! 
  //that point color is scalable
  .domain([0, bardata.length * .33, bardata.length * .66, bardata.length])
  .range(['#B58929', '#C61C6F', '#268BD2', '#85992C'])

// setting up scale for the graph! 
var yScale = d3.scale.linear()
  .domain([0, d3.max(bardata)])
  .range([0, height]);
var xScale = d3.scale.ordinal()
  .domain(d3.range(0, bardata.length))
  .rangeBands([0, width])
// set tooltip
  var tooltip = d3.select('body').append('div')
              .style('position','absolute')
              .style('padding','0 10px')
              .style('background','white')
              .style('opacity',0)

// select chart
var myChart = d3.select('#chart')
  // add svg  
  .append("svg")
  // set width
  .attr('width', width)
  //set heigth
  .attr('height', height)
  // set background of svg
  .style('background', '#C9D7D6')
  // add rectangles
  .selectAll('rect')
  // use data from the array
  .data(bardata)
  // enter in the cvg and start appending bocks
  .enter().append('rect')
  // use color function to generate colors for charts
  .style('fill', (d, i) => {

    return colors(i)
  })
  // use ordinal scale to x to update  the width
  .attr('width', xScale.rangeBand())
  .attr('x', (d, i) => {
    return xScale(i)
  })
  // use u scale to be able to render as much as possible data
  // that will neve go upper then height of the svg
  .attr('height', 0)
  .attr('y', height)
  //index of array
  // ------SAME HERE NB
  .on('mouseover', function (d) {
    tempColor = this.style.fill;

    tooltip.transition()
     .style('opacity',.9)
     tooltip.html(d)
     .style('left', (d3.event.pageX - 35) + 'px' )
     .style('top', (d3.event.pageY) + 'px' )       
    d3.select(this)
      .style('opacity', .5)
      .style('fill', 'maroon')
  })
  .on('mouseout', function (d) {
    d3.select(this)
      .style('opacity', 1)
       .style('fill', tempColor)
  })

  // setting up to variable animate it 
myChart.transition()
    .attr('height', function(d){
      return yScale(d)
    })
    .attr('y', function(d){
      return height - yScale(d)
    })
    .delay(function(d,i){
      return i * 30;
    })
    //the time for animation
    .duratation(1000)
    // makes it bouncing just a little
    .ease('elastic')



