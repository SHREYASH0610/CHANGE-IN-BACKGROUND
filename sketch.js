
var r = 0;
var g = 50;
var b=255;
function setup(){
createCanvas(1200,400);
}
function draw(){
r = map(mouseX,0,1200,30,105);
g = map(mouseX,0,1200,170,35); 
b = map(mouseX,0,1200,70,155); 
background(r,g,b);
ellipse(mouseX,200,50,50);
}