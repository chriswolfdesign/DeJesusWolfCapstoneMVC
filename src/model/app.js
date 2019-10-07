/**
 * app.js
 *
 * The JavaScript class that will wrap the entirity of our Agile Development
 * Board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */

let BoardFactory = require('./factories/board_factory.js').BoardFactory;
let BoardOptions = require('./enums/board_options.js').BoardOptions;

class App {
  /**
   * Generates the foundation for the app
   */
  constructor() {
    this.boards = [];
    this.boardFactory = new BoardFactory();
  } // end constructor

  /**
   * Generates a board from a template based on user preference
   *
   * @param {option} BoardOptions the type of board the user would like
   *                 generated
   */
  generateBoardTemplate(option) {
    this.boards.push(this.boardFactory.generateBoard(option));
  }
} // end App

// export this class
module.exports.App = App;
