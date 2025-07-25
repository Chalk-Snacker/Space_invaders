"use strict";
import lib2D from "./libs/lib2d_v2.mjs";
import lib_sprite from "./libs/libSprite_v2.mjs";
import { Sprite_sheet_info, Game_props } from "./main.mjs";

const total_aliens = 9;

export class Alien extends lib_sprite.TSprite {
  constructor(a_sprite_cvs) {
    const pos = new lib2D.TPoint(100, 100);
    super(a_sprite_cvs, Sprite_sheet_info.alien_1, pos);
    this.scale = 0.5;
    // --- sinwave ---
    this.sinwave;
    this.ampl = 15;
    this.freq = 0.02;
    this.theta = 0;
    this.dist = this.freq / 2;
    this.pos = pos;
    // ---------------------

    //this.animateSpeed = 10; // need correct sprite sheet
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
  static spawn_aliens(a_sprite_cvs) {
    // first alien/ init
    Game_props.aliens.push(new Alien(a_sprite_cvs));
    for (let i = 1; i < total_aliens; i++) {
      let alien = Game_props.aliens[i];
      // temp before game_board
      let distance = 150;
      alien = new Alien(a_sprite_cvs);
      alien.pos.x += i * distance;
      Game_props.aliens.push(alien);
    }
  }
}

export function for_each_alien(a_func) {
  for (let i = 0; i < total_aliens; i++) {
    const alien = Game_props.aliens[i];
    alien ? a_func(alien, i) : "missing alien?"; // cna grab specific alien with i
  }
}
