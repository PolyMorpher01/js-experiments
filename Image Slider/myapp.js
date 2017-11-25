var main = document.getElementById('main');
var imageContainer = document.getElementById('wrapper');
var btnPrevious = document.getElementById('btn1');
var btnNext = document.getElementById('btn2');
var select = document.getElementById('select');


var btn1 = document.getElementById("one");
var btn2 = document.getElementById("two");
var btn3 = document.getElementById("three");
var btn4 = document.getElementById("four");
var btn5 = document.getElementById("five");

main.style.cssText = " position : absolute; left:250px; top:50px; ";
imageContainer.style.cssText = " position : relative; float: left; width: 700px ; height: 485px; margin-bottom:50px ; ";
btnPrevious.style.cssText="position:relative;float:left;top:250px;right: 10px;";
btnNext.style.cssText="position:relative;float:left;top:250px;left: 90px;";
select.style.cssText = "position: relative; top:520px; left: 570px; ";


var showImageStyle = "position:absolute; max-width : 700px; max-height :500px; opacity:1; z-index:2; transition: opacity 1.0s ease-in-out;";
var hideImageStyle = "position:absolute; max-width : 700px; max-height :500px; opacity:0; z-index:1; transition: opacity 1.0s ease-in-out;";

var imageUl = document.createElement('ul');

imageUl.style.listStyle = "none";

imageContainer.appendChild(imageUl);


var images = [
    'img1.jpg',
    'img2.png',
    'img3.png',
    'img4.png',
    'img5.png'
];


loadImages();

btnNext.addEventListener('click',nextSlide);
btnPrevious.addEventListener('click',previousSlide);

btn1.addEventListener('click',showOne);
btn2.addEventListener('click',showTwo);
btn3.addEventListener('click',showThree);
btn4.addEventListener('click',showFour);
btn5.addEventListener('click',showFive);

//*************************************************************************




function loadImages(){

loadFirstImage();    
    
for (let i=1 ; i<images.length; i++){
    var imageList = document.createElement('li');
    let imageAdd = document.createElement('img');
    
    imageUl.appendChild(imageList);
    imageList.appendChild(imageAdd);
   
    imageAdd.src = images[i];
    imageAdd.style.cssText = hideImageStyle;
    imageAdd.setAttribute("class","slide");

}

}


function loadFirstImage(){
    var imageList = document.createElement('li');
    let imageAdd = document.createElement('img');
    
    imageUl.appendChild(imageList);
    imageList.appendChild(imageAdd);
    imageAdd.style.cssText = showImageStyle;
    imageAdd.src = images[0];
    imageAdd.setAttribute("class","slide");

}


var currentSlide = 0;
var newSlide;
var slides = document.querySelectorAll(".slide");

function nextSlide(){
    
    newSlide = (currentSlide+1) % images.length;
    slides[currentSlide].style.cssText = hideImageStyle;
    slides[newSlide].style.cssText = showImageStyle;
    
    currentSlide = newSlide;
    
}

function previousSlide(){
    
 
    newSlide = (Math.abs(currentSlide-1+images.length)) % images.length;
    slides[currentSlide].style.cssText = hideImageStyle;
    slides[newSlide].style.cssText = showImageStyle;
    
    currentSlide = newSlide;
}



function showOne(){
    
    
    slides[currentSlide].style.cssText = hideImageStyle;
    slides[0].style.cssText = showImageStyle;
    currentSlide = 0;
}
function showTwo(){
    
    slides[currentSlide].style.cssText = hideImageStyle;
    slides[1].style.cssText = showImageStyle;
    currentSlide = 1;
}
function showThree(){
    
    slides[currentSlide].style.cssText = hideImageStyle;
    slides[2].style.cssText = showImageStyle;
    currentSlide = 2;
}
function showFour(){
    
    slides[currentSlide].style.cssText = hideImageStyle;
    slides[3].style.cssText = showImageStyle;
    currentSlide = 3;
}
function showFive(){
    
    slides[currentSlide].style.cssText = hideImageStyle;
    slides[4].style.cssText = showImageStyle;
    currentSlide = 4;
}

