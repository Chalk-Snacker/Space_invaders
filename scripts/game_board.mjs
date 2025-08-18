"use strict";

// imports
import { Game_props, spcvs, cvs } from "./main.mjs";
import { for_each_alien, Alien } from "./alien.mjs";
// -------
const col = 8;
const row = 15;

export function draw_temp_tiles(a_cvs) {
  const ctx = a_cvs.getContext("2d");
  const padding = 15;
  const cell_width = 60;
  const cell_height = 60;
  for (let i = 0; i < row; i++) {
    const row = [];
    for (let j = 0; j < col; j++) {
      ctx.fillRect(
        i * 100 + padding,
        j * 100 + padding,
        cell_width,
        cell_height,
      );
    }
  }
}

export const Board_cell_info_type = { Empty: 0, Alien: 1 };

export class Board_cell_info {
  constructor() {
    this.info_type = Board_cell_info_type.Empty;
    this.pos = { x: 0, y: 0 };
  }
}

export function load_gameboard(a_func) {
  const padding = 100;
  for (let i = 0; i < row; i++) {
    const row = [];
    for (let j = 0; j < col; j++) {
      const cell = new Board_cell_info();
      cell.pos.x = i * padding;
      cell.pos.y = j * padding;
      row.push(cell);
    }
    Game_props.game_board.push(row);
  }
}
