const wMode = document.getElementById("modeLightDark");
const wModeLabel = document.getElementById("modeLightDarkLabel");
const bElem = document.getElementById("body");
let dCookie = decodeURIComponent(document.cookie).split(";");
function getCookie(dString){
	for (let i = 0; i < dCookie.length; i++) {
		let str = dCookie[i];
		if (str.length > 0) {
			str = str.trim();
		}
		if (str.indexOf(dString + "=" === 0)) {
			return str.substring(dString.length + 1, str.length);
		}
	}
	return false;
}
function updateCookie(dString,dValue){
	let saveValue = true;
	// expire the old cookie
	document.cookie = "a=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
	// create the new cookie
	let d = new Date();
	d.setTime(d.getTime() + (366 * 24 * 60 * 60 * 1000));
	let newCookie = "";
	for (let i = 0; i < dCookie.length; i++) {
		let str = dCookie[i];
		if (str.length > 0) {
			str = str.trim();
		}
		if (str.indexOf(dString + "=" === 0)) {
			if (saveValue === true) {
				newCookie = newCookie + dString + "=" + dValue + ";";
			}
			saveValue = false;
		} else if (str.indexOf("expires=" !== 0) && str.indexOf("path=" !== 0)) {
			newCookie = newCookie + str + ";";
		}
	}
	if (saveValue === true) {
		newCookie = newCookie + dString + "=" + dValue + ";";
	}
	newCookie = newCookie + "expires=" + d.toUTCString() + ";path=/;";
	document.cookie = newCookie;
	dCookie = decodeURIComponent(document.cookie).split(";");
}
function changeMode(){
	newMode = wMode.checked;
	if (newMode == true) {
		bElem.classList.remove("light-mode");
		bElem.classList.add("dark-mode");
		wModeLabel.innerHTML = "Dark Mode";
		updateCookie("mode","dark-mode")
	} else {
		bElem.classList.remove("dark-mode");
		bElem.classList.add("light-mode");
		wModeLabel.innerHTML = "Light Mode";
		updateCookie("mode","light-mode")
	}
}
window.addEventListener("load", function() {
	if (getCookie("mode") == "dark-mode") {
		wMode.checked = true;
		bElem.classList.remove("light-mode");
		bElem.classList.add("dark-mode");
		wModeLabel.innerHTML = "Dark Mode";
	} else {
		wMode.checked = false;
		bElem.classList.remove("dark-mode");
		bElem.classList.add("light-mode");
		wModeLabel.innerHTML = "Light Mode";
	}
});
