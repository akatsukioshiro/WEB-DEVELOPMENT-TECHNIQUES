var x = document.getElementsByTagName("circle")[0];
x.setAttribute("cx",100);

var i = 1;                     
var n=1;
var t="0";
function myLoop() 
{           
   	setTimeout(
	function () 
	{    i++;
      		if (i < 225) 
		{            
         		myLoop();
			n*=1.03; 
			x.setAttribute("cy",n);          
      		//console.log(n);
			console.log("A");
			if(n<225)t="0";
		}
		else if (i>0 && n>85 && t=="0") 
		{            
         		myLoop();
			n/=1.003; 
			x.setAttribute("cy",n);          
      		console.log("B");if(n<104){t="1";i=1;}
			//console.log(i);
		}
		
		
		                        
   	}, 5);
	

}

myLoop();
    