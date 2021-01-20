const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

var mouseX = 0;
var mouseY = 0;

function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos);

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);

	blueMira.setupInput(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW);
} 

function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;

	// cheat / hack to test mira in any position
	/*miraX = mouseX;
	miraY = mouseY;
	miraSpeedX = 4;
	miraSpeedY = -4;*/
}

function keySet(keyEvent, setTo) {
	if(keyEvent.keyCode == blueMira.controlKeyLeft) {
		blueMira.keyHeld_West = setTo;
	}
	if(keyEvent.keyCode == blueMira.controlKeyRight) {
		blueMira.keyHeld_East = setTo;
	}
	if(keyEvent.keyCode == blueMira.controlKeyUp) {
		blueMira.keyHeld_North = setTo;
	}
	if(keyEvent.keyCode == blueMira.controlKeyDown) {
		blueMira.keyHeld_South = setTo;
	}
}

function keyPressed(evt) {
	// console.log("Key pressed: "+evt.keyCode);
	keySet(evt, true);

	evt.preventDefault();
}

function keyReleased(evt) {
	// console.log("Key pressed: "+evt.keyCode);
	keySet(evt, false);
}

var upClick = false;
var leftClick = false;
var rightClick = false;
var downClick = false;

const upBtn = document.getElementById('upBtn');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const downBtn = document.getElementById('downBtn');

/* listeners for touch */ 

upBtn.addEventListener("touchstart", upPressed);
upBtn.addEventListener("touchend", upUnPressed);

leftBtn.addEventListener("touchstart", leftPressed);
leftBtn.addEventListener("touchend", leftUnPressed);

rightBtn.addEventListener("touchstart", rightPressed);
rightBtn.addEventListener("touchend", rightUnPressed);

downBtn.addEventListener("touchstart", downPressed);
downBtn.addEventListener("touchend", downUnPressed);

/* listeners for mouse */ 

upBtn.addEventListener("mousedown", upPressed);
upBtn.addEventListener("mouseup", upUnPressed);

leftBtn.addEventListener("mousedown", leftPressed);
leftBtn.addEventListener("mouseup", leftUnPressed);

rightBtn.addEventListener("mousedown", rightPressed);
rightBtn.addEventListener("mouseup", rightUnPressed);

downBtn.addEventListener("mousedown", downPressed);
downBtn.addEventListener("mouseup", downUnPressed);

function upPressed() {
	upClick = true;
}

function upUnPressed() {
	upClick = false;
}

function leftPressed() {
	leftClick = true;
}

function leftUnPressed() {
	leftClick = false;
}

function rightPressed() {
	rightClick = true;
}

function rightUnPressed() {
	rightClick = false;
}

function downPressed() {
	downClick = true;
}

function downUnPressed() {
	downClick = false;
}

