///<reference path="../d3/d3.d.ts" />
"use strict";

var dataset = [ 5, 10, 15, 20, 25 ];
	
function valColor(d){ 
  if (d % 10 === 0) {	//Threshold of 15
	return "red";
  } else {
    return "blue";
  }
}

d3.select("body")
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text(function(d) { return "Jolly well count up to " + d; })
  .style("color", valColor);	

