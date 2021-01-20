var miraPic = document.createElement("img");
var miraLeft = document.createElement("img");
var miraRight = document.createElement("img");
var miraUp = document.createElement("img");

var miraPic2 = document.createElement("img");
var miraLeft2 = document.createElement("img");
var miraRight2 = document.createElement("img");
var miraUp2 = document.createElement("img");

var worldPics = [];

var picsToLoad = 0; // set automatically based on imageList in loadImages()

function countLoadedImagesAndLaunchIfReady() {
	picsToLoad--;
	//console.log(picsToLoad);
	if(picsToLoad == 0) {
		imageLoadingDoneSoStartGame();
	}
}

function beginLoadingImage(imgVar, fileName) {
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = "images/"+fileName;
}

function loadImageForWorldCode(worldCode, fileName) {
	worldPics[worldCode] = document.createElement("img");
	beginLoadingImage(worldPics[worldCode], fileName);
}

function loadImages() {
	var imageList = [
		{varName: miraPic, theFile: "mira.png"},
		{varName: miraLeft, theFile: "mira_left.png"},
		{varName: miraRight, theFile: "mira_right.png"},
		{varName: miraUp, theFile: "mira_up.png"},

		{varName: miraPic2, theFile: "mira2.png"},
		{varName: miraLeft2, theFile: "mira_left2.png"},
		{varName: miraRight2, theFile: "mira_right2.png"},
		{varName: miraUp2, theFile: "mira_up2.png"},

		{worldType: TILE_BLACK, theFile: "/world/black.png"},
		{worldType: TILE_GROUND, theFile: "/world/ground.png"},
		{worldType: TILE_WALL, theFile: "/world/wall.png"},
		{worldType: TILE_UPPER_WALL, theFile: "/world/upper_wall.png"},
		{worldType: TILE_GRASS, theFile: "/world/grass.png"},
		{worldType: TILE_WATER, theFile: "/world/water.png"},
		{worldType: TILE_POT, theFile: "/world/pot.png"},
		{worldType: TILE_TREE, theFile: "/world/tree.png"},
		{worldType: TILE_SAND, theFile: "/world/sand.png"},
		{worldType: TILE_TREE_UPPER, theFile: "/world/tree_upper.png"},
		
		{worldType: TILE_LIFE, theFile: "extra_life.png"},
		{worldType: TILE_KEY_YELLOW, theFile: "yellow_key.png"},
		{worldType: TILE_KEY_BLUE, theFile: "blue_key.png"},
		{worldType: TILE_KEY_RED, theFile: "red_key.png"},
		{worldType: TILE_KEY_GREEN, theFile: "green_key.png"},

		{worldType: TILE_DOOR_OPEN, theFile: "open_door.png"},
		{worldType: TILE_DOOR_YELLOW, theFile: "yellow_door.png"},
		{worldType: TILE_DOOR_BLUE, theFile: "blue_door.png"},
		{worldType: TILE_DOOR_PURPLE, theFile: "purple_door.png"},

		{worldType: TILE_NPC_GREEN, theFile: "green_npc.png"},
		{worldType: TILE_NPC_RED, theFile: "red_npc.png"},
		{worldType: TILE_NPC_PURPLE, theFile: "purple_npc.png"},
		{worldType: TILE_ENEMY_GREEN, theFile: "green_enemy.png"},
		{worldType: TILE_ENEMY_RED, theFile: "red_enemy.png"},
		{worldType: TILE_ENEMY_PURPLE, theFile: "purple_enemy.png"},
		{worldType: TILE_THIEF, theFile: "thief.png"},
		

		{worldType: TILE_YELLOWKEYSLEFT, theFile: "yellowkeysleft.png"},
		{worldType: TILE_BLUEKEYSLEFT, theFile: "bluekeysleft.png"},
		{worldType: TILE_GREENKEYSLEFT, theFile: "greenkeysleft.png"},
		{worldType: TILE_REDKEYSLEFT, theFile: "redkeysleft.png"},
		{worldType: TILE_LVL, theFile: "lvl.png"},
		{worldType: TILE_LIVESLEFT, theFile: "lifeleft.png"}, 

		{worldType: TILE_POISON, theFile: "/world/poison_plant.png"},

		{worldType: TILE_PLANK_X, theFile: "/world/plank_x.png"},
		{worldType: TILE_PLANK_Y, theFile: "/world/plank_y.png"},
		{worldType: TILE_STAIRS, theFile: "/interior/stairs.png"},
		
		{worldType: TILE_GOAL_GROUND, theFile: "goal_ground.png"},
		{worldType: TILE_GOAL_GRASS, theFile: "goal_grass.png"},
		{worldType: TILE_GOAL_STAIRS, theFile: "goal_stairs.png"},
		{worldType: TILE_GOAL_STAIRS_DOWN, theFile: "goal_stairs_down.png"},
		{worldType: TILE_GOAL_STAIRS_UP, theFile: "goal_stairs_up.png"},
		

		{worldType: TILE_BED_UPPER, theFile: "/interior/bed_upper.png"},
		{worldType: TILE_BED_LOWER, theFile: "/interior/bed_lower.png"},
		{worldType: TILE_BOOK_UPPER, theFile: "/interior/book_upper.png"},
		{worldType: TILE_BOOK_LOWER, theFile: "/interior/book_lower.png"},
		{worldType: TILE_WINDOW_UPPER, theFile: "/interior/window_upper.png"},
		{worldType: TILE_WINDOW_LOWER, theFile: "/interior/window_lower.png"},
		{worldType: TILE_TABLE_L, theFile: "/interior/table_l.png"},
		{worldType: TILE_TABLE_M, theFile: "/interior/table_m.png"},
		{worldType: TILE_TABLE_R, theFile: "/interior/table_r.png"},
		{worldType: TILE_STOOL, theFile: "/interior/stool.png"},
		{worldType: TILE_WINDOW, theFile: "/interior/window.png"},
		{worldType: TILE_OVEN, theFile: "/interior/oven.png"},
		{worldType: TILE_FURNACE, theFile: "/interior/furnace.png"},
		{worldType: TILE_LOGS, theFile: "/interior/logs.png"},
		{worldType: TILE_KITCHEN_TOOLS, theFile: "/interior/kitchen_tools.png"},
		
		{worldType: TILE_CARPET_1, theFile: "/interior/carpet_1.png"},
		{worldType: TILE_CARPET_2, theFile: "/interior/carpet_2.png"},
		{worldType: TILE_CARPET_3, theFile: "/interior/carpet_3.png"},
		{worldType: TILE_CARPET_4, theFile: "/interior/carpet_4.png"},
		{worldType: TILE_CARPET_5, theFile: "/interior/carpet_5.png"},
		{worldType: TILE_CARPET_6, theFile: "/interior/carpet_6.png"},
		{worldType: TILE_CARPET_7, theFile: "/interior/carpet_7.png"},
		{worldType: TILE_CARPET_8, theFile: "/interior/carpet_8.png"},
		{worldType: TILE_CARPET_9, theFile: "/interior/carpet_9.png"},
	
		{worldType: TILE_ORGAN_1, theFile: "/interior/organ_1.png"},
		{worldType: TILE_ORGAN_2, theFile: "/interior/organ_2.png"},
		{worldType: TILE_ORGAN_3, theFile: "/interior/organ_3.png"},
		{worldType: TILE_ORGAN_4, theFile: "/interior/organ_4.png"},

		{worldType: TILE_CHEST_OPEN, theFile: "/interior/chest_open.png"},
		{worldType: TILE_CHEST_YELLOW, theFile: "/interior/chest.png"},
		{worldType: TILE_CHEST_BLUE, theFile: "/interior/chest.png"},
		{worldType: TILE_CHEST_GREEN, theFile: "/interior/chest.png"},
		{worldType: TILE_CHEST_RED, theFile: "/interior/chest.png"},
		{worldType: TILE_CHEST_1, theFile: "/interior/chest.png"},
		{worldType: TILE_CHEST_2, theFile: "/interior/chest.png"},
		{worldType: TILE_CHEST_3, theFile: "/interior/chest.png"},
		{worldType: TILE_CHEST_4, theFile: "/interior/chest.png"},
		{worldType: TILE_CHEST_5, theFile: "/interior/chest.png"},

		
		{worldType: TILE_POT_KEY, theFile: "/world/pot.png"}
		
	
	];

	picsToLoad = imageList.length;

	for(var i=0;i<imageList.length;i++) {
		if(imageList[i].varName != undefined) {
			beginLoadingImage(imageList[i].varName, imageList[i].theFile);
		} else {
			loadImageForWorldCode(imageList[i].worldType, imageList[i].theFile);
		}
	}
}