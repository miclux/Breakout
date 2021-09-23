export default class PaddleController {
  constructor(element, paddle) {
    this.element = element;
    this.paddle = paddle;
    this.captureEnabled = false;

    this.element.addEventListener("mousemove", (e) => this.mouseMove(e));
  }

  doCapture(doCapture) {
    this.captureEnabled = doCapture;
  }

  mouseMove(evt) {
    if (this.captureEnabled) {
      let rect = this.element.getBoundingClientRect();
      let x = evt.clientX - this.paddle.width / 2;
      // calc paddle boundaries
      if (x < 0) x = 0;
      if (x + this.paddle.width > rect.width)
        x = rect.width - this.paddle.width;

      this.paddle.x = x;
    }
  }
}
