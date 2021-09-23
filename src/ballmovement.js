export default class BallMovement {
  constructor(width) {
    this.width = width;
  }

  update(ball, paddle) {
    //calc paddle hit
    if (
      ball.y + ball.width >= paddle.y &&
      ball.x + ball.width >= paddle.x &&
      ball.x < paddle.x + paddle.width
    ) {
      let angleRad = Math.PI / 4;
      angleRad =
        (angleRad * (ball.x - (paddle.x + paddle.width / 2))) / paddle.width;

      let sinRad = Math.sin(angleRad) * ball.speed;
      let cosRad = Math.cos(angleRad) * ball.speed;

      ball.velocityX = sinRad;
      ball.velocityY = cosRad;

      console.info("VX " + ball.velocityX + " VY " + ball.velocityY);

      ball.velocityY = -ball.velocityY;
      // // set above paddle
      // ball.y = paddle.y - ball.width;
    }

    // calc right side box hit
    if (ball.x + ball.width >= this.width) {
      ball.velocityX = -ball.velocityX;
    }

    // calc left side box hit
    if (ball.x <= 0) {
      ball.velocityX = -ball.velocityX;
    }

    // calc top side box hit
    if (ball.y <= 0) {
      ball.velocityY = -ball.velocityY;
    }

    ball.x += ball.velocityX * ball.speed;
    ball.y += ball.velocityY * ball.speed;
  }
}
