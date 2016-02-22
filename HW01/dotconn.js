var c = document.getElementById("playground");
var b = document.getElementById("clear");
var ctx = c.getContext("2d");
ctx.strokeStyle = "0000ff";
ctx.fillStyle = "0000ff";
var numDots = 0;
var lastMouseX;
var lastMouseY;

var clr = function clr(){
    ctx.clearRect(0,0,538,538);
    numDots = 0;
}

var dot = function dot(){
    var rect = c.getBoundingClientRect();
    var newMouseX = event.clientX - rect.left;
    var newMouseY = event.clientY - rect.top;
    ctx.beginPath();
    if(numDots){
	ctx.beginPath();
	ctx.moveTo(lastMouseX,lastMouseY);
	ctx.lineTo(newMouseX, newMouseY);
	ctx.closePath();
	ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(newMouseX,newMouseY,5,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    numDots = numDots+1;
    lastMouseX = newMouseX;
    lastMouseY = newMouseY;
}

c.addEventListener("click",dot);
b.addEventListener("click",clr);
