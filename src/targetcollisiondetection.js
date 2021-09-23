export default class TargetCollisionDetection {
  update(ball, targets) {
    targets.forEach((target) => {
      if (
        ball.y + ball.width <= target.y + target.height &&
        ball.x + ball.width >= target.x &&
        ball.x < target.x + target.width &&
        target.hit === false
      ) {
        target.hit = true;
        ball.velocityY = -ball.velocityY;
      }
    });
  }
}
