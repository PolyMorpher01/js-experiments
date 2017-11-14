function callRandom(){
    var x = randomFunction();
    x+="px";
    //console.log(x);
    return x;
    function randomFunction(){

    return Math.floor(Math.random()*450+1);
    
}

}

var div= document.getElementById("relative");
div.style.cssText="position: relative; width: 500px; height: 500px; top: 500px; left:500px;border:3px solid #73AD21;";

for (var i=0;i<10;i++)
    {
        var p=document.createElement("p");
        p.innerText=".";
        div.appendChild(p);
        
        p.style.cssText="position: absolute; font: 30px bold";
        p.style.top=callRandom();
        p.style.left=callRandom();
    }