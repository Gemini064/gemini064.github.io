const SCALE = 50;
var score = 0;

class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	plus(vec) {
		return new Vector(this.x + vec.x, this.y + vec.y);
	}
	times(factor) {
		return new Vector(this.x * factor, this.y * factor);
	}
}

class Level {
	constructor(script) {
		let maze = script.trim().split('\n').map(elt => [...elt]);
		this.height = maze.length;
		this.width = maze[0].length;

		// the initial postions and configuration of roles
		this.startRoles = [];

		this.maze = maze.map((row, y) => {
			return row.map((char, x) => {
				if(typeof charMap[char] == "string") return charMap[char];
				this.startRoles.push(
					charMap[char].create(new Vector(x, y), char)
				);
				return "empty";
			});
		});
	}
}
Level.prototype.touchWall = function(position, size) {
	let left = Math.floor(position.x);
	let right = Math.ceil(position.x + size.x);
	let top = Math.floor(position.y);
	let bottom = Math.ceil(position.y + size.y);

	for (let y = top; y < bottom; y++) {
		for (let x = left; x < right; x++) {
			if (this.maze[y][x] == "wall") return true;
		}
	}
	return false;
}

class State {
	constructor(status, roles, level) {
		// 1. in progress, 2. win, 3. lost
		this.status = status;
		this.roles = roles;
		this.level = level;
	}
	static initial(level) {
		return new State("in progress", level.startRoles, level);
	}
	get player() {
		return this.roles.find(elt => elt.type == "player");
	}
	get food() {
		return this.roles.filter(elt => elt.type == "food");
	}
	get rock() {
		return this.roles.filter(elt => elt.type == "rock");
	}
	get enemy() {
		return this.roles.filter(elt => elt.type == "enemy");
	}
}
State.prototype.update = function(time, keys) {
	let roles = this.roles.map(role => role.update(this, time, keys));
	let newState = new State(this.status, roles, this.level);

	if (newState.status !== "in progress") return newState;
	// To Do
	for (let role of roles) {
		if (role.type != "player")
			newState = role.collide(newState, keys);
	}
	return newState;
}

/* Roles */
class Player {
	constructor(position, speed, face, status) {
		this.position = position;
		this.speed = speed;
		this.face = face;

		// eat rock or not
		// 1. empty, 2. eatRock
		this.status = status;
	}
	static create(position) {
		return new Player(position.plus(new Vector(0, 0)), new Vector(0, 0), "front", "empty");
	}
	get type() {
		return "player";
	}
}
Player.prototype.size = new Vector(0.8, 0.8);

const PLAYER_SPEED = 5;
let countX = 0, countY = 0;
Player.prototype.update = function(state, time, keys) {
	let xSpeed = 0, ySpeed = 0;
  let face = this.face;
  if (keys.ArrowLeft) {
  	xSpeed -= PLAYER_SPEED;
  	face = "left";
  }
	else if (keys.ArrowRight) {
		xSpeed += PLAYER_SPEED;
		face = "right";
	}
	else if (keys.ArrowUp) {
		ySpeed -= PLAYER_SPEED;
		face = "back";
	}
	else if (keys.ArrowDown) {
		ySpeed += PLAYER_SPEED;
		face = "front";
	}
	
	let position = this.position;

	let xDist = 0, yDist = 0;
	if (Math.abs(xSpeed * time) >= 0.083) {
		countX = (++countX) % 5;
		if (countX == 4) {
			xDist = (xSpeed > 0)? 1: -1;
		}
	}
	if (Math.abs(ySpeed * time) >= 0.083) {
		countY = (++countY) % 5;
		if (countY == 4) {
			yDist = (ySpeed > 0)? 1: -1;
		}
	}

	let moved = position.plus(new Vector(xDist, yDist));
	if (!state.level.touchWall(moved, this.size) && !touchFood(state.food, moved) && 
		  !touchRock(state.rock, moved) && !touchFaintedEnemy(state.enemy, moved)){
		position = moved;
	}

	return new Player(position, new Vector(xSpeed, ySpeed), face, this.status);
}

class Enemy {
	constructor(position, speed, status="active", timer=2) {
		this.position = position;
		this.speed = speed;
		this.status = status;
		this.timer = timer;
	}
	static create(position, char) {
		if (char == "=") {
			let x = (Math.random() >= 0.5)? -1: 1;
			return new Enemy(position, new Vector(x, 0));
		} else if (char == "|") {
			let y = (Math.random() >= 0.5)? -1: 1;
			return new Enemy(position, new Vector(0, y));
		}
	}
	get type() {
		return "enemy";
	}
}

