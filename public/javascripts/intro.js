
var introDiv = document.createElement("div");
introDiv.className = "introDiv";

var globeImage = document.createElement("img");
globeImage.setAttribute("id", "introImg");
globeImage.src = "images/introLogo.png";
introDiv.appendChild(globeImage);

document.body.appendChild(introDiv);

document.getElementById("index").style.visibility = "hidden";

setTimeout(function(){
	document.getElementById("index").className = document.getElementById("index").className + " fadeIn";
		introDiv.style.display = "none";
}, 4000);

setTimeout(function(){
	introDiv.className = introDiv.className + " fadeOut";
}, 2500);




