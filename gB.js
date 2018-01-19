var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//forme general
ctx.beginPath();
ctx.moveTo(500,10);
ctx.lineTo(500,10);
ctx.lineTo(1000,10);
ctx.lineTo(1000,650);
ctx.lineTo(880,720);
ctx.lineTo(500,720);
ctx.lineTo(500,10);
ctx.lineWidth = 5;
ctx.fillStyle = "white";
ctx.strokeStyle = "black";
ctx.stroke();


//ecran
ctx.beginPath();
ctx.moveTo(540,40);
ctx.lineTo(960,40);
ctx.lineTo(960,350);
ctx.lineTo(540,350);
ctx.lineTo(540,37);
ctx.strokeStyle = "black";
ctx.stroke();

// +

ctx.beginPath();
ctx.moveTo(540,450);
ctx.lineTo(580,450);
ctx.lineTo(580,410);
ctx.lineTo(620,410);
ctx.lineTo(620,450);
ctx.lineTo(660,450);
ctx.lineTo(660,490);
ctx.lineTo(620,490);
ctx.lineTo(620,530);
ctx.lineTo(580,530);
ctx.lineTo(580,490);
ctx.lineTo(540,490);
ctx.lineTo(540,448);

ctx.strokeStyle = "black";
ctx.stroke();

// bouton a

ctx.beginPath();
ctx.arc(930, 450, 30, 0, Math.PI*2);
ctx.stroke();

// bouton b

ctx.beginPath();
ctx.arc(850, 500, 30, 0, Math.PI*2);
ctx.stroke();

//select
ctx.beginPath();
ctx.rotate(320*Math.PI/180);
ctx.scale(1, 0.5);
ctx.beginPath();
ctx.arc(100, 1700, 40, 0, 2 * Math.PI); 
ctx.stroke();