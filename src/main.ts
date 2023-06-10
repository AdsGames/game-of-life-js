import * as Phaser from "phaser";

import GameState from "./GameState";

const config: Phaser.Types.Core.GameConfig = {
  backgroundColor: "#000",
  height: 600,
  parent: "game-container",
  scene: [GameState],
  type: Phaser.AUTO,
  width: 600,
  scale: {
    mode: Phaser.Scale.FIT,
  },
};

export const game = new Phaser.Game(config);