// enemy direction
var enemyDirec = [new Vector(-1, 0), new Vector(1, 0), new Vector(0, -1), new Vector(0, 1)];
Enemy.prototype.size = new Vector(0.93, 0.93);
Enemy.prototype.collide = function(state, keys) {
	if (this.status === "active" && dist(state.player.position, this.position) < 0.5) {
		return new State("lost", state.roles, state.level);
	} else if (keys[" "] && state.player.status === "empty" && 
		this.status === "fainted" && !continueThrow) {
		let newRoles = state.roles;
		let center = new Vector(this.position.x + 0.5, this.position.y - 0.5);
		let playerCenter = new Vector(state.player.position.x + 0.5, state.player.position.y - 0.5);
		let offsetX = 0, offsetY = 0;
		switch(state.player.face) {
			case "left":
				offsetX = -0.5;
				break;
			case "right":
				offsetX = 0.5;
				break;
			case "back":
				offsetY = -0.5;
				break;
			default: //front:
				offsetY = 0.5;
				break;
		}

		let status = state.status;
		if (dist(center, playerCenter.plus(new Vector(offsetX, offsetY))) <= 1) {
			newRoles = newRoles.filter(elt => elt != this);
			if (!newRoles.some(elt => elt.type == "enemy")) status = "won";
		}
		return new State(status, newRoles, state.level);
	} else {
		return state;
	}
}
Enemy.prototype.update = function(state, time) {
	if (this.timer <= 0) return new Enemy(this.position, this.speed, "active", 3);
	if (this.status === "fainted") return new Enemy(this.position, this.speed, "fainted", this.timer - time);
	let moved = this.position.plus(this.speed.times(time));
	if (!state.level.touchWall(moved, this.size) &&
		  !touchFood(state.food, moved) && !touchRock(state.rock, moved)){
		return new Enemy(moved, this.speed);
	} else {
		// hitted by the rock
		let position = new Vector(Math.round(this.position.x), Math.round(this.position.y));
		for (let rock of state.rock) {
			if (dist(rock.position, this.position) < 0.5) {
				if (rock.speed.x != 0 || rock.speed.y != 0) {
					return new Enemy(position.plus(rock.speed.times(-1)), this.speed, "fainted", this.timer - time);
				}
			}
		}

		let direcIdx = Math.floor((Math.random() * 10)) % 4;
		return new Enemy(position, enemyDirec[direcIdx]);
	}
}


class Food {
	constructor(position) {
		this.position = position;
	}
	static create(position) {
		return new Food(position);
	}
	get type() {
		return "food";
	}
}
Food.prototype.size = new Vector(0.5, 0.5);
Food.prototype.collide = function(state, keys) {
	if (!keys[" "] || state.player.status === "eatRock") return state;
	let newRoles = state.roles;
	let center = new Vector(this.position.x + 0.5, this.position.y - 0.5);
	let playerCenter = new Vector(state.player.position.x + 0.5, state.player.position.y - 0.5);
	let offsetX = 0, offsetY = 0;
	switch(state.player.face) {
		case "left":
			offsetX = -0.5;
			break;
		case "right":
			offsetX = 0.5;
			break;
		case "back":
			offsetY = -0.5;
			break;
		default: //front:
			offsetY = 0.5;
			break;
	}

	if (dist(center, playerCenter.plus(new Vector(offsetX, offsetY))) <= 1) {
		newRoles = newRoles.filter(elt => elt != this);
		score += 50;
		displayScore(score);
	}
	return new State(state.status, newRoles, state.level);
}
Food.prototype.update = function(state, time, keys) {
	return this;
}

class Rock {
	constructor(position, speed, status) {
		this.position = position;
		this.speed = speed;

		// being eaten by the player or not
		// 1. placed, 2. eaten, 3. moving
		this.status = status;
	}
	static create(position) {
		return new Rock(position, new Vector(0, 0), "placed");
	}
	get type() {
		return "rock"
	}
}

