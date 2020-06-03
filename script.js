let values = ["😒", "😊", "😂", "😍", "😜", "😎", "😑", "🤑"];

function getRandomVal() {
	return values[Math.floor(Math.random() * (values.length - 1))];
}

let v1 = document.getElementById("value1");
let v2 = document.getElementById("value2");
let v3 = document.getElementById("value3");

let newSpeed = 5;
var loop, iterations, count;
let inpSpeed = document.getElementById("inpSpeed");
function speedChange(newSpeed) {
	count = 0;
	iterations = Math.floor(Math.random() * 50) + 50;
	console.log("itr: ", iterations);
	document.documentElement.style.setProperty("--iterations", iterations + 20);
	if (loop) clearInterval(loop);
	loop = setInterval(function () {
		// console.log(1000 / speed);
		count++;
		v1.innerHTML = getRandomVal();
		v2.innerHTML = getRandomVal();
		v3.innerHTML = getRandomVal();
		if (count == iterations - 15) {
			document.documentElement.style.setProperty("--speed", 1);
			console.log("Slow Down");
		}

		if (count == iterations) {
			clearInterval(loop);
			document.documentElement.style.setProperty("--iterations", 0);
			console.log("Values static");
			btnAgain.hidden = false;
			alert(score());
		}
	}, 1000 / newSpeed);
}

function score() {
	let e1 = v1.innerHTML;
	let e2 = v2.innerHTML;
	let e3 = v3.innerHTML;
	if (e1 == e2 && e2 == e3) {
		return values[3] + "Lottery 1000$" + values[7];
	} else if (e1 == e2 || e2 == e3) {
		return values[3] + "Winnings 100$" + values[5];
	} else {
		return values[4] + "Better Luck Next Time" + values[6];
	}
}

inpSpeed.onchange = function (event) {
	//document.documentElement is root of CSS
	newSpeed = event.target.value;
};

let btnPlay = document.getElementById("btnPlay");
let btnAgain = document.getElementById("btnAgain");
btnPlay.onclick = function () {
	inpSpeed.disabled = true;
	btnPlay.hidden = true;
	document.documentElement.style.setProperty("--speed", newSpeed);
	speedChange(newSpeed);
};

// reset speed
window.onload = function () {
	inpSpeed.value = "5";
};

btnAgain.onclick = function () {
	location.reload();
};
