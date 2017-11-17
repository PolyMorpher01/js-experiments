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
div.style.cssText="position: relative; width: 500px; height: 500px; border:3px solid #73AD21;";

var data=[];

for (let i=0;i<10;i++){
    data[i] =  {top: callRandom(),left :callRandom() };

}

for (let i=0;i<10;i++)
    {
        var p=document.createElement("p");
        p.innerText=".";
        div.appendChild(p);
        p.setAttribute("name","pName");
        p.style.cssText="position: absolute; font: 30px bold";

        p.style.top=data[i].top;
        p.style.left=data[i].left;
    }


var list= document.getElementById("list");
var newP = document.getElementsByName("pName");



for(let i=0;i<newP.length;i++){

    newP[i].addEventListener('click',hide);

    function hide(){
        newP[i].style.visibility="hidden";
        let listElement= document.createElement("li");
        listElement.innerText = data[i].top + "," + data[i].left;
        list.appendChild(listElement);
    }

}