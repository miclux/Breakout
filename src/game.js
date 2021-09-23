import Paddle from "./paddle.js";
import Ball from "./ball.js";
import LevelConstruction from "./levelconstruction.js";
import PaddleController from "./paddlecontroller.js";
import TargetCollisionDetection from "./targetcollisiondetection.js";
import BallMovementCalculation from "./ballmovement.js";

export default class Game {
  constructor(canvas, ctx, gameWidth, gameHeight) {
    this.BALL_SPEED = 1.5;
    this.ctx = ctx;
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.paddle = new Paddle(this.gameWidth, this.gameHeight);
    this.paddleController = new PaddleController(canvas, this.paddle);
    this.targetCollisionDetection = new TargetCollisionDetection();
    this.ballMovementCalculation = new BallMovementCalculation(this.gameWidth);
  }

  newGame() {
    console.info("newGame");
    this.paddleController.doCapture(false);
    this.paddle.reset();

    // todo: reset?
    this.ball = new Ball(
      this.paddle.x + this.paddle.width / 2,
      this.paddle.y - 15,
      this.BALL_SPEED
    );

    this.targets = LevelConstruction.createTargets(1, this.gameWidth);
  }

  run() {
    this.paddleController.doCapture(true);
  }

  pause() {
    this.paddleController.doCapture(false);
  }

  draw() {
    this.cleanCtx();
    this.drawTargets(this.targets);
    this.drawBall(this.ball);
    this.drawPaddle(this.paddle);
  }

  cleanCtx() {
    this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
  }

  drawTargets(targets) {
    targets.forEach((target) => {
      if (target.hit === false) {
        this.ctx.fillStyle = "#f00";
        this.ctx.fillRect(target.x, target.y, target.width, target.height);
      }
    });
  }

  drawBall(ball) {
    this.ctx.fillStyle = "#f00";
    this.ctx.fillRect(ball.x, ball.y, ball.width, ball.width);
  }

  drawPaddle(paddle) {
    this.ctx.fillStyle = "#f00";
    this.ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
  }

  update() {
    this.ballMovementCalculation.update(this.ball, this.paddle);

    if (this.ball.y < this.gameHeight / 2) {
      this.targetCollisionDetection.update(this.ball, this.targets);
    }
  }
}