var continueEat = false, continueThrow = false;
Rock.prototype.size = new Vector(1, 1);
Rock.prototype.collide = function(state) {
	// return state;
	let newRoles = state.roles;
	if (this.status == "eaten") {
		newRoles = newRoles.map(elt => {
			if (elt.type == "player") elt.status = "eatRock";
			return elt;
		});
	} else if (this.status == "moving") {
		newRoles = newRoles.map(elt => {
			if (elt.type == "player") elt.status = "empty";
			return elt;
		});
	}
	return new State(state.status, newRoles, state.level);
}
Rock.prototype.update = function(state, time, keys) {
	if (this.status == "eaten") {
		if (keys[" "] && !continueEat) {
			// throw this rock
			let speed;
			switch(state.player.face) {
				case 'left':
					speed = new Vector(-1, 0);
					break;
				case 'right':
					speed = new Vector(1, 0);
					break;
				case 'back':
					speed = new Vector(0, -1);
					break;
				default: //front
					speed = new Vector(0, 1);
					break;
			}

			let moved = state.player.position.plus(speed);
			if ((state.level.touchWall(moved, this.size) || touchFood(state.food, moved) || touchRock(state.rock, moved))){
				return new Rock(state.player.position, new Vector(0, 0), "eaten");
		  } else {
		  	continueThrow = true;
		  	displayPlayerScore("empty");
		  	return new Rock(moved, speed, "moving");
		  }
		} else{
			// being carried by the player
			return new Rock(state.player.position, new Vector(0, 0), "eaten");
		}
	} else if (this.status == "moving") {
		//check if hitting the wall
		let moved = this.position.plus(this.speed.times(time * 5));
		if ((state.level.touchWall(moved, this.size) || touchFood(state.food, moved) || touchRock(state.rock.filter(elt => elt != this), moved))) {
			return new Rock(new Vector(Math.round(this.position.x), Math.round(this.position.y)), this.speed, "placed");
		} else {
			return new Rock(moved, this.speed, "moving");
		}
	} else if (!keys[" "]){
		continueEat = false;
		continueThrow = false;
		return this;
	} else if (state.player.status == "eatRock") {
		return this;
	} else if (this.speed.x != 0 || this.speed.y != 0) {
		return (continueThrow)? this: new Rock(this.position, new Vector(0, 0), "placed");
	}

	// being eaten by the player
	let center = new Vector(this.position.x + 0.5, this.position.y - 0.5);
	let playerCenter = new Vector(state.player.position.x + 0.5, state.player.position.y - 0.5);
	let offsetX = 0, offsetY = 0;
	switch(state.player.face) {
		case "left":
			offsetX = -0.5;
			break;
		case "right":
			offsetX = 0.5;
			break;
		case "back":
			offsetY = -0.5;
			break;
		default: //front:
			offsetY = 0.5;
			break;
	}

	if (dist(center, playerCenter.plus(new Vector(offsetX, offsetY))) <= 1) {
		continueEat = true;
		displayPlayerScore("eatRock");
		return new Rock(state.player.position, new Vector(0, 0), "eaten");
	}
	return this;
}

var charMap = {
	'.': 'empty',
	'#': 'wall',
	'T' : 'thorn',
	'@': Player,
	'O': Food,
	'=': Enemy, // initial speed is horizontal
	'|': Enemy, // initial speed is vertical
	'R': Rock, 
};

/* Drawing */
function createElt(name, attrs, ... children) {
	let elt = document.createElement(name);
	
	// set attributes of such element
	for (let key of Object.keys(attrs)) {
		elt.setAttribute(key, attrs[key]);
	}

	// append children nodes of such element
	for (let child of children) {
		elt.appendChild(child);
	}

	return elt;
}

function drawLevel(level) {
	return createElt("table", {
		class: "background",
		style: `width: ${level.width * SCALE}px`}, 
		...level.maze.map(row => createElt("tr", {
			style: `height: ${SCALE}px`}, 
			...row.map(type => createElt("td", {
				class: type}))
		))
	);
}

class GameDisplay {
	constructor(level) {
		this.dom = createElt("div", {
			class: "game"},
		drawLevel(level));
		document.body.appendChild(this.dom);
	}
	clear() {
		this.dom.remove();
	}
}
GameDisplay.prototype.syncState = function (state) {
	if (this.roleLevel) this.roleLevel.remove();
	this.roleLevel = drawRoles(state.roles);
	this.dom.appendChild(this.roleLevel);
	this.scrollView(state);
}
GameDisplay.prototype.scrollView = function (state) {
	let width = this.dom.clientWidth;
	let height = this.dom.clientHeight;
	let margin = width / 3;

	let player = state.player;
	let center = player.position.plus(player.size.times(0.5)).times(SCALE);
	
	let left = this.dom.scrollLeft;
	let right = left + width;
	let top = this.dom.scrollTop;
	let bottom = top + height;


	if (center.x < left + margin) {
		this.dom.scrollLeft = center.x - margin;
	} else if (center.x > right - margin) {
		this.dom.scrollLeft = center.x + margin - width;
	}
	if (center.y < top + margin) {
		this.dom.scrollTop = center.y - margin;
	} else if (center.y > bottom - margin) {
		this.dom.scrollTop = center.y + margin - height;
	}
}

