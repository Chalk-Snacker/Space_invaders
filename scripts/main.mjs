"use strict";

import lib_2D from "./libs/lib2d_v2.mjs";
import lib_sprite from "./libs/libSprite_v2.mjs";
import { Alien } from "./alien.mjs";

const cvs = document.getElementById("cvs");
const spcvs = new lib_sprite.TSpriteCanvas(cvs);
export const Sprite_sheet_info = {
  alien_1: { x: 400, y: 475, width: 64, height: 61, count: 1 },
};

const alien = new Alien(spcvs);

function draw_game() {
  spcvs.clearCanvas();
  alien.draw();
}

function load_game() {
  requestAnimationFrame(draw_game);
}

// run load_game AFTER spritesheet is loaded
spcvs.loadSpriteSheet(
  "../d28krr9-22da40b1-5add-4d51-9520-4402eb0fe081.png",
  load_game,
);

// -----------------------------------------------

// tegn figurer inntil du har funnet et spritesheet
/*
function draw() {
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.fillRect(cvs.width / 2, cvs.height / 2, 50, 50);
  ctx.stroke();
}
*/

//draw();
