///<reference path="../d3/d3.d.ts" />
"use strict";

var dataset = [ 5, 10, 15, 20, 25 ];
	
function dataColor(d:number){ 
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
  .text(function(d) { return "Ha ha ha " + d; })
  .style("color", dataColor);	


