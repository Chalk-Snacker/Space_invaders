"use strict";
import lib2D from "./libs/lib2d_v2.mjs";
import lib_sprite from "./libs/libSprite_v2.mjs";
import { Sprite_sheet_info } from "./main.mjs";

export class Alien extends lib_sprite.TSprite {
  constructor(a_sprite_cvs) {
    const pos = new lib2D.TPoint(100, 100);
    super(a_sprite_cvs, Sprite_sheet_info.alien_1, pos);
    //this.alien_width = Sprite_sheet_info.alien_1.width;
  }
  /*test() {
    console.log(this.alien_width);
  }
  */

  draw() {
    super.draw();
  }
}
