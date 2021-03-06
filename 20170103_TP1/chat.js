/*
MIAGE M2 SID
Semestre 9 - Multimédia
TP1 - Canvas

Auteurs:
  - Maxime BLAISE
  - Antoine NOSAL
*/

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Ajout de la ligne rouge (étape 2)
/*ctx.beginPath();
ctx.moveTo(0,120);
ctx.lineTo(200,120);
ctx.strokeStyle = '#ff0000';
ctx.stroke();*/

// Ajout du corps (étape 1)
ctx.moveTo(10,240);
ctx.lineTo(190,240);
ctx.lineTo(160,10);
ctx.lineTo(135,60);
ctx.quadraticCurveTo(100,50,65,60);
ctx.lineTo(40,10);
//ctx.lineTo(40,10); (nécessaire pour l'étape 3)
ctx.moveTo(40,10);
ctx.lineTo(10,240);
ctx.strokeStyle = '#000000';
ctx.stroke();
ctx.fillStyle="lightgray";
ctx.fill();

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
ctx.fillStyle="lightgray";
ctx.fill();

// Ajout des yeux (étape 2)
ctx.beginPath();
ctx.arc(74,94,26,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle="white";
ctx.fill();
ctx.beginPath();
ctx.arc(126,94,26,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle="white";
ctx.fill();

// Ajout de l'oeil gauche (étape 5)
ctx.beginPath();
ctx.arc(85,95,4,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle="black";
ctx.fill();

// Ajout de l'oeil droit (étape 5)
ctx.beginPath();
ctx.arc(115,95,4,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle="black";
ctx.fill();

// Ajout du nez et de la bouche (étape 5)
ctx.beginPath();
ctx.moveTo(100,120);
ctx.lineTo(100,140);
ctx.lineTo(60,134);
ctx.moveTo(100,140);
ctx.lineTo(140,134);
ctx.stroke();

// Ajout des moustaches gauche (étape 5)
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
ctx.fillStyle="lightgray";
ctx.fill();

// Ajout des effets sur les pattes (étape 5)
ctx.beginPath();
ctx.moveTo(20,240);
ctx.lineTo(20,230);
ctx.moveTo(27,240);
ctx.lineTo(27,230);

ctx.moveTo(180,240);
ctx.lineTo(180,230);
ctx.moveTo(173,240);
ctx.lineTo(173,230);

ctx.moveTo(73,245);
ctx.lineTo(73,235);
ctx.moveTo(80,245);
ctx.lineTo(80,235);

ctx.moveTo(123,245);
ctx.lineTo(123,235);
ctx.moveTo(130,245);
ctx.lineTo(130,235);
ctx.strokeStyle = '#000000';
ctx.stroke();
