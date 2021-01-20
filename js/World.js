const WORLD_W = 32;
const WORLD_H = 32;
const WORLD_GAP = 2;
const WORLD_COLS = 17;
const WORLD_ROWS = 16;

var worldGrid = [];
const worldstest = [testLevel, A2L3, A3L1, endLevel];
const worlds = [testLevel, A1L1, A1L2, A1L3, A1L4, A1L5, A2L1, A2L2, A2L3, A3L1, endLevel];



const TILE_BLACK = 0;
const TILE_GROUND = 1;
const TILE_WALL = 2;
const TILE_UPPER_WALL = 3;
const TILE_GRASS = 4;
const TILE_WATER = 5;
const TILE_POT = 6;
const TILE_TREE = 7;
const TILE_SAND = 8;

const TILE_TREE_UPPER = 9;
const TILE_POT_KEY = 150;

const TILE_LIFE = 10;
const TILE_KEY_YELLOW = 11;
const TILE_KEY_BLUE = 12;
const TILE_KEY_GREEN = 13;
const TILE_KEY_RED = 14;

const TILE_DOOR_OPEN = 20;
const TILE_DOOR_YELLOW = 21;
const TILE_DOOR_BLUE = 22;
const TILE_DOOR_PURPLE = 23;

const TILE_NPC_GREEN = 24;
const TILE_NPC_RED = 25;
const TILE_NPC_PURPLE = 26;

const TILE_ENEMY_GREEN = 27;
const TILE_ENEMY_RED = 28;
const TILE_ENEMY_PURPLE = 29;

const TILE_THIEF = 30;

const TILE_YELLOWKEYSLEFT = 31;
const TILE_BLUEKEYSLEFT = 32;
const TILE_GREENKEYSLEFT = 33;
const TILE_REDKEYSLEFT = 34;
const TILE_LVL = 35;
const TILE_LIVESLEFT = 36;

const TILE_POISON = 41;

const TILE_PLANK_X = 51;
const TILE_PLANK_Y = 52;
const TILE_STAIRS = 53;


const TILE_PLAYERSTART = 90;
const TILE_GOAL_GROUND = 91;
const TILE_GOAL_GRASS = 92;
const TILE_GOAL_STAIRS = 93;
const TILE_GOAL_STAIRS_DOWN = 94;
const TILE_GOAL_STAIRS_UP = 95;

const TILE_BED_UPPER = 101; 
const TILE_BED_LOWER = 102;
const TILE_BOOK_UPPER = 103; 
const TILE_BOOK_LOWER = 104;
const TILE_WINDOW_UPPER = 105; 
const TILE_WINDOW_LOWER = 106;
const TILE_TABLE_L = 107;
const TILE_TABLE_M = 108;
const TILE_TABLE_R = 109;

const TILE_STOOL = 110;
const TILE_WINDOW = 111;
const TILE_OVEN = 112;
const TILE_FURNACE = 113;
const TILE_LOGS = 114;
const TILE_KITCHEN_TOOLS = 115;

const TILE_CARPET_1 = 121;
const TILE_CARPET_2 = 122;
const TILE_CARPET_3 = 123;
const TILE_CARPET_4 = 124;
const TILE_CARPET_5 = 125;
const TILE_CARPET_6 = 126;
const TILE_CARPET_7 = 127;
const TILE_CARPET_8 = 128;
const TILE_CARPET_9 = 129;

const TILE_ORGAN_1 = 131;
const TILE_ORGAN_2 = 132;
const TILE_ORGAN_3 = 133;
const TILE_ORGAN_4 = 134;

const TILE_CHEST_OPEN = 140;
const TILE_CHEST_YELLOW = 141;
const TILE_CHEST_BLUE = 142;
const TILE_CHEST_GREEN = 143;
const TILE_CHEST_RED = 144;
const TILE_CHEST_1 = 145;
const TILE_CHEST_2 = 146;
const TILE_CHEST_3 = 147;
const TILE_CHEST_4 = 148;
const TILE_CHEST_5 = 149;


var currLevel = 0;

