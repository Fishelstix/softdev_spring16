var pic1 = document.getElementById("inflate");

var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
c.setAttribute("cx", 250);
c.setAttribute("cy", 250);
c.setAttribute("r", 0);
c.setAttribute("fill","red");
c.setAttribute("stroke","black");

var infInterval;

var inflate = function inflate(){
    var isInf = 1;
    var go = function go(){
	radius = parseInt(c.getAttribute("r"));
        
	if(isInf){
            radius+=5;
            if(radius >= 250){isInf = 0;}
	}else{
            radius-=5;
	    if(radius <= 0){isInf = 1;}
        }
	
	c.setAttribute("r", radius);


	pic1.appendChild(c);
    }
    infInterval = window.setInterval(go, 16);
}

var pic2 = document.getElementById("dvd");

var d = document.createElementNS("http://www.w3.org/2000/svg","circle");
d.setAttribute("cx", 50);
d.setAttribute("cy", 50);
d.setAttribute("r", 50);
d.setAttribute("fill","blue");
d.setAttribute("stroke","black");

var dvdInterval;

var dvd = function dvd(){
    var isRight = 1;
    var isDown = 1;
    var go2 = function go2(){
        var dvdX = parseInt(d.getAttribute("cx"));
        var dvdY = parseInt(d.getAttribute("cy"));
        dvdX += 5*isRight;
        dvdY += 5*isDown;
        if(dvdX <= 50 || dvdX >= 550){isRight *= -1;}
        if(dvdY <= 50 || dvdY >= 450){isDown *= -1;}
        console.log(dvdX);
        d.setAttribute("cx", dvdX);
        d.setAttribute("cy", dvdY);
        
        pic2.appendChild(d);
    }
    dvdInterval = window.setInterval(go2, 16);
}

document.getElementById("infBut").addEventListener("click", inflate);
document.getElementById("dvdBut").addEventListener("click", dvd);
document.getElementById("stop").addEventListener("click", function(){
    window.clearInterval(infInterval);
    window.clearInterval(dvdInterval);
});
