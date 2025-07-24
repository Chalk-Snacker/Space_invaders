"use strict";

import lib_2D from "./libs/lib2d_v2.mjs";
import lib_sprite from "./libs/libSprite_v2.mjs";
import { Alien } from "./alien.mjs";

const cvs = document.getElementById("cvs");
const spcvs = new lib_sprite.TSpriteCanvas(cvs);

export const Sprite_sheet_info = {
  alien_1: { x: 52, y: 50, width: 134, height: 124, count: 2 },
  alien_2: { x: 79, y: 98, width: 190, height: 184, count: 2 },
  background: { x: 246, y: 0, width: 576, height: 512, count: 1 },
};

const Game_props = {
  alien: new Alien(spcvs),
};
//Game_props.alien = new Alien(spcvs);

function load_game() {
  requestAnimationFrame(draw_game);
  setInterval(animate_game, 10);
}

function animate_game() {
  Game_props.alien.animate();
}

function draw_game() {
  spcvs.clearCanvas();
  Game_props.alien.draw();
  requestAnimationFrame(draw_game);
}
// run load_game AFTER spritesheet is loaded
spcvs.loadSpriteSheet(
  "../media/507030fb-b02f-430e-ad0f-a3f6455fd84e.png",
  load_game,
);
// -----------------------------------------------
