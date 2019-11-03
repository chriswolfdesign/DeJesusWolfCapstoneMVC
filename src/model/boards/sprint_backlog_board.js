/**
 * sprint_backlog_board.js
 *
 * Allows us to easily generate a board that manages a Sprint Backlog
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

let ListOptions = require('../enums/list_options.js').ListOptions;
let Board = require('./board.js').Board;

class SprintBacklogBoard {
  /**
   * generates a Sprint Backlog Board
   *
   * @return {Board} a SprintBacklogBoard
   */
  generateBoard() {
    let board = new Board('Sprint Backlog');

    board.addListTemplate(ListOptions.BACKLOG);
    board.addListTemplate(ListOptions.INPROGRESS);
    board.addListTemplate(ListOptions.INREVIEW);
    board.addListTemplate(ListOptions.COMPLETE);

    return board;
  } // end generateBoard
} // end SprintBacklogBoard

// export this class
module.exports.SprintBacklogBoard = SprintBacklogBoard;