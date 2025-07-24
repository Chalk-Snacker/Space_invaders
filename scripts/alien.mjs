"use strict";
import lib2D from "./libs/lib2d_v2.mjs";
import lib_sprite from "./libs/libSprite_v2.mjs";
import { Sprite_sheet_info } from "./main.mjs";

export class Alien extends lib_sprite.TSprite {
  constructor(a_sprite_cvs) {
    const pos = new lib2D.TPoint(100, 100);
    super(a_sprite_cvs, Sprite_sheet_info.alien_2, pos);
    this.scale = 0.5;
    // --- sinwave ---
    this.sinwave;
    this.ampl = 20;
    this.freq = 0.02;
    this.theta = 0;
    this.dist = this.freq / 2;
    this.pos = pos;
    // ---------------------

    // this.animateSpeed = 10; // need correct sprite sheet
    // this.index = 1;
  }
  draw() {
    super.draw();
  }

  animate() {
    this.sinwave = this.ampl * Math.sin(this.theta);
    this.theta += this.freq;
    this.x = this.pos.x + this.sinwave;
  }
}
