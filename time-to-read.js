function readtimer() {
var section = document.querySelector("body").innerHTML.split(" ").length/230;
return section.toFixed(2);
}

var readTimeViewer = document.getElementsByClassName("time-to-read-view")[0];
var node = document.createTextNode("Total time: " + readtimer() + " minutes");
readTimeViewer.appendChild(node);
