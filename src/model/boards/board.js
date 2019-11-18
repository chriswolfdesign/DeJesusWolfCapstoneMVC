/**
 * board.js
 *
 * A JavaScript class to represent a board in our Agile Development Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */

List = require('../lists/list.js').List;
ListFactory = require('../factories/list_factory.js').ListFactory;

class Board {
  /**
   * Generates the board object
   *
   * @param {string} title the title of the board
   */
  constructor(title) {
    this.title = title;
    this.lists = [];
    this.listFactory = new ListFactory();
  } // end constructor

  /**
   * sets listFactory to something more specific
   *
   * @param {ListFactory} factory the new factory
   */
  setListFactory(factory) {
    this.factory = factory;
  }

  /**
   * adds a new list to our board
   *
   * @param {string} label the label for our new list
   * @param {Colors} color the optional color value for our list
   */
  addList(label, color) {
    this.lists.push(new List(label, color));
  } // end addList

  /**
   * Creates a task card within the specified list.
   *
   * @param {integer} listID the list of we are trying to add a card to
   * @param {string} label the label of the new task card
   * @param {string} text the text in the new task card
   */
   generateTaskCard(listID, label, text) {
     this.lists[listID].addTask(label, text);
   } // end generateTaskCard

  /**
   * Removes a task card from a specified list.
   * @param {integer} listID the ID we are removing a card from.
   * @param {integer} cardID the ID of the card we are removing.
   */
  removeTaskCard(listID, cardID) {
    this.lists[listID].removeTaskCard(cardID);
  } // end removeTaskCard

  /**
   * Removes the specified list.
   *
   * @param {integer} listID the ID of a list we are trying to remove
   */
  removeList(listID) {
    this.lists.splice(listID, 1);
  } // end removeList

  /**
   * adds a new list using the ListFactory
   *
   * @param {ListOption} option the type of list we want to generate
   */
  addListTemplate(option) {
    this.lists.push(this.listFactory.generateList(option));
  } // end addListTemplate

  loadLists(lists){
    var nlist;
    this.lists = []
    for(var list of lists){
      nlist = new List(list.label, list.color);
      nlist.loadTasks(list.tasks);
      this.lists.push(nlist);
    }
  }
} // end Board

// export this class
module.exports.Board = Board;
