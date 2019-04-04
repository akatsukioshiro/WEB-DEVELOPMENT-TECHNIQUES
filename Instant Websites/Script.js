var x = document.getElementsByTagName("body")[0].childNodes;
var txt,fText,res;
for(var i = 0; i < x.length; i++) 
{
	if (x[i].nodeName === "#text") 
	{
        	fText = x[i].nodeValue;
	}
}
txt = fText.split(/\r?\n|\r/g);
for(var i = 0; i < x.length; i++) 
{
	if (x[i].nodeName === "#text") 
	{
       		x[i].parentNode.removeChild(x[i]);
    	}
}
document.body.style.margin="0";
var box=document.createElement("box");
box.style.height="100vh";
box.style.width="100vw";
box.style.display="block";
document.body.appendChild(box);
for(var i=0;i<txt.length;i++)
{
	if(txt[i]!=="")
	{
		var line=txt[i].split(" ");
		for(var j=0;j<line.length;j++)
		{
			alert(line[j]);
		}
		
	}
}