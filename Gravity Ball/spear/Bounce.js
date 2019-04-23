var x=[];
for(var cr=0;cr<11;cr++)
{
	if(document.getElementById("point"+cr)!==undefined)
	{	
		x[cr] = document.getElementById("point"+cr);
		x[cr].setAttribute("cx",100+20*cr);
	}
	
}
var i = 1;                     
var n=90;
var t="0";
var down=1.02;
var up=1.02;
var ht=90;
var rt=100;
function myLoop() 
{           
   	
if(t=="0"){for(var cr=0;cr<11;cr++){if(x[cr]!==undefined)x[cr].setAttribute("cy",n*=down);n-=1.75;}}          
else if(t=="1"){for(var cr=0;cr<11;cr++){if(x[cr]!==undefined)x[cr].setAttribute("cy",n/=up);n+=1.75;}}
if(n>=799){t="1";}
else if(n<=ht && n>=ht-10){t="0";}
}

setInterval(myLoop, 26);
    