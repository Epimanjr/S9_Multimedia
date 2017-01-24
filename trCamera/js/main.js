var videoInput = document.getElementById("inputVideo");
var canvasInput = document.getElementById("inputCanvas");
var canvasDebug = document.getElementById("debugCanvas");

var htracker = new headtrackr.Tracker({
  ui: true,
  debug: canvasDebug,
  calcAngles: true
});

htracker.init(videoInput, canvasInput);
htracker.start();

document.addEventListener('facetrackingEvent', function(event){
  var fov = htracker.getFOV;

  $(".cx").text(event.x);
  $(".cy").text(event.y);
  $(".ang").text(Math.floor(event.angle*180/Math.PI));
  $(".fov").text(fov);

});


navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia || 
                         navigator.mozGetUserMedia;

window.URL = window.URL || window.webkitURL;

var camvideo = document.getElementById('monitor');

	if (!navigator.getUserMedia) 
	{
		document.getElementById('errorMessage').innerHTML = 
			'Sorry. <code>navigator.getUserMedia()</code> is not available.';
	} else {
		navigator.getUserMedia({video: true}, gotStream, noStream);
	}

function gotStream(stream) 
{
	if (window.URL) 
	{   camvideo.src = window.URL.createObjectURL(stream);   } 
	else // Opera
	{   camvideo.src = stream;   }

	camvideo.onerror = function(e) 
	{   stream.stop();   };

	stream.onended = noStream;
}

function noStream(e) 
{
	var msg = 'No camera available.';
	if (e.code == 1) 
	{   msg = 'User denied access to use camera.';   }
	document.getElementById('errorMessage').textContent = msg;
}