/**
 * moscow_board.js
 *
 * A class that will generate a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */

// let ListOptions = require('../enums/list_options.js').ListOptions;
let Board = require('./board.js').Board;
let MoscowListOptions = require('../enums/moscow_list_options.js').MoscowListOptions;
let MoscowListFactory = require('../factories/moscow_list_factory.js').MoscowListFactory;

class MoscowBoard {
  /**
   * generates a MoSCoW Board
   *
   * @return {Board} a MoSCoW Board
   */
  generateBoard() {
    let board = new Board('MoSCoW Board');
    board.setListFactory(new MoscowListFactory());

    board.addListTemplate(MoscowListOptions.MUST);
    board.addListTemplate(MoscowListOptions.SHOULD);
    board.addListTemplate(MoscowListOptions.COULD);
    board.addListTemplate(MoscowListOptions.WONT);

    return board;
  } // end generateBoard
} // end MoscowBoard

// export this class
module.exports.MoscowBoard = MoscowBoard;
