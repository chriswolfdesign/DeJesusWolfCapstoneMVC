/**
 * board_factory.js
 *
 * The JavaScript class that will allow us to easily autogenerate template
 * boards for our Agile Development Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */

let BoardOptions = require('../enums/board_options.js').BoardOptions;
let MoscowBoard = require('../boards/moscow_board.js').MoscowBoard;
let SprintBacklogBoard = require('../boards/sprint_backlog_board.js').SprintBacklogBoard;

class BoardFactory {
  constructor() {
    this.moscowBoard = new MoscowBoard();
    this.sprintBoard = new SprintBacklogBoard();
  } // end constructor

  /**
   * generates a board based on the parameter passed in
   *
   * @param {BoardOption} option the type of the board the user wants generated
   *
   * @return {Board} a board based on user preference
   */
  generateBoard(option) {
    switch (option) {
      case BoardOptions.MOSCOW:
        return this.moscowBoard.generateBoard();
      case BoardOptions.SPRINT:
        return this.sprintBoard.generateBoard();
      default:
        return null;
    } // end switch case
  } // end generateBoard
} // end BoardFactory

// export this class
module.exports.BoardFactory = BoardFactory;
