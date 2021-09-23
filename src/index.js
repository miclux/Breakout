import Game from "./game.js";

const DEBUG = 1;
const debugElement = document.getElementById("debugInfo");
const levelInfoElement = document.getElementById("levelInfo");

let canvas = document.getElementById("gamescreen");
let ctx = canvas.getContext("2d");

const GAMESCREEN_HEIGHT = 600;
const GAMESCREEN_WIDTH = 800;

const GAME_MODE = {
  PAUSED: 0,
  NEW: 1,
  RUNNING: 2
};

const environment = {
  mouseDirection: "none",
  gameMode: GAME_MODE.NEW
};

const game = new Game(canvas, ctx, GAMESCREEN_WIDTH, GAMESCREEN_HEIGHT);

canvas.addEventListener("mouseleave", mouseLeft);
canvas.addEventListener("mouseenter", mouseEntered);
canvas.addEventListener("mouseup", mouseUp);

function mouseUp() {
  environment.gameMode = GAME_MODE.RUNNING;
  game.run();
  console.info("running");
}

function mouseEntered() {
  if (environment.gameMode === GAME_MODE.PAUSED) {
    game.run();
    environment.gameMode = GAME_MODE.RUNNING;
  }
}

function mouseLeft() {
  console.info("paused");
  game.pause();
  environment.gameMode = GAME_MODE.PAUSED;
}

setUpNewGame();
requestAnimationFrame(gameLoop);

function gameLoop(timestamp) {
  if (environment.gameMode === GAME_MODE.RUNNING) {
    game.update();
  }

  game.draw(ctx);

  if (DEBUG === false) {
    debugElement.innerHTML = "MouseSpeed: " + environment.mouseSpeed + "<br>";
    debugElement.innerHTML +=
      "MouseDirection: " + environment.mouseDirection + "<br>";
  }

  requestAnimationFrame(gameLoop);
}

function setUpNewGame() {
  environment.gameMode = GAME_MODE.NEW;
  game.newGame();
}

function createLevel(level) {
  levelInfoElement.innerHTML = "Level: " + level;
  levelInfoElement.innerHTML += "<br>Targets: " + level.targets;
  // levelInfoElement.innerHTML += "<br>Rows: " + rows;
  // levelInfoElement.innerHTML += "<br>RowsTargetCount " + rowTargetCount;
}
