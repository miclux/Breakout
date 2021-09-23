import Target from "./target.js";

const TARGET_TYPE = {
  BOX: 0
};

export default class LevelConstruction {
  static createTargets(level, gameScreenWidth) {
    const targetWidth = 50;
    const borderMargin = 20;
    let targets = [];

    let rows = Math.floor(level / 3) + 1;
    let rowTargetCount = Math.floor(
      (gameScreenWidth - borderMargin) / targetWidth
    );

    for (let row = 0; row < rows; row++) {
      for (
        let rowTargetIndex = 0;
        rowTargetIndex < rowTargetCount;
        rowTargetIndex++
      ) {
        var target = new Target(
          borderMargin + rowTargetIndex * targetWidth,
          (row + 1) * 10,
          40,
          20,
          TARGET_TYPE.BOX
        );

        targets.push(target);
      }
    }

    return targets;
  }
}
