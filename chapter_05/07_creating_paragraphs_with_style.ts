///<reference path="../d3/d3.d.ts" />
"use strict";

var dataset = [ 5, 10, 15, 20, 25 ];
			
d3.select("body").selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text(function(d) { return "Jolly well count up to " + d; })
  .style("color", "red");
			

