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
var rVel = 0;

var start = function start() {
    clear();
    radius = 1;
    rVel = 1;
    animation();
}

var animation = function animation() {
    radius = radius + rVel;
    if (radius<0 || radius > maxXY/2) {
	rVel = 0 - rVel;
	radius = radius + rVel;
    }
    clear();
    circle(radius);
    if(rVel != 0) {
        window.requestAnimationFrame(animation);
    }
}

var stop = function stop() {
    rVel = 0;
}

var img = document.getElementById("logo");
var dvdX = 0;
var dvdY = 0;
var dvdXVel = -4;
var dvdYVel = -4;
var dvd = function dvd() {
    clear();
    if(dvdX <= 0 || dvdX >= maxXY - 60){
        dvdXVel = 0 - dvdXVel;
    }
    if(dvdY <= 0 || dvdY >= maxXY - 40){
        dvdYVel = 0 - dvdYVel;
    }
    dvdX+=dvdXVel;
    dvdY+=dvdYVel;
    ctx.drawImage(img,dvdX,dvdY,60,40);
    window.requestAnimationFrame(dvd);
}


document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("DVD").addEventListener("click", dvd);
