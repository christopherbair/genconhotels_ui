function showGenevieve() {
	var genevieve = document.getElementById("hiddenGenevieve");
	genevieve.classList.remove("d-none");
	genevieve.classList.add("d-block");
	// increase opacity until 1
	var o = genevieve.style.opacity;
	do {
		genevieve.style.opacity = o;
		o += 0.01;
	} while (o <= 1);
	// decrease opacity until 0
	o = genevieve.style.opacity;
	do {
		genevieve.style.opacity = o;
		o -= 0.05;
	} while (o >= 0);
	genevieve.classList.add("d-none");
	genevieve.classList.remove("d-block");
}
function doKonamiCode() {
	showGenevieve();
	return false;
}
var pKeys = [];
document.onkeydown = function(e) {
	if (pKeys.length > 10) {
		pKeys.shift();
	}
	pKeys.push(e.keyCode);
	if (pKeys.toString() === "38,38,40,40,37,39,37,39,66,65,32")
	{
		doKonamiCode();
	}
}
