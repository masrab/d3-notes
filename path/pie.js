// chart.append("rect")
// 	.attr("width", 100)
// 	.attr("height", 100)

// var dataset = d3.range(6);
var dataset = [10, 120, 50, 80]

var pie = d3.layout.pie();

var color = d3.scale.category10();

// create the arc path generator
var w = 300;
var h = 300;

var outerRadius = w / 2;
var innerRadius = 50;

var arc = d3.svg.arc()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius);

// Notes: passing data object to arc()
// arc(pie(dataset)[1]) returns path data
// arc.centroid(pie(dataset)[1]) returns centroid of path

// use pie layout to transform data and bind to groups
var arcs = chart.selectAll(".arc")
	.data(pie(dataset))
	.enter()
  .append("g")
  .attr("class", "arc")
  .attr("transform", "translate(" + outerRadius + ", " + outerRadius + ")");

// append path
arcs.append("path")
	.attr("d", arc)
	.attr("stroke", "#ADADAD")
	.attr("fill", function(d, i) { return color(d.value)})

// add circle to centroid
arcs.append("circle")
	.attr("r", 2)
	.attr("fill", "#ADADAD")
	.attr("transform", function(d){ 
	return "translate(" +  arc.centroid(d) + ")"
	});


arcs.append("text")
	.attr("transform", function(d){ 
	return "translate(" +  arc.centroid(d) + ")"
	})
	.attr("text-anchor", "middle")
	.text(function(d, i) { return (d.value)})
	;

