var btn = document.getElementById('btn');
var tbl=document.getElementById('tbl');


function clicked(){
var row = document.createElement("tr");


tbl.appendChild(row);

for(let i=0;i<3;i++){
	  let data = document.createElement("td");
      row.appendChild(data);
      data.innerText=" hello ";
    }

}

btn.addEventListener('click',clicked);
