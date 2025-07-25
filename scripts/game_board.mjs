"use strict";

// imports
//import {  } from "./main.mjs";
// -------
export function test_cell(a_cvs) {
  const ctx = a_cvs.getContext("2d");
  const col = 21;
  const row = 16;
  const padding = 15;
  const cell_width = 60;
  const cell_height = 60;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      ctx.fillRect(
        i * 100 + padding,
        j * 100 + padding,
        cell_width,
        cell_height,
      );
    }
  }
}
