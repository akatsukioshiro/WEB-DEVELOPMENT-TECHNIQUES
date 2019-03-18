

var innerloop=0,outerloop=0;
for(outerloop=0;outerloop<document.getElementsByTagName("oph_button_type_1").length;outerloop++)
{
var count=document.getElementsByTagName("oph_button_type_1")[outerloop].getAttribute("count");
var butnames=document.getElementsByTagName("oph_button_type_1")[outerloop].getAttribute("butnames");
var str=butnames.split("_");
for(innerloop=0;innerloop<count;innerloop++)
{
var x1=document.createElement("butts");
x1.className="but"+outerloop;
x1.innerHTML=str[innerloop];
document.getElementsByTagName("oph_button_type_1")[outerloop].appendChild(x1);
}
}