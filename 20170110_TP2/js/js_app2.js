var audioElement = document.querySelector("video");
var textTrack = audioElement.textTracks[0];
textTrack.mode = 'hidden';
console.log(textTrack);
var data = document.getElementById("data");
var dataheader = document.getElementById("dataheader");
data.innerHTML = "Sous-titres ici !";
textTrack.oncuechange = function (){
    // "this" est un textTrack
    var cue = this.activeCues[0]; // on suppose qu’on a 1 seul index.
        if (!!cue) {
            dataheader.innerHTML = cue.startTime + "-" + cue.endTime + ": ";
            data.innerHTML = cue.text + "<br />";
        }
}