

var width = 960,
  height = 500;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

var data = genRandVec(5, 400);
// The initial display.
update(data);

setInterval(function() {
  var maxCount = 100;  // max count of randomly generated points
  var maxXY = 400;  // max value of either x or y value of center of points
  var data = genRandVec(Math.floor(Math.random() * maxCount), maxXY);

  update(data);
}, 1500);


function update(data){

  var circ = svg.selectAll("circle").data(data);
// circ.length is the number of elements currently on the page
console.log(circ.enter().length);


// If data.length == circ.length --> update selected elements
  circ.attr("class", "update")
    .attr("cx", function(d){return d.x})
    .attr("cy", function(d){return d.y})
    .attr("r", 5);

// If data.length > circ.length --> add elements for additional data
// (there are new data with no elements on page)
  circ.enter().append("circle")
    .attr("class", "enter")
    .attr("cx", function(d){return d.x})
    .attr("cy", function(d){return d.y})
    .transition().duration(1000).attr("r", 5);
    
  
// If data.length < circ.length --> remove/update orphan elements from the page 
 
  // circ.exit().attr("class", "exit")
  circ.exit().transition().duration(1000).attr("r", "0").remove();

}

function genRandVec(len, max){
  // Return: array of data point objects
var data = [];
for (var i = 0; i < len; i++) {
  data.push({x:Math.floor(Math.random()*max), y:Math.floor(Math.random()*max)});

}
return data
}
/*
function genRandVec(len, max){

var data = {x:[], y:[]};
for (var i = 0; i < len; i++) {
  data.x.push(Math.floor(Math.random()*max));
  data.y.push(Math.floor(Math.random()*max));
}
return data
}*/