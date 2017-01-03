var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(10,240);
ctx.lineTo(190,240);
ctx.lineTo(160,10);
//ctx.lineTo(40,10); Etape 3
ctx.moveTo(40,10);
ctx.lineTo(10,240);
ctx.stroke();

// Ajout des yeux (étape 2)
ctx.beginPath();
ctx.arc(74,94,26,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(126,94,26,0,2*Math.PI);
ctx.stroke();

// Ajout de la ligne rouge (étape 2)
/*ctx.beginPath();
ctx.moveTo(0,120);
ctx.lineTo(200,120);
ctx.strokeStyle = '#ff0000';
ctx.stroke();*/

// Ajout des oreilles (étape 3)
ctx.beginPath();
ctx.moveTo(40,10);
ctx.lineTo(65,60);
ctx.moveTo(160,10);
ctx.lineTo(135,60);
ctx.moveTo(65,60);
ctx.quadraticCurveTo(100,50,135,60);
ctx.strokeStyle = '#000000';
ctx.stroke();

// Ajout des pates (étape 4)
ctx.beginPath();
//gauche
ctx.moveTo(0,240);
ctx.quadraticCurveTo(30,180,60,240);
ctx.lineTo(0,240);
//centre gauche
ctx.moveTo(60,245);
ctx.quadraticCurveTo(80,200,100,245);
ctx.lineTo(60,245);
//centre droite
ctx.moveTo(100,245);
ctx.quadraticCurveTo(120,200,140,245);
ctx.lineTo(100,245);
//droite
ctx.moveTo(140,240);
ctx.quadraticCurveTo(170,180,200,240);
ctx.lineTo(140,240);
ctx.stroke();

// Etape 5 : Oeil gauche
ctx.beginPath();
ctx.arc(85,95,4,0,2*Math.PI);
ctx.fill();
ctx.stroke();

// Etape 5 :  Oeil droit
ctx.beginPath();
ctx.arc(115,95,4,0,2*Math.PI);
ctx.fill();
ctx.stroke();

// Etape 5 : Nez + Boucle
ctx.beginPath();
ctx.moveTo(100,120);
ctx.lineTo(100,140);
ctx.lineTo(60,134);
ctx.moveTo(100,140);
ctx.lineTo(140,134);
ctx.stroke();

// Etape 5 : Moustaches
ctx.beginPath();
ctx.arc(100,118,2,0,2*Math.PI);
ctx.moveTo(100,118);
ctx.lineTo(10,135);
ctx.moveTo(100,118);
ctx.lineTo(10,130);
ctx.moveTo(100,118);
ctx.lineTo(190,130);
ctx.moveTo(100,118);
ctx.lineTo(190,135);
ctx.stroke();