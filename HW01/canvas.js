/*
Max Fishelson
SoftDev Period 3
*/

//set up reference to the canvas in index.html
var c=document.getElementById("ftb2maga");
var ctx=c.getContext("2d");

console.log("yo");

//change color
ctx.strokeStyle="ff0000";

//begins the path
ctx.beginPath();

var i;
for(i=10; i<539; i+=10){
    //moves path to given coordinate
    ctx.moveTo(0,i);

    //sets up a line from the current point in the path to the given coordinates
    ctx.lineTo(538,i);
}

ctx.moveTo(269,359);
ctx.lineTo(0,538);
ctx.lineTo(269,0);
ctx.lineTo(538,538);

//sets up a line in the current point in the path to the last moveTo point
ctx.closePath();

//draws all lines from previous moveTo, lineTo pairs and closePath up until last beginPath
ctx.stroke();

//change color of fill tool
ctx.fillStyle="00ff00";

//colors in last completed path
ctx.fill();

ctx.beginPath();

ctx.strokeStyle="0000ff";

//sets up an arc: paramaters are (center x-cor, center y-cor, radius, starting angle radians, ending angle radians)
ctx.arc(269,269,50,0,2*Math.PI);

//also draws arcs
ctx.stroke();

//sets up text font and size
ctx.font="30px arial";

//also changes font color
ctx.fillStyle="000000";

//places text block at specified coordinates
ctx.fillText("(.o.')",240,280);
