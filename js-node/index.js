let div = document.getElementById("box");
let delay = document.getElementById("delay");
let scale = document.getElementById("scale");
let growBtn = document.getElementById("grow");
let shrinkBtn = document.getElementById("shrink");
let roundBtn = document.getElementById("round");

function reset() {
	setTimeout(() => {
		div.style.borderRadius = "0px";
		div.style.width = "50px";
		div.style.height = "50px";
	}, delay.value * 2000);
}

function grow() {
	setTimeout(() => {
		div.style.width = `${50 * scale.value}px`;
		div.style.height = `${50 * scale.value}px`;
	}, delay.value * 1000);
	reset();
}
function shrink() {
	setTimeout(() => {
		div.style.width = `${50 / scale.value}px`;
		div.style.height = `${50 / scale.value}px`;
	}, delay.value * 1000);
	reset();
}
function round() {
	setTimeout(() => {
		div.style.borderRadius = `${scale.value}px`;
	}, delay.value * 1000);
	reset();
}

growBtn.addEventListener("click", grow);
shrinkBtn.addEventListener("click", shrink);
roundBtn.addEventListener("click", round);