function* levelSwitcherGenerator() {
	let i = 0;
	while(true) {
		i++;
		currLevel = i;
		
		switch(i) {
			case 2:document.getElementById("A1L2Screen").style.display = "block";
			break;
			case 3:document.getElementById("A1L3Screen").style.display = "block";
			break;
			case 4:document.getElementById("A1L4Screen").style.display = "block";
			break;
			case 5:document.getElementById("A1L5Screen").style.display = "block";
			break;
			case 6:document.getElementById("A2L1Screen").style.display = "block";
			break;
			case 7:document.getElementById("A2L2Screen").style.display = "block";
			break;
			case 8:document.getElementById("A2L3Screen").style.display = "block";
			break;
			case 9:
				document.getElementById("endScreen1").style.display = "block";
			break;
		}
		console.log(i);
		yield i;
	}
}
var levelSwitcher = levelSwitcherGenerator();


function returnTileTypeAtColRow(col, row) {
	if(col >= 0 && col < WORLD_COLS &&
		row >= 0 && row < WORLD_ROWS) {
		 var worldIndexUnderCoord = rowColToArrayIndex(col, row);
		 return worldGrid[worldIndexUnderCoord];
	} else {
		return WORLD_WALL;
	}
}

function getTileTypeAtPixelCoord(atX, atY) {
	var miraWorldCol = Math.floor(atX / WORLD_W);
	var miraWorldRow = Math.floor(atY / WORLD_H);
	var worldIndexUnderMira = rowColToArrayIndex(miraWorldCol, miraWorldRow);

	if(miraWorldCol >= 0 && miraWorldCol < WORLD_COLS &&
		miraWorldRow >= 0 && miraWorldRow < WORLD_ROWS) {
			return worldIndexUnderMira;
	} // end of valid col and row

	return undefined;
} // end of MiraWorldHandling func

function rowColToArrayIndex(col, row) {
	return col + WORLD_COLS * row;
}

function groundTransparency(checkTileType) {
	return (
			checkTileType == TILE_NPC_GREEN ||
			checkTileType == TILE_NPC_RED ||
			checkTileType == TILE_NPC_PURPLE ||
			checkTileType == TILE_ENEMY_GREEN ||
			checkTileType == TILE_ENEMY_RED ||
			checkTileType == TILE_ENEMY_PURPLE ||
			checkTileType == TILE_THIEF ||
			checkTileType == TILE_STOOL 
			);
}

function grassTransparency(checkTileType) {
	return (checkTileType == TILE_TREE ||
		checkTileType == TILE_TREE_UPPER ||
		checkTileType == TILE_POISON
			);
}

function blackTransparency(checkTileType) {
	return (checkTileType == TILE_KEY_YELLOW ||
		checkTileType == TILE_KEY_BLUE ||
		checkTileType == TILE_KEY_GREEN ||
		checkTileType == TILE_KEY_RED ||
		checkTileType == TILE_LIFE ||
		checkTileType == TILE_LOGS
			);
}

function drawWorld() {

	var arrayIndex = 0;
	var drawTileX = 0;
	var drawTileY = 0;
	for(var eachRow=0;eachRow<WORLD_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<WORLD_COLS;eachCol++) {

			var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
			var tileKindHere = worldGrid[arrayIndex];
			var useImg = worldPics[tileKindHere];
			if( groundTransparency(tileKindHere) ) {
				canvasContext.drawImage(worldPics[TILE_GROUND],drawTileX,drawTileY);
			}
			if( grassTransparency(tileKindHere) ) {
				canvasContext.drawImage(worldPics[TILE_GRASS],drawTileX,drawTileY);
			}

			if( blackTransparency(tileKindHere) ) {
				canvasContext.drawImage(worldPics[TILE_BLACK],drawTileX,drawTileY);
			}
			canvasContext.drawImage(useImg,drawTileX,drawTileY);
			drawTileX += WORLD_W;
			arrayIndex++;
		} // end of for each col
		drawTileY += WORLD_H;
		drawTileX = 0;
	} // end of for each row

} // end of drawWorld func
