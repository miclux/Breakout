const MIN_WIDTH = 10,
  MIN_HEIGHT = 10;

export default class Target {
  constructor(x, y, width, height, targetType) {
    this.targetType = targetType;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.hit = false;
  }

  static get minWidth() {
    return MIN_WIDTH;
  }

  static get minHeight() {
    return MIN_HEIGHT;
  }
}
