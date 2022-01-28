var results = [
  {name: "Satisfied", count: 1043, color: "lightblue"},
  {name: "Neutral", count: 563, color: "lightgreen"},
  {name: "Unsatisfied", count: 510, color: "pink"},
  {name: "No comment", count: 175, color: "silver"}
];

function flipHorizontally(context, around) {
  context.translate(around, 0);
  context.scale(-1, 1);
  context.translate(-around, 0);
}

var CanvasDisplay = class CanvasDisplay {
  constructor(level) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = Math.min(600, level.width * SCALE);
    this.canvas.height = Math.min(450, level.height * SCALE);
    document.body.appendChild(this.canvas);
    this.cx = this.canvas.getContext("2d");

    this.flipPlayer = false;

    this.viewport = {
      left: 0,
      top: 0,
      width: this.canvas.width / SCALE,
      height: this.canvas.height / SCALE
    };
  }

  clear() {
    this.canvas.remove();
  }
}
CanvasDisplay.prototype.syncState = function(state) {
  this.updateViewport(state);
  this.clearDisplay(state.status);
  this.drawBackground(state.level);
  this.drawRoles(state.roles);
};
CanvasDisplay.prototype.updateViewport = function(state) {
  let view = this.viewport;
  let margin = view.width / 3;
  
  let player = state.player;
  let center = player.position.plus(player.size.times(0.5));

  if (center.x < view.left + margin) {
    view.left = Math.max(center.x - margin, 0);
  } else if (center.x > view.left + view.width - margin) {
    view.left = Math.min(center.x + margin - view.width,
                         state.level.width - view.width);
  }
  if (center.y < view.top + margin) {
    view.top = Math.max(center.y - margin, 0);
  } else if (center.y > view.top + view.height - margin) {
    view.top = Math.min(center.y + margin - view.height,
                        state.level.height - view.height);
  }
};
CanvasDisplay.prototype.clearDisplay = function(status) {
  if (status == "won") {
    this.cx.fillStyle = "#E6E76A";
  } else if (status == "lost") {
    this.cx.fillStyle = "#E386AA";
  } else {
    this.cx.fillStyle = "#F2E2CE";
  }
  this.cx.fillRect(0, 0,
                   this.canvas.width, this.canvas.height);
};

// load images
var objects = document.createElement("img");
objects.src =  "img/objects.png";
var food = document.createElement("img");
food.src = "img/food.png";

CanvasDisplay.prototype.drawBackground = function(level) {
  let {left, top, width, height} = this.viewport;
  let xStart = Math.floor(left);
  let xEnd = Math.ceil(left + width);
  let yStart = Math.floor(top);
  let yEnd = Math.ceil(top + height);

  for (let y = yStart; y < yEnd; y++) {
    for (let x = xStart; x < xEnd; x++) {
      let tile = level.maze[y][x];
      if (tile == "empty") continue;
      let screenX = (x - left) * SCALE;
      let screenY = (y - top) * SCALE;
      let tileX = tile == "wall" ? SCALE : 0;
      this.cx.drawImage(objects,
                        tileX,         0, SCALE, SCALE,
                        screenX, screenY, SCALE, SCALE);
    }
  }
};

var playerRobbie = document.createElement("img");
playerRobbie.src = "img/player.svg";

CanvasDisplay.prototype.drawPlayer = function(player, x, y,
                                              width, height) {
  //place player image in the middle
  x += (1 - player.size.x) / 2 * SCALE;
  y += (1 - player.size.y) / 2 * SCALE;

  let tile = 0;
  if (player.face == "left") {
  	tile = 0;
  } else if (player.face == "right") {
  	tile = 1;
  } else if (player.face == "back") {
  	tile = 2;
  } else { //front
  	tile = 3;
  }

  this.cx.save();
  let tileX = tile * width;
  this.cx.drawImage(playerRobbie,
                    tileX, 0, width, height,
                    x,     y, width, height);
  
  this.cx.restore();
};

var enemyMonster = document.createElement("img");
enemyMonster.src = "img/enemy.svg";
// var enemyMonster = document.createElementNS("http://www.w3.org/2000/svg", "circle");

CanvasDisplay.prototype.drawEnemy = function(enemy, x, y,
											 width, height) {
  //place enemy image in the middle
  x += (1 - enemy.size.x) / 2 * SCALE;
  y += (1 - enemy.size.y) / 2 * SCALE;

  let tile = 0;
  if (enemy.status == "fainted") {
  	tile = 6;
  } else if (enemy.speed.x != 0 || enemy.speed.y != 0) {
  	tile = Math.floor(Date.now() / 60) % 6;
  }

  this.cx.save();

  if (enemy.flip) {
  	flipHorizontally(this.cx, x + width / 2);
  }
  let tileX = tile * width;
  this.cx.drawImage(enemyMonster,
                    tileX, 0, width, height,
                    x,     y, width, height);
  
  this.cx.restore();
}


CanvasDisplay.prototype.drawRoles = function(roles) {
  let countFood = 0;
  for (let role of roles) {
    let width = role.size.x * SCALE;
    let height = role.size.y * SCALE;
    let x = (role.position.x - this.viewport.left) * SCALE;
    let y = (role.position.y - this.viewport.top) * SCALE;

    if (role.type == "rock" && role.status != "eaten") {
      this.cx.drawImage(objects,
                        0, 0, width, height,
                        x, y, width, height);
    } else if (role.type == "food") {
      role.foodType = (role.foodType == -1)
      			  	? countFood % 4
      			  	: role.foodType;
      let tileX = role.foodType * SCALE;
      countFood++;

      this.cx.drawImage(food,
                        tileX, 0, width, height,
                        x,     y, width, height);

    } else if (role.type == "enemy") {
      this.drawEnemy(role, x, y, width, height);
    } else if (role.type == "player") {
      this.drawPlayer(role, x, y, width, height);
    }

  }
  foodType = 0;
};
