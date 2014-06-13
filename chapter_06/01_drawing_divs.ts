///<reference path="../d3/d3.d.ts" />
"use strict";

var dataset = [ 5, 10, 15, 20, 25 ];
			
d3.select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar");
	


