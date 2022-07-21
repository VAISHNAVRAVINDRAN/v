const left_arrow = document.getElementById("left");
const right_arrow = document.getElementById("right");
var carousel_length = document.querySelector(".top-projects").children.length;
var i = 1;
var j=1;
const add = document.getElementById("add");
add.addEventListener("click", adding);
left_arrow.addEventListener("click", left_carousel);
right_arrow.addEventListener("click", right_carousel);
function left_carousel() {
console.log("Left Button Pressed\n"+i);
if(i<=carousel_length) {
if(i==0) {
i=1;
}
var n = ".top-projects :nth-child("+i+")";
const div = document.querySelector(n);
div.style.zIndex = 1;
console.log("Carousel Length : "+carousel_length,"\nValue Of i : "+i);
if(i==0) {
i=1;
}else {
i--;
}
}
}
function right_carousel() {
console.log("Right Button Pressed\n");
if(i<carousel_length) {
i++;
var n = ".top-projects :nth-child("+i+")";
const div = document.querySelector(n);
div.style.zIndex = carousel_length;
console.log("Carousel Length : "+carousel_length,"\nValue Of i : "+i);
}
}
function adding() {
var carousel_length = document.querySelector(".top-projects").children.length;
const div=document.createElement("div");
div.classList.add("hash-1");
if(carousel_length==1) {
div.style.zIndex=carousel_length;
div.setAttribute('id', 'hash-1-top');
var a=div.getAttribute('id');
console.log(div.style.zIndex,carousel_length,a);
}
else{
console.log("helo");
document.getElementById("hash-1-top").style.zIndex=carousel_length+1;
var s=div.style.zIndex=carousel_length-1;
console.log("created",s);
}
div.innerText=j++;
document.querySelector(".top-projects").appendChild(div);
}
