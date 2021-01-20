

function startGame() {
   event.preventDefault()
   console.log('startGame button')
   document.getElementById("introScreen").style.display = "none";
}

function A1L1CloseMsg() {
   event.preventDefault()
   console.log('closed lv1 msg')
   document.getElementById("A1L1Screen").style.display = "none";
}

function A1L2CloseMsg() {
   event.preventDefault()
   console.log('A1L2CloseMsg')
   document.getElementById("A1L2Screen").style.display = "none";
}
function A1L3CloseMsg() {
   event.preventDefault()
   console.log('A1L3CloseMsg')
   document.getElementById("A1L3Screen").style.display = "none";
}
function A1L4CloseMsg() {
   event.preventDefault()
   console.log('A1L4CloseMsg')
   document.getElementById("A1L4Screen").style.display = "none";
}
function A1L5CloseMsg() {
   event.preventDefault()
   console.log('closed lv3 msg')
   document.getElementById("A1L5Screen").style.display = "none";
}
function A2L1CloseMsg() {
   event.preventDefault()
   console.log('A2L1CloseMsg')
   document.getElementById("A2L1Screen").style.display = "none";
}
function A2L2CloseMsg() {
   event.preventDefault()
   console.log('A2L1CloseMsg')
   document.getElementById("A2L2Screen").style.display = "none";
}
function A2L3CloseMsg() {
   event.preventDefault()
   console.log('A2L3CloseMsg')
   document.getElementById("A2L3Screen").style.display = "none";
}

function endingContinue() {
   event.preventDefault()
   console.log('A2L3CloseMsg')
   document.getElementById("endScreen1").style.display = "none";
   document.getElementById("endScreen2").style.display = "block"; 
}


function restartGame() {
   event.preventDefault()
   console.log('restart Button')
   document.getElementById("endScreen2").style.display = "none";
   document.getElementById("introScreen").style.display = "block";
   currLevel = 0; 
   levelSwitcher = levelSwitcherGenerator();
   loadLevel(worlds[levelSwitcher.next().value]);
}

function restartLevel() {
   event.preventDefault()
   if(blueMira.livesHeld > 1) {
      console.log('restartLevel Button')
      document.getElementById("lifeLostMessage").style.display = "block";
      loadLevel(worlds[currLevel]);
      blueMira.livesHeld--;
      blueMira.updateLifeReadout();
   } else {
      document.getElementById("lifeLostMessage").style.display = "block";
      blueMira.livesHeld = 3;
      blueMira.updateLifeReadout();
      restartGame();
   }
}

/*document.addEventListener("keydown", (event) => {
   if (event.keyCode === 83) {
      startGame()
    } 
});*/

function closeYellowKeyMsg() {
   event.preventDefault()
   document.getElementById("keyYellowMessage").style.display = "none";
}

function closeBlueKeyMsg() {
   event.preventDefault()
   document.getElementById("keyBlueMessage").style.display = "none";
}

function closeGreenKeyMsg() {
   event.preventDefault()
   document.getElementById("keyGreenMessage").style.display = "none";
}

function closeRedKeyMsg() {
   event.preventDefault()
   document.getElementById("keyRedMessage").style.display = "none";
}

function closeGreenNpcMsg() {
   event.preventDefault()
   document.getElementById("greenNpcMessage").style.display = "none";
}
function closeRedNpcMsg() {
   event.preventDefault()
   document.getElementById("redNpcMessage").style.display = "none";
}
function closePurpleNpcMsg() {
   event.preventDefault()
   document.getElementById("purpleNpcMessage").style.display = "none";
}

function closeThiefMsg() {
   event.preventDefault()
   document.getElementById("thiefMessage").style.display = "none";
}

function closeYellowDoorMsg() {
   event.preventDefault()
   document.getElementById("yellowDoorMessage").style.display = "none";
}

function closeBlueDoorMsg() {
   event.preventDefault()
   document.getElementById("blueDoorMessage").style.display = "none";
}

function closePurpleDoorMsg() {
   event.preventDefault()
   document.getElementById("purpleDoorMessage").style.display = "none";
}


function closeLostLifeMsg() {
   event.preventDefault()
   document.getElementById("lifeLostMessage").style.display = "none";
}

function closeExtraLifeMsg() {
   event.preventDefault()
   document.getElementById("extraLifeMessage").style.display = "none";
}
