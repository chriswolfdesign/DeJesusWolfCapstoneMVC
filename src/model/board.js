/**
 * board.js
 *
 * A JavaScript class to represent a board in our Agile Development Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7 ,2019)
 */

class Board {
  /**
   * Generates the board object
   *
   * @param {string} the title of the board
   */
  constructor(title) {
    this.title = title;
    this.lists = [];
  } // end constructor
} // end Board

// export this class
module.exports.Board = Board;
