/**
 * moscow_board.js
 *
 * A class that will generate a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */

let ListOptions = require('../enums/list_options.js').ListOptions;
let Board = require('./board.js').Board;

class MoscowBoard {

  /**
   * genereates a MoSCoW Board
   *
   * @return {Board} a MoSCoW Board
   */
  generateBoard() {
    let board = new Board('MoSCoW Board');

    board.addListTemplate(ListOptions.MUST);
    board.addListTemplate(ListOptions.SHOULD);
    board.addListTemplate(ListOptions.COULD);
    board.addListTemplate(ListOptions.WONT);

    return board;
  }
}

// export this class
module.exports.MoscowBoard = MoscowBoard;
