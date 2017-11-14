var clicked = document.getElementById("div1");
var colors= ["red", "blue", "green", "yellow"];
var i=0;
clicked.onclick= function(){
    
    clicked.style.background=colors[i];
    i=i+1;
    if(i===4)
    {i-=4;}
}
