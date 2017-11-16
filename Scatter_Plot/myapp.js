var data= [
    {top:"200px", left:"50px"},
    { top: "100px", left: "300px" },
    {top:"90px", left:"400px"},
    { top: "250px", left: "150px" },
    {top:"300px", left:"80px"},
    { top: "150px", left: "100px" },
];

var div=document.getElementById('relative');


div.style.cssText="position: relative; width: 500px; height: 500px; border:3px solid #73AD21;";


for(var i=0;i<data.length;i++){
   var p = document.createElement("p");
   p.innerText=".";
    div.appendChild(p);
   
    p.style.cssText="position: absolute; font: 30px bold";
     p.style.top=data[i].top;
    p.style.left=data[i].left;
   
}
