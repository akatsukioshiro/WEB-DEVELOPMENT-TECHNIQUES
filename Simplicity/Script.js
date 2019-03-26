//var create=document.querySelectorAll('[create]').tagName;
var x = document.getElementsByTagName("create")[0].childNodes;

var txt,fText,res;
for(var i = 0; i < x.length; i++) {
    txt = txt + x[i].nodeName + "<br>";
	if (x[i].nodeName === "#text") {
        fText = x[i].nodeValue;
    }
  }
fText = fText.replace(/\r?\n|\r/g, " ");
res =fText.split(" ");
for(var i=0;i<res.length;i++) txt=txt+res[i]+"<br>"
document.body.innerHTML = txt;
//document.body.innerHTML = txt+"<br>"+x.length;
//alert(res[0]);