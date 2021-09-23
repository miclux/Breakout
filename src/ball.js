export default class Ball {
  constructor(startPosX, startPosY, speed) {
    this.x = startPosX;
    this.y = startPosY;
    this.speed = speed;
    this.width = 10;

    this.velocityX = 0;
    this.velocityY = -speed;
  }
}
