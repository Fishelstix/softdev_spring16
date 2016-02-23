var maxXY = 538;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var clear = function clear() {
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.clearRect(0,0,maxXY,maxXY);
    ctx.strokeRect(0,0,maxXY,maxXY);
}

var circle = function circle(radius) {
    ctx.fillStyle = "#ff0000";
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.arc(maxXY/2, maxXY/2, radius, 0, 2*Math.PI)
    ctx.fill();
}

var radius = 1;
var rVel = 1;
var animation = function animation() {
    radius = radius + rVel;
    if (Math.abs(maxXY/4 - radius) > maxXY/4) {
	rVel = 0 - rVel;
	radius = radius + rVel;
    }
    clear();
    circle(radius);
    window.requestAnimationFrame(animation);
}

var stop = function stop() {
    radius = radius + rVel;
    if (Math.abs(maxXY/4 - radius) > maxXY/4) {
	rVel = 0 - rVel;
	radius = radius + rVel;
    }
    clear();
    circle(radius);
    window.requestAnimationFrame(animation);
}

document.getElementById("start").addEventListener("click", animation);
document.getElementById("stop").addEventListener("click", stop);
