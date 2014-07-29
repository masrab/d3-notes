var margin = {top:30, right:30, bottom:30, left:30};

var width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

chart = d3.select(".chart")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")



