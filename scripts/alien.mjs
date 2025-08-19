"use strict";
import lib2D from "./libs/lib2d_v2.mjs";
import lib_sprite from "./libs/libSprite_v2.mjs";
import { Sprite_sheet_info, Game_props, spcvs } from "./main.mjs";
import { Board_cell_info_type } from "./game_board.mjs";

const total_aliens_row = 4;
const total_aliens_col = 12;
const total_aliens = total_aliens_row * total_aliens_col;

export class Alien extends lib_sprite.TSprite {
  constructor(a_sprite_cvs) {
    const pos = new lib2D.TPoint(100, 100);
    super(a_sprite_cvs, Sprite_sheet_info.alien_1, pos);
    this.scale = 0.5;
    // --- sinwave ---
    this.sinwave;
    //this.ampl = 0.5;
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
    for (let i = 0; i < total_aliens_col; i++) {
      for (let j = 0; j < total_aliens_row; j++) {
        const alien = new Alien(a_sprite_cvs);
        const gameboard_cell = Game_props.game_board[i][j];

        alien.shape.x = gameboard_cell.pos.x;
        alien.shape.y = gameboard_cell.pos.y;
        // animating on the pos, so need to set aswell ..
        alien.pos.x = gameboard_cell.pos.x;
        alien.pos.y = gameboard_cell.pos.y;

        Game_props.aliens.push(alien);
        gameboard_cell.info_type = Board_cell_info_type.Alien;
      }
    }
  }
}

export function for_each_alien(a_func) {
  for (let i = 0; i < total_aliens; i++) {
    const alien = Game_props.aliens[i];
    alien ? a_func(alien, i) : "missing alien?"; // cna grab specific alien with i
  }
}
