/**
 * sprint_backlog_board.js
 *
 * Allows us to easily generate a board that manages a Sprint Backlog
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

// let ListOptions = require('../enums/list_options.js').ListOptions;
let Board = require('./board.js').Board;
let SprintBacklogListOptions = require('../enums/sprint_backlog_list_options.js').SprintBacklogListOptions;
let SprintBacklogListFactory = require('../factories/sprint_backlog_list_factory.js').SprintBacklogListFactory;

class SprintBacklogBoard {
  /**
   * generates a Sprint Backlog Board
   *
   * @return {Board} a SprintBacklogBoard
   */
  generateBoard() {
    let board = new Board('Sprint Backlog');
    board.setListFactory(new SprintBacklogListFactory());

    board.addListTemplate(SprintBacklogListOptions.BACKLOG);
    board.addListTemplate(SprintBacklogListOptions.INPROGRESS);
    board.addListTemplate(SprintBacklogListOptions.INREVIEW);
    board.addListTemplate(SprintBacklogListOptions.COMPLETE);

    return board;
  } // end generateBoard
} // end SprintBacklogBoard

// export this class
module.exports.SprintBacklogBoard = SprintBacklogBoard;