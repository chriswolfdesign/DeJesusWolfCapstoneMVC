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
    this.controller;
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

  /**
   * Generates a list with the title and color provided in the board specified by the Controller.
   * 
   * @param {integer} boardID the id of the board we are trying to add a list into.
   * @param {string} label the name of the list being generated
   * @param {colors} color the color of the list being generated
   */

  generateList(boardID, label, color) {
    this.boards[boardID].addList(label, color);
  }

  /**
   * Generates a list based on the template given, to the specified board
   * 
   * @param {integer} boardID the id of the baord we are trying to add a list into
   * @param {option} option the type of list we are trying to create
   */

  generateListTemplate(boardID, option) {
    this.boards[boardID].addListTemplate(option);
  }

  /**
   * Generates a card within a board's list
   * 
   * @param {integer} boardID
   * @param {integer} listID
   * @param {string} label
   * @param {string} text
   *  
   */

  generateTaskCard(boardID, listID, label, text) {
    this.boards[boardID].lists[listID].addTask(label, text);
  }

  /**
   * Sets the controller of this app.
   * 
   * @param {controller} Controller the controller that will send commands to this app.
   */
  setController(controller) {
    this.controller = controller;
  }



} // end App

// export this class
module.exports.App = App;
