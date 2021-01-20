const PLAYER_MOVE_SPEED = 6.0;

function miraClass() {
	this.x = 75;
	this.y = 75;
	this.myMiraPic; // which picture to use
	this.name = "Mira 1";
	this.yellowKeysHeld = 0;
	this.blueKeysHeld = 0;
	this.greenKeysHeld = 0;
	this.redKeysHeld = 0;
	this.livesHeld = 3;
	
	this.keyHeld_North = false;
	this.keyHeld_South = false;
	this.keyHeld_West = false;
	this.keyHeld_East = false;

	this.controlKeyUp;
	this.controlKeyRight;
	this.controlKeyDown;
	this.controlKeyLeft;

	


	this.setupInput = function(upKey, rightKey, downKey, leftKey) {
		this.controlKeyUp = upKey;
		this.controlKeyRight = rightKey;
		this.controlKeyDown = downKey;
		this.controlKeyLeft = leftKey;
	}
	
	this.reset = function(whichImage, miraName) {
		this.name = miraName;
		this.myMiraPic = whichImage;
		this.yellowKeysHeld = 0;
		this.blueKeysHeld = 0;
		this.greenKeysHeld = 0;
		this.redKeysHeld = 0;
		this.currLevel = currLevel;
		
		this.updateYellowKeyReadout();
		this.updateGreenKeyReadout();
		this.updateBlueKeyReadout();
		this.updateRedKeyReadout();
		this.updateLifeReadout();
		this.updateCurrentLevelReadout();

		for(var eachRow=0;eachRow<WORLD_ROWS;eachRow++) {
			for(var eachCol=0;eachCol<WORLD_COLS;eachCol++) {
				var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
				if(worldGrid[arrayIndex] == TILE_PLAYERSTART) {
					worldGrid[arrayIndex] = TILE_GROUND;
					this.x = eachCol * WORLD_W + WORLD_W/2;
					this.y = eachRow * WORLD_H + WORLD_H/2;
					return;
				} // end of player start if
			} // end of col for
		} // end of row for
		console.log("NO PLAYER START FOUND!");
	} // end of miraReset func



	this.updateYellowKeyReadout = function() {
		document.getElementById("yellowKeyText").innerHTML = this.yellowKeysHeld;
	}
	this.updateGreenKeyReadout = function() {
		document.getElementById("greenKeyText").innerHTML = this.greenKeysHeld;
	}
	this.updateBlueKeyReadout = function() {
		document.getElementById("blueKeyText").innerHTML = this.blueKeysHeld;
	}
	this.updateRedKeyReadout = function() {
		document.getElementById("redKeyText").innerHTML = this.redKeysHeld;
	}

	this.updateLifeReadout = function() {
		document.getElementById("livesText").innerHTML = this.livesHeld;
	}

	this.updateCurrentLevelReadout = function() {
		document.getElementById("currentLevel").innerHTML = this.currLevel;
	}
	

	this.move = function() {
		var nextX = this.x;
		var nextY = this.y;

		if(this.keyHeld_North || upClick) {
			nextY -= PLAYER_MOVE_SPEED;
			this.myMiraPic = miraUp;
		}
		if(this.keyHeld_East || rightClick) {
			nextX += PLAYER_MOVE_SPEED;
			this.myMiraPic = miraRight;
		}
		if(this.keyHeld_South || downClick) {
			nextY += PLAYER_MOVE_SPEED;
			this.myMiraPic = miraPic;
		}
		if(this.keyHeld_West || leftClick) {
			nextX -= PLAYER_MOVE_SPEED;
			this.myMiraPic = miraLeft;
		}

	

		var walkIntoTileIndex = getTileTypeAtPixelCoord(nextX, nextY);
		var walkIntoTileType = TILE_WALL;

		if(walkIntoTileIndex != undefined) {
			walkIntoTileType = worldGrid[walkIntoTileIndex];
		}
		
		switch(walkIntoTileType) {
			case TILE_GROUND:
			case TILE_GRASS:
			case TILE_SAND:
			case TILE_PLANK_X:
			case TILE_PLANK_Y:
			case TILE_DOOR_OPEN:
			case TILE_STAIRS:
			case TILE_STOOL:
			case TILE_CARPET_1:
			case TILE_CARPET_2:
			case TILE_CARPET_3:
			case TILE_CARPET_4:
			case TILE_CARPET_5:
			case TILE_CARPET_6:
			case TILE_CARPET_7:
			case TILE_CARPET_8:
			case TILE_CARPET_9:
			case TILE_BED_UPPER:	
			case TILE_BED_LOWER:
				this.x = nextX;
				this.y = nextY;
				break;
			case TILE_GOAL_GROUND:
			case TILE_GOAL_GRASS:
			case TILE_GOAL_STAIRS:
			case TILE_GOAL_STAIRS_DOWN:
			case TILE_GOAL_STAIRS_UP:	
				console.log(this.name + " WINS!");
				loadLevel(worlds[levelSwitcher.next().value]);
				break;
			case TILE_DOOR_YELLOW:
				if(this.yellowKeysHeld > 0) {
					this.yellowKeysHeld--; // one less key
					this.updateYellowKeyReadout();
					worldGrid[walkIntoTileIndex] = TILE_DOOR_OPEN;
				} else {
					document.getElementById("yellowDoorMessage").style.display = "block";
				}
				break;
			case TILE_DOOR_BLUE:
				if(this.blueKeysHeld > 0) {
					this.blueKeysHeld--; // one less key
					this.updateBlueKeyReadout();
					worldGrid[walkIntoTileIndex] = TILE_DOOR_OPEN;
				} else {
					document.getElementById("blueDoorMessage").style.display = "block";
				}
				break;
			case TILE_DOOR_PURPLE:
				if(this.blueKeysHeld > 0) {
					this.blueKeysHeld--; // one less key
					this.updateBlueKeyReadout();
					worldGrid[walkIntoTileIndex] = TILE_DOOR_OPEN;
				} else if(this.yellowKeysHeld > 0) {
					this.yellowKeysHeld--; // one less key
					this.updateYellowKeyReadout();
					worldGrid[walkIntoTileIndex] = TILE_DOOR_OPEN;
				} else {
					document.getElementById("purpleDoorMessage").style.display = "block";
				}
				break;
			case TILE_THIEF:
				if(this.yellowKeysHeld > 0) {
					this.yellowKeysHeld--; // one less key
					this.updateYellowKeyReadout();
					worldGrid[walkIntoTileIndex] = TILE_GROUND;
				} else if(this.blueKeysHeld > 0) {
					this.blueKeysHeld--; // one less key
					this.updateBlueKeyReadout();
					worldGrid[walkIntoTileIndex] = TILE_GROUND;
				} else if(this.greenKeysHeld > 0) {
					this.greenKeysHeld--; // one less key
					this.updateGreenKeyReadout();
					worldGrid[walkIntoTileIndex] = TILE_GROUND;
				} else if(this.redKeysHeld > 0) {
					this.redKeysHeld--; // one less key
					this.updateRedKeyReadout();
					worldGrid[walkIntoTileIndex] = TILE_GROUND;
				}   else {
					document.getElementById("thiefMessage").style.display = "block";
				}
				break;
			case TILE_NPC_GREEN:
				if(this.greenKeysHeld > 0) {
					this.greenKeysHeld--; // one less key
					this.updateGreenKeyReadout();
					worldGrid[walkIntoTileIndex] = TILE_GROUND;
				} else {
					document.getElementById("greenNpcMessage").style.display = "block";
				}
				break;
			case TILE_NPC_RED:
				if(this.redKeysHeld > 0) {
					this.redKeysHeld--; // one less key
					this.updateRedKeyReadout();
					worldGrid[walkIntoTileIndex] = TILE_GROUND;
				} else {
					document.getElementById("redNpcMessage").style.display = "block";
				}
				break;
			case TILE_NPC_PURPLE:
				if(this.redKeysHeld > 0) {
					this.redKeysHeld--; // one less key
					this.updateRedKeyReadout();
					worldGrid[walkIntoTileIndex] = TILE_GROUND;
				} else if(this.greenKeysHeld > 0) {
					this.greenKeysHeld--; // one less key
					this.updateGreenKeyReadout();
					worldGrid[walkIntoTileIndex] = TILE_GROUND;
				} else {
					document.getElementById("purpleNpcMessage").style.display = "block";
				}
				break;
			case TILE_ENEMY_GREEN:
				if(this.greenKeysHeld > 0) {
					this.greenKeysHeld--; // one less key
					this.updateGreenKeyReadout();
					worldGrid[walkIntoTileIndex] = TILE_GROUND;
				} else if(this.livesHeld > 1) {
					document.getElementById("lifeLostMessage").style.display = "block";
					this.livesHeld--; // one less life
					this.updateLifeReadout();
					loadLevel(worlds[currLevel]);
					console.log("Mira lost a life! :(");
				} else {
					this.livesHeld = 3;
					this.updateLifeReadout();
					currLevel = 0;
					levelSwitcher = levelSwitcherGenerator();
					loadLevel(worlds[levelSwitcher.next().value]);
					console.log("Mira has to restart! :(");
				}
				break;
			case TILE_ENEMY_RED:
				if(this.redKeysHeld > 0) {
					this.redKeysHeld--; // one less key
					this.updateRedKeyReadout();
					worldGrid[walkIntoTileIndex] = TILE_GROUND;
				} else if(this.livesHeld > 1) {
					document.getElementById("lifeLostMessage").style.display = "block";
					this.livesHeld--; // one less life
					this.updateLifeReadout();
					loadLevel(worlds[currLevel]);
					console.log("Mira lost a life! :(");
				} else {
					this.livesHeld = 3;
					this.updateLifeReadout();
					currLevel = 0;
					levelSwitcher = levelSwitcherGenerator();
					loadLevel(worlds[levelSwitcher.next().value]);
					console.log("Mira has to restart! :(");
				}
				break;
			case TILE_ENEMY_PURPLE:
				if(this.redKeysHeld > 0) {
					this.redKeysHeld--; // one less key
					this.updateRedKeyReadout();
					worldGrid[walkIntoTileIndex] = TILE_GROUND;
				} else if(this.greenKeysHeld > 0) {
					this.greenKeysHeld--; // one less key
					this.updateGreenKeyReadout();
					worldGrid[walkIntoTileIndex] = TILE_GROUND;
				} else if(this.livesHeld > 1) {
					document.getElementById("lifeLostMessage").style.display = "block";
					this.livesHeld--; // one less life
					this.updateLifeReadout();
					loadLevel(worlds[currLevel]);
					console.log("Mira lost a life! :(");
				} else {
					this.livesHeld = 3;
					this.updateLifeReadout();
					currLevel = 0;
					levelSwitcher = levelSwitcherGenerator();
					loadLevel(worlds[levelSwitcher.next().value]);
					console.log("Mira has to restart! :(");
				}
				break;
			case TILE_KEY_YELLOW:
				this.yellowKeysHeld++; // one more key
				this.updateYellowKeyReadout();
				worldGrid[walkIntoTileIndex] = TILE_GROUND;
				break;
			case TILE_KEY_BLUE:
				this.blueKeysHeld++; // one more key
				this.updateBlueKeyReadout();
				worldGrid[walkIntoTileIndex] = TILE_GROUND;
				break;
			case TILE_KEY_GREEN:
				this.greenKeysHeld++; // one more key
				this.updateGreenKeyReadout();
				worldGrid[walkIntoTileIndex] = TILE_GROUND;
				break;
			case TILE_KEY_RED:
				this.redKeysHeld++; // one more key
				this.updateRedKeyReadout();
				worldGrid[walkIntoTileIndex] = TILE_GROUND;
				break;
			case TILE_POT_KEY:
				document.getElementById("keyYellowMessage").style.display = "block";
				this.yellowKeysHeld++; // one more key
				this.updateYellowKeyReadout();
				worldGrid[walkIntoTileIndex] = TILE_POT;
				break;
			case TILE_CHEST_YELLOW:
				document.getElementById("keyYellowMessage").style.display = "block";
				this.yellowKeysHeld++; // one more key
				this.updateYellowKeyReadout();
				worldGrid[walkIntoTileIndex] = TILE_CHEST_OPEN;
				break;
			case TILE_CHEST_BLUE:
				document.getElementById("keyBlueMessage").style.display = "block";
				this.blueKeysHeld++; // one more key
				this.updateBlueKeyReadout();
				worldGrid[walkIntoTileIndex] = TILE_CHEST_OPEN;
				break;
			case TILE_CHEST_GREEN:
				document.getElementById("keyGreenMessage").style.display = "block";
				this.greenKeysHeld++; // one more key
				this.updateGreenKeyReadout();
				worldGrid[walkIntoTileIndex] = TILE_CHEST_OPEN;
				break;
			case TILE_CHEST_RED:
				document.getElementById("keyRedMessage").style.display = "block";
				this.redKeysHeld++; // one more key
				this.updateRedKeyReadout();
				worldGrid[walkIntoTileIndex] = TILE_CHEST_OPEN;
				break;
			case TILE_POISON:
				if(this.livesHeld > 1) {
					document.getElementById("lifeLostMessage").style.display = "block";
					this.livesHeld--; // one less life
					this.updateLifeReadout();
					loadLevel(worlds[currLevel]);
					console.log("Mira lost a life! :(");
				} else {
					this.livesHeld = 3;
					this.updateLifeReadout();
					currLevel = 0;
					levelSwitcher = levelSwitcherGenerator();
					loadLevel(worlds[levelSwitcher.next().value]);
					console.log("Mira has to restart! :(");
				}
				break;
			case TILE_LIFE:
				document.getElementById("extraLifeMessage").style.display = "block";
				this.livesHeld++; // one more life
				this.updateLifeReadout();
				worldGrid[walkIntoTileIndex] = TILE_GROUND;
				break;
			case TILE_WALL:
				default:
				break;
		}
	}

	this.draw = function() {
		drawBitmapCenteredWithRotation(this.myMiraPic, this.x,this.y, 0);
	}
}