var faceDirec = {
	left: `left: 0px; top: ${0.465*SCALE - 2.5}px; width: 5px; height: 5px;`,
	right: `left: ${0.93*SCALE - 5}px; top: ${0.465*SCALE - 2.5}px; width: 5px; height: 5px;`,
	front: `left: ${0.465*SCALE - 2.5}px; top: ${0.93*SCALE - 5}px; width: 5px; height: 5px;`,
	back: `left: ${0.465*SCALE - 2.5}px; top: 0px; width: 5px; height: 5px;`
}

function getPlayerDirec(size, face) {
	let width = 5, height = 5;
	let faceDirec = `width: ${width}px; height: ${height}px;`;
	if (face === "left")
		faceDirec += `left: 0px; top: ${size.y/2*SCALE - height/2}px;`;
	else if (face === "right")
		faceDirec += `left: ${size.x*SCALE - width}px; top: ${size.y/2*SCALE - height/2}px;`;
  else if (face === "back")
  	faceDirec += `left: ${size.x/2*SCALE - width/2}px; top: 0px;`;
  else //front
  	faceDirec += `left: ${size.x/2*SCALE - width/2}px; top: ${size.y*SCALE - height}px;`;
	return faceDirec;
}

function drawRoles(roles) {
	return createElt("div", {}, ...roles.map(role => {
		let childElt = (role.type == "player")? 
										[createElt("div", {class: "direc", style: `${getPlayerDirec(role.size, role.face)}`})]: 
										[];

		return createElt("div", {
		class: `role ${role.type} ${role.status}`,
		style: `width: ${role.size.x * SCALE}px;
						height: ${role.size.y * SCALE}px;
						left: ${(role.position.x + (1 - role.size.x)/2) * SCALE}px;
						top: ${(role.position.y + (1 - role.size.y)/2) * SCALE}px`}, ...childElt)
		
	})
	);
}

// touch
function dist(pos1, pos2) {
	return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
}

function touchFood(food, position) {
	for (let f of food) {
		if (dist(f.position, position) < 1) return true;
	}
	return false;
}

function touchRock(rock, position) {
	for (let r of rock) {
		if (dist(r.position, position) < 1) return true;
	}
	return false;
}

function touchFaintedEnemy(enemy, position) {
	for (let e of enemy) {
		if (e.status == "fainted" && dist(e.position, position) < 1)
			return true;
	}
	return false;
}

// track keys
const KEYS = trackKeys(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "]);
function trackKeys(keys) {
	let keyDown = Object.create(null);
	function track(event) {
		if (keys.includes(event.key)) {
			keyDown[event.key] = (event.type == "keydown");
			event.preventDefault();
		}
	}
	window.addEventListener("keydown", track);
	window.addEventListener("keyup", track);

	return keyDown;
}


// run the game
function runFrames(frameFunc) {
	let lastTime = null;
	let frame = function(time) {
		if (lastTime) {
			let timeStep = Math.min(100, time - lastTime) / 1000;
			// if win/lose, stop updating the frame
			if (!frameFunc(timeStep)) return; 
		}
		lastTime = time;
		requestAnimationFrame(frame);
	}
	requestAnimationFrame(frame);
}

function runLevel(level) {
	let state = State.initial(level);
  let gameDisplay = new GameDisplay(level);

  // the game will end 1 secound later after either winning or losing
  let countDown = 1;

  return new Promise(resolve => {
  	runFrames(timeStep => {
  		state = state.update(timeStep, KEYS);
  		gameDisplay.syncState(state);
  		if (state.status === "in progress") {
  			return true;
  		} else if (countDown > 0) {
  			countDown -= timeStep;
  			return true;
  		} else {
  			gameDisplay.clear();
  			resolve(state.status);
  			return false;
  		}
  	})
  });
}

function displayScore(newScore) {
	let score = document.getElementById("score");
	score.innerText = newScore;
}
function displayPlayerScore(status) {
	let playerStatus = document.getElementById("playerStatus");
	if (status == "empty") playerStatus.style.background = "white";
	else playerStatus.style.background = "black";
}

async function runGame(scripts) {
	let status;
	for (let i = 0; i < scripts.length;) {
		status = await runLevel(new Level(scripts[i]));
		if (status == "won") i++;
		else if (status == "lost") {
			score = 0;
			displayScore(score);
		}
	}
	console.log(status);
}