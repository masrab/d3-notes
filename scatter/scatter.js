
var margin = {top: 20, right: 20, bottom: 20, left: 40},
width = 500 ,
height = 300;

var x = d3.scale.linear()
.range([0, width]);

var y = d3.scale.linear()
.range([height, 0]);


var xAxis = d3.svg.axis()
.scale(x)
.orient("bottom");

var yAxis = d3.svg.axis()
.scale(y)
.orient("left");

var chart = d3.select(".chart")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data_scatter.csv", type, function(error, data){

  x.domain([d3.min(data, function(d) { return d.x; }),
    d3.max(data, function(d) { return d.x; })]);

  y.domain([d3.min(data, function(d) { return d.y; }),
    d3.max(data, function(d) { return d.y; })]);

  chart.selectAll(".points")
  .data(data)
  .enter()
  .append("circle")
  .attr("class", "points")
  .attr("cx", function(d){ return x(d.x); })
  .attr("cy", function(d){ return y(d.y); })
  .attr("r", 3);

  chart.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);


  chart.append("g")
  .attr("class", "y axis")
  .call(yAxis);

})


function type(d){
  d.x = +d.x;
  d.y = +d.y;
  return d;
}
