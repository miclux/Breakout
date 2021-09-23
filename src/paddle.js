export default class Paddle {
  constructor(gamewidth, gameheight) {
    this.gameheight = gameheight;
    this.gamewidth = gamewidth;

    this.width = 200;
    this.height = 20;

    this.reset();
  }

  reset() {
    this.x = this.gamewidth / 2 - this.width / 2;
    this.y = this.gameheight - 60;
    console.info("paddle.reset x: " + this.x + " y: " + this.y);
  }

  get centerX() {
    return this.x + this.width / 2;
  }
}
