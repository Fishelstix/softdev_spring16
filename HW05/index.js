var states = ["Iowa", "New Hampshire", "South Carolina", "Nevada", "Alabama", "Alaska", "Arkansas", "Georgia", "Massachusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Colorado", "Kansas", "Kentucky", "Louisiana", "Maine", "Puerto Rico", "Hawaii", "Idaho", "Michigan", "Mississippi", "Virgin Islands", "Wyoming", "Guam", "District of Columbia", "Florida", "Illinois", "Missouri", "North Carolina", "Northern Marianas", "Ohio", "American Samoa", "Arizona", "Utah", "North Dakota", "Wisconsin", "New York", "Connecticut", "Delaware", "Maryland", "Pennsylvania", "Rhode Island", "Indiana", "Nebraska", "West Virginia", "Oregon", "Washington", "California", "Montana", "New Jersey", "New Mexico", "South Dakota"];
var pledged = ["30", "23", "50", "30", "50", "28", "40", "76", "42", "38", "43", "58", "155", "16", "49", "37", "40", "46", "46", "23", "23", "19", "32", "59", "40", "9", "29", "9", "19", "99", "69", "52", "72", "9", "66"];
var unpledged = ["9", "58", "40", "28", "42", "95", "28", "16", "38", "71", "19", "57", "36", "34", "28", "44", "172", "27", "51", "24", "29"];

var i=0;
d3.select(".chart")
  .selectAll("div")
    .data(pledged)
  .enter().append("div")
    .style("width",function(d) { return d*10+"px"; })
    .text(function(d) { i++; return states[i-1]+" "+d; });

d3.selectAll(".chart")
  .selectAll("div")
    .data(unpledged)
  .enter().append("div")
    .style("width",function(d) { return d*10+"px"; })
    .text(function(d) { i++; return states[i-1]+" "+d; });
