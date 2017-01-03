var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(10,240);
ctx.lineTo(190,240);
ctx.lineTo(160,10);
ctx.lineTo(40,10);
ctx.lineTo(10,240);
ctx.stroke();

// Ajout des yeux
ctx.beginPath();
ctx.arc(74,94,26,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(126,94,26,0,2*Math.PI);
ctx.stroke();

// Ajout de la ligne rouge (étape 2)
ctx.beginPath();
ctx.moveTo(0,120);
ctx.lineTo(200,120);
ctx.strokeStyle = '#ff0000';
ctx.stroke();
