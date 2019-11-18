let Model = require('../model/model.js').Model;
let View = require('../view/view.js').View;
let BoardOptions = require('../model/enums/board_options.js').BoardOptions;

class Controller{
  constructor(boardName) {
    this.model = new Model(boardName);
    this.model.setController(this);
    this.view = new View();
    // this.generateBoardTemplate(BoardOptions.MOSCOW);
  } // end constructor

  /**
   * calls on the model to create a new board from a template
   *
   * @param {BoardOption} the template we are using to build a new board
   */
  generateBoardTemplate(option) {
    this.model.generateBoardTemplate(option);
  } // end generateBoardTemplate

  /**
   * Changes the text in a task card
   *
   * @param listIndex which list the task card is in
   * @param taskIndex which task card we are changing
   * @param newTaskText the text to change the task card to
   */
  editTaskText(listIndex, taskIndex, newTaskText) {
    if (newTaskText !== '' && newTaskText !== null) {
      this.model.boards[0].lists[listIndex].tasks[taskIndex].text = newTaskText;
    } // end if
  } // end editTaskText

  /**
   * removes a board from our model
   *
   * @param {string} boardID the id for the board we are removing
   */
  removeBoard(boardID) {
    this.model.removeBoard(boardID);
  } // end removeBoard

  /**
   * generates a list with the specific credentials
   *
   * @param {string} boardID the board to add the list to
   * @param {string} label the label for the new list
   * @param {Colors} the color of the new list
   */
  generateList(boardID, label, color) {
    this.model.generateList(boardID, label, color);
  } // end generateList

  /**
   * removes a list from a board
   *
   * @param {string} boardID the board we are removing a list from
   * @param {string} listID the list we are removing
   */
  removeList(boardID, listID) {
    this.model.removeList(boardID, listID);
  } // end removeList

  /**
   * generates a list from a template
   *
   * @param {string} boardID the board we are adding a list to
   * @param {ListOption} option the template we would like to build a list from
   */
  generateListTemplate(boardID, option) {
    this.model.generateListTemplate(boardID, option);
  } // end generateListTemplate

  /**
   * generates a task card with the given credentials
   *
   * @param {string} boardID the board we are adding a task card to
   * @param {string} listID the list we are adding a task card to
   * @param {string} label the label for the new task card
   * @param {string} text the text for the new task card
   */
  generateTaskCard(boardID, listID, label, text) {
    this.model.generateTaskCard(boardID, listID, label, text);
  } // end generateTaskCard

  /**
   * removes a task card from a list
   *
   * @param {string} boardID the board from which we are removing a task card
   * @param {string} listID the list from which we are removing a task card
   * @param {string} cardID the task we are removing
   */
  removeTaskCard(list, task) {
    this.model.removeTaskCard(list, task);
  } // end removeTaskCard

  /**
   * getter for model
   *
   * @return {App} the model this controller controls
   */
  getModel() {
    return this.model;
  } // end getModel

  /**
   * Calls the view class to generate HTML based on the given model
   *
   * @return {String} html based off of model
   */
  generateHTML() {
    return this.view.generateHTML(this.model);
  } // end generateHTML

  /**
   * Sets the values within model to the values loaded from a JSON file. 
   * 
   * @param {object} board the board we are trying to load into model
   */

  loadBoards(model){
    this.model.loadBoards(model);
  }


} // end Controller



// export this class
module.exports.Controller = Controller;
