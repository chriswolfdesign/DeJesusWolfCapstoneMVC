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
   * Moves a task card from one list to another
   *
   * @param {HTML} newList -- the HTML representation of the new list we're moving the task card to
   * @param {HTML} movedTaskCard -- the HTML representation of the task card we're moving
   */
  moveTaskCard(newList, movedTaskCard) {
    let listIndex = this.findListIndex(newList.id);
    let taskIndices = this.getTaskIndices(movedTaskCard.id);

    // store the data that was in the moved task card
    let tempData = this.getTaskData(taskIndices[0], taskIndices[1]);

    // remove the old task card
    this.removeTaskCard(taskIndices[0], taskIndices[1]);

    // add a new task card with the same data to the new list
    this.model.boards[0].lists[listIndex].addTask(tempData[0], tempData[1]);
  }

  /**
   * Finds the list index of a list by its label
   *
   * @param {string} listLabel -- the list label we are searching for
   *
   * @return {int} the list index of the requested list if it exists
   *               -1 otherwise
   */
  findListIndex(listLabel) {
    for (let i = 0; i < this.model.boards[0].lists.length; i++) {
      if (this.model.boards[0].lists[i].label === listLabel) {
        return i;
      } // end if
    } // end for

    // if the list does not exist
    return -1;
  } // end findListIndex

  /**
   * Gets the board indices of the task card we are looking for
   *
   * @param {string} taskID -- the label of the task card we are looking for
   *
   * @return {list} -- [the list index of the task card, the task index of the task card]
   */
  getTaskIndices(taskID) {
    for (let i = 0; i < this.model.boards[0].lists.length; i++) {
      for (let j = 0; j < this.model.boards[0].lists[i].tasks.length; j++) {
        if (taskID === this.model.boards[0].lists[i].tasks[j].label) {
          return [i, j];
        } // end if
      } // end inner-for
    } // end outer-for
  } // end getTaskIndices

  /**
   * Gets the data held inside the task card
   *
   * @param {int} -- the list index of the task card we're looking for
   * @param {int} -- the task index of the task card we're looking for
   *
   * @return {list} -- [task card's label, task card's text]
   */
  getTaskData(listIndex, taskIndex) {
    return [this.model.boards[0].lists[listIndex].tasks[taskIndex].label,
            this.model.boards[0].lists[listIndex].tasks[taskIndex].text];
  }

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
} // end Controller

// export this class
module.exports.Controller = Controller;
