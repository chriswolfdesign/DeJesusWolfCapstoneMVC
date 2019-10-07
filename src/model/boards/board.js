/**
 * board.js
 *
 * A JavaScript class to represent a board in our Agile Development Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7 ,2019)
 */

List = require('../lists/list.js').List;
ListFactory = require('../factories/list_factory.js').ListFactory;

class Board {
  /**
   * Generates the board object
   *
   * @param {string} the title of the board
   */
  constructor(title) {
    this.title = title;
    this.lists = [];
    this.listFactory = new ListFactory();
  } // end constructor

  /**
   * adds a new list to our board
   *
   * @param {string} label the label for our new list
   * @param {Colors} color the optional color value for our list
   */
  addList(label, color) {
    this.lists.push(new List(label, color));
  }

  /** 
   * adds a new list using the ListFactory
   *
   * @param {ListOption} option the type of list we want to generate
   */
  addListTemplate(option) {
    this.lists.push(this.listFactory.generateList(option));
  }
} // end Board

// export this class
module.exports.Board = Board;
