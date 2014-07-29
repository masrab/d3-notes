var diag = d3.svg.diagonal()

// source/target both expect objects with x,y property
diag.source({x:10 , y:10});
diag.target({x:200 , y:200});
diag.projection(
	function(d) {
		return [2*d.x, d.y];
	});


chart.append("path")
	.attr("d", diag)
	.attr("class", "link");