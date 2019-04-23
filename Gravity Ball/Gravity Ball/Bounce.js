var x = document.getElementsByTagName("circle")[0];
x.setAttribute("cx",100);

var i = 1;                     
var n=30;
var t="0";
var down=1.02;
var up=1.02;
var ht=30;
function myLoop() 
{           
   	
if(t=="0"){x.setAttribute("cy",n*=down);x.setAttribute("cx",100+2*Math.cos(n*=down));}          
else if(t=="1"){x.setAttribute("cy",n/=up);x.setAttribute("cx",100+5*Math.sin(n/=up));}
if(n>=799){t="1";}
else if(n<=ht){t="0";}
}

setInterval(myLoop, 10);
    