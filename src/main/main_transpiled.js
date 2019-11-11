(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
} // end Controller

// export this class
module.exports.Controller = Controller;

},{"../model/enums/board_options.js":6,"../model/model.js":24,"../view/view.js":26}],2:[function(require,module,exports){
/**
 * main.js
 *
 * Acts as the HTML injector for our web application
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

let BoardOptions = require('../model/enums/board_options.js').BoardOptions;
let Controller = require("../controller/controller").Controller;
let View = require('../view/view.js').View;

window.onload = function() {
  let controller;

  // ask the user which board they would like
  let decision = '';
  while (decision !== 'moscow' && decision !== 'sprint') {
    decision = prompt('Which board would you like? (moscow/sprint)');
  } // end while

  if (decision === 'moscow') {
    controller = new Controller('MoSCoW Board');
    generateMoSCoWController(controller);
  } else {
    controller = new Controller('Sprint Backlog');
    generateSprintController(controller);
  } // end if-else

  // draw the HTML to the page
  render(controller);

}; // end window.onload

function generateSprintController(controller) {
  controller.generateBoardTemplate(BoardOptions.SPRINT);

  // add backlog items
  controller.generateTaskCard(0, 0, 'BL1', 'Backlog Task 1');
  controller.generateTaskCard(0, 0, 'BL2', 'Backlog Task 2');

  // add in progress items
  controller.generateTaskCard(0, 1, 'IP1', 'In Progress Task 1');
  controller.generateTaskCard(0, 1, 'IP2', 'In Progress Task 2');

  // add in review items
  controller.generateTaskCard(0, 2, 'IR1', 'In Review Task 1');
  controller.generateTaskCard(0, 2, 'IR2', 'In Review Task 2');

  // add complete items
  controller.generateTaskCard(0, 3, 'CT1', 'Complete Task 1');
  controller.generateTaskCard(0, 3, 'CT2', 'Complete Task 2');
} // end generateSprintController

/**
 * Forces the controller to generate a MoSCoW Board demonstration
 *
 * @param controller the controller generating the board
 */
function generateMoSCoWController(controller) {
  controller.generateBoardTemplate(BoardOptions.MOSCOW);

  // add Must Have Items
  controller.generateTaskCard(0, 0, 'MT1', 'Must Task 1');
  controller.generateTaskCard(0, 0, 'MT2', 'Must Task 2');

  // add Should Have Items
  controller.generateTaskCard(0, 1, 'ST1', 'Should Task 1');
  controller.generateTaskCard(0, 1, 'ST2', 'Should Task 2');

  // add Could Have Items
  controller.generateTaskCard(0, 2, 'CT1', 'Could Task 1');
  controller.generateTaskCard(0, 2, 'CT2', 'Could Task 2');

  // add Wont Have Items
  controller.generateTaskCard(0, 3, 'WT1', 'Wont Task 1');
  controller.generateTaskCard(0, 3, 'WT2', 'Wont Task 2');
} // end generateMoscowController

/**
 * Adds the event listener to each of the buttons as they are rendered
 *
 * @param controller the controller holding each of the buttons
 */
function addClickListeners(controller) {
  // generate the add button listeners
  for (let i = 0; i < controller.model.boards[0].lists.length; i++) {
    let buttonID = controller.model.boards[0].lists[i].label + "AddButton";
    document.getElementById(buttonID).addEventListener("click", function(event) {
      let newTaskID = prompt('Please enter the new task label: ');
      let newTaskText = prompt('Please enter the new task text: ');
        controller.model.boards[0].lists[i].addTask(newTaskID, newTaskText);
        render(controller);
    }); // end Event Listener
  } // end for

  // generate the listeners for editting task cards
  for (let i = 0; i < controller.model.boards[0].lists.length; i++) {
    for (let j = 0; j < controller.model.boards[0].lists[i].tasks.length; j++) {
      // console.log(controller);
      let taskID = controller.model.boards[0].lists[i].tasks[j].label + 'Text';
      console.log(taskID);
      document.getElementById(taskID).addEventListener('click', function(event) {
        let newTaskText = prompt('Please enter the new text');
        controller.editTaskText(i, j, newTaskText);
        render(controller);
      }); // end Event Listener
    } // end for each task
  } // end for each list
  
  // generate the listener for removing task cards
  for (let i = 0; i < controller.model.boards[0].lists.length; i++) {
    for (let j = 0; j < controller.model.boards[0].lists[i].tasks.length; j++) {
      let buttonID = controller.model.boards[0].lists[i].tasks[j].label + 'RemoveButton';
      document.getElementById(buttonID).addEventListener('click', function(event){
        let choice = prompt('Are you sure you would like to remove this card?');
        if (choice.toLowerCase() == 'yes') {
          controller.removeTaskCard(i, j);
          render(controller);
        }
      });
    }
  }
} // end addClickListeners

/**
 * Causes the HTML to be drawn, or redrawn, to the screen
 *
 * @param {Controller} controller responsible for generating the HTML
 */
function render(controller) {
  document.getElementById('main').innerHTML = controller.generateHTML();
  addClickListeners(controller);
} // end render

},{"../controller/controller":1,"../model/enums/board_options.js":6,"../view/view.js":26}],3:[function(require,module,exports){
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
} // end Board

// export this class
module.exports.Board = Board;

},{"../factories/list_factory.js":12,"../lists/list.js":15}],4:[function(require,module,exports){
/**
 * moscow_board.js
 *
 * A class that will generate a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */

// let ListOptions = require('../enums/list_options.js').ListOptions;
let Board = require('./board.js').Board;
let MoscowListOptions = require('../enums/moscow_list_options.js').MoscowListOptions;
let MoscowListFactory = require('../factories/moscow_list_factory.js').MoscowListFactory;

class MoscowBoard {
  /**
   * generates a MoSCoW Board
   *
   * @return {Board} a MoSCoW Board
   */
  generateBoard() {
    let board = new Board('MoSCoW Board');
    board.setListFactory(new MoscowListFactory());

    board.addListTemplate(MoscowListOptions.MUST);
    board.addListTemplate(MoscowListOptions.SHOULD);
    board.addListTemplate(MoscowListOptions.COULD);
    board.addListTemplate(MoscowListOptions.WONT);

    return board;
  } // end generateBoard
} // end MoscowBoard

// export this class
module.exports.MoscowBoard = MoscowBoard;

},{"../enums/moscow_list_options.js":9,"../factories/moscow_list_factory.js":13,"./board.js":3}],5:[function(require,module,exports){
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
},{"../enums/sprint_backlog_list_options.js":10,"../factories/sprint_backlog_list_factory.js":14,"./board.js":3}],6:[function(require,module,exports){
/**
 * board_options.js
 *
 * A JavaScript object to act as an enumeration for board choices in our
 * BoardFactory
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */

const BoardOptions = {
  MOSCOW: 'Moscow',
  SPRINT: 'Sprint Backlog'
}; // end BoardOptions

// export BoardOptions
module.exports.BoardOptions = BoardOptions;

},{}],7:[function(require,module,exports){
/**
 * colors.js
 *
 * A JavaScript object that will act as an enumeration to represent
 * colors
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

const Colors = {
  GRAY: 'gray',
  GREEN: 'green',
  YELLOW: 'yellow',
  ORANGE: 'orange',
  RED: 'red'
}; // end Colors

// export Colors
module.exports.Colors = Colors;

},{}],8:[function(require,module,exports){
/**
 * list_options.js
 *
 * A JavaScript object to act as an enumeration for list choices in our
 * ListFactory
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

const ListOptions = {
  MUST: 'Must',
  SHOULD: 'Should',
  COULD: 'Could',
  WONT: 'Wont',
  BACKLOG: 'Backlog',
  INPROGRESS: 'InProgress',
  INREVIEW: 'InReview',
  COMPLETE: 'Complete'
}; // end ListOptions

// export ListOptions
module.exports.ListOptions = ListOptions;

},{}],9:[function(require,module,exports){
/**
 * moscow_list_options.js
 *
 * A JavaScript option to act as enumeration for list choices for only
 * MoSCoW boards
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

const MoscowListOptions = {
  MUST: 'Must',
  SHOULD: 'Should',
  COULD: 'Could',
  WONT: 'Wont'
} // end MoscowListOptions

// export MoscowListOptions
module.exports.MoscowListOptions = MoscowListOptions;
},{}],10:[function(require,module,exports){
/**
 * sprint_backlog_list_options.js
 *
 * A JavaScript object to act as an enumeration for list choices for our
 * Sprint Backlog
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

const SprintBacklogListOptions = {
  BACKLOG: 'Backlog',
  INPROGRESS: 'InProgress',
  INREVIEW: 'InReview',
  COMPLETE: 'Complete'
}; // end SprintBacklogListOptions

// export SprintBacklogListOptions
module.exports.SprintBacklogListOptions = SprintBacklogListOptions;

},{}],11:[function(require,module,exports){
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

},{"../boards/moscow_board.js":4,"../boards/sprint_backlog_board.js":5,"../enums/board_options.js":6}],12:[function(require,module,exports){
/**
 * list_factory.js
 *
 * The JavaScript class that will allow us to easily autogenerate template
 * lists for our Agile Development Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

let ListOptions = require('../enums/list_options.js').ListOptions;
let MustList = require('../lists/moscow_lists/must_list.js').MustList;
let ShouldList = require('../lists/moscow_lists/should_list.js').ShouldList;
let CouldList = require('../lists/moscow_lists/could_list.js').CouldList;
let WontList = require('../lists/moscow_lists/wont_list.js').WontList;
let BacklogList = require('../lists/sprint_backlog_lists/backlog_list.js').BacklogList;
let InProgressList = require('../lists/sprint_backlog_lists/in_progress_list.js').InProgressList;
let InReviewList = require('../lists/sprint_backlog_lists/in_review_list.js').InReviewList;
let CompleteList = require('../lists/sprint_backlog_lists/complete_list.js').CompleteList;

class ListFactory {
  constructor() {
    this.mustList = new MustList();
    this.shouldList = new ShouldList();
    this.couldList = new CouldList();
    this.wontList = new WontList();
    this.backlogList = new BacklogList();
    this.inProgressList = new InProgressList();
    this.inReviewList = new InReviewList();
    this.completeList = new CompleteList();
} // end constructor

  /**
   * generates a list based on the parameter passed in
   *
   * @param {ListOption} option the type of list the user wants generated
   *
   * @return {List} a list set up based on user preference
   */
  generateList(option) {
    switch (option) {
      case ListOptions.MUST:
        return this.mustList.generateList();
      case ListOptions.SHOULD:
        return this.shouldList.generateList();
      case ListOptions.COULD:
        return this.couldList.generateList();
      case ListOptions.WONT:
        return this.wontList.generateList();
      case ListOptions.BACKLOG:
        return this.backlogList.generateList();
      case ListOptions.INPROGRESS:
        return this.inProgressList.generateList();
      case ListOptions.INREVIEW:
        return this.inReviewList.generateList();
      case ListOptions.COMPLETE:
        return this.completeList.generateList();
      default:
        return null;
    } // end switch
  } // end generateList
} // end ListFactory

// export this class
module.exports.ListFactory = ListFactory;

},{"../enums/list_options.js":8,"../lists/moscow_lists/could_list.js":16,"../lists/moscow_lists/must_list.js":17,"../lists/moscow_lists/should_list.js":18,"../lists/moscow_lists/wont_list.js":19,"../lists/sprint_backlog_lists/backlog_list.js":20,"../lists/sprint_backlog_lists/complete_list.js":21,"../lists/sprint_backlog_lists/in_progress_list.js":22,"../lists/sprint_backlog_lists/in_review_list.js":23}],13:[function(require,module,exports){
/**
 * moscow_list_factory.js
 *
 * The JavaScript class that will allows us to easily autogenerate template
 * lists for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

let MoscowListOptions = require('../enums/moscow_list_options.js').MoscowListOptions;
let MustList = require('../lists/moscow_lists/must_list.js').MustList;
let ShouldList = require('../lists/moscow_lists/should_list.js').ShouldList;
let CouldList = require('../lists/moscow_lists/could_list.js').CouldList;
let WontList = require('../lists/moscow_lists/wont_list.js').WontList;

class MoscowListFactory {
  constructor() {
    this.mustList = new MustList();
    this.shouldList = new ShouldList();
    this.couldList = new CouldList();
    this.wontList = new WontList();
  } // end constructor

  /**
   * generates a list based on the parameter passed in
   *
   * @param {MoscowListOption} option the type of list the user wants generated
   *
   * @return {List} a list set up based on the users preferences
   */
  generateList(option) {
    switch (option) {
      case MoscowListOptions.MUST:
        return this.mustList.generateList();
      case MoscowListOptions.SHOULD:
        return this.shouldList.generateList();
      case MoscowListOptions.COULD:
        return this.couldList.generateList();
      case MoscowListOptions.WONT:
        return this.wontList.generateList();
      default:
        return null;
    } // end switch
  } // end generateList
} // end MoscowListFactory

// export this class
module.exports.MoscowListFactory = MoscowListFactory;
},{"../enums/moscow_list_options.js":9,"../lists/moscow_lists/could_list.js":16,"../lists/moscow_lists/must_list.js":17,"../lists/moscow_lists/should_list.js":18,"../lists/moscow_lists/wont_list.js":19}],14:[function(require,module,exports){
/**
 * sprint_backlog_list_factory.js
 *
 * The JavaScript class that will allow us to easily autogenerate template
 * lists for a Sprint Backlog Board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

let SprintBacklogListOptions = require('../enums/sprint_backlog_list_options.js').SprintBacklogListOptions;
let BacklogList = require('../lists/sprint_backlog_lists/backlog_list.js').BacklogList;
let InProgressList = require('../lists/sprint_backlog_lists/in_progress_list.js').InProgressList;
let InReviewList = require('../lists/sprint_backlog_lists/in_review_list.js').InReviewList;
let CompleteList = require('../lists/sprint_backlog_lists/complete_list.js').CompleteList;

class SprintBacklogListFactory {
  constructor() {
    this.backlogList = new BacklogList();
    this.inProgressList = new InProgressList();
    this.inReviewList = new InReviewList();
    this.completeList = new CompleteList();
  } // end constructor

  /**
   * generates a list based on the parameter passed in
   *
   * @param {SprintBacklogListOption} option the type of list the user wants generated
   *
   * @return {List} a list set up based on the user's preferences
   */
  generateList(option) {
    switch (option) {
      case SprintBacklogListOptions.BACKLOG:
        return this.backlogList.generateList();
      case SprintBacklogListOptions.INPROGRESS:
        return this.inProgressList.generateList();
      case SprintBacklogListOptions.INREVIEW:
        return this.inReviewList.generateList();
      case SprintBacklogListOptions.COMPLETE:
        return this.completeList.generateList();
      default:
        return null;
    } // end switch
  } // end generateList
} // end SprintBacklogListFactory

// export this class
module.exports.SprintBacklogListFactory = SprintBacklogListFactory;
},{"../enums/sprint_backlog_list_options.js":10,"../lists/sprint_backlog_lists/backlog_list.js":20,"../lists/sprint_backlog_lists/complete_list.js":21,"../lists/sprint_backlog_lists/in_progress_list.js":22,"../lists/sprint_backlog_lists/in_review_list.js":23}],15:[function(require,module,exports){
/**
 * list.js
 *
 * The JavaScript class that behaves as a List on our Agile Development
 * Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

const Colors = require('../enums/colors.js').Colors;
const TaskCard = require('../task_card.js').TaskCard;

class List {
  /**
   * Generates the List object
   *
   * @param {string} label the label for the this list
   * @param {colors} color the background color of this list
   */
  constructor(label, color) {
    // if user did not define a color
    if (color === undefined) {
      color = Colors.GRAY;
    } // end if

    this.label = label;
    this.color = color;
    this.tasks = [];
  } // end constructor

  /**
   * adds a new task card to the tasks field
   *
   * @param {string} label the label for the new task card
   * @param {string} text the text for the new task card
   */
  addTask(label, text) {
    this.tasks.push(new TaskCard(label, text));
  } // end addTask

  /**
   * Removes a task card from the tasks field
   *
   * @param {integer} cardID the ID of the being removed.
   */

  removeTaskCard(cardID) {
    this.tasks.splice(cardID, 1);
  } // end removeTaskCard
} // end List

// export this class
module.exports.List = List;

},{"../enums/colors.js":7,"../task_card.js":25}],16:[function(require,module,exports){
/**
 * could_list.js
 *
 * A class that will generate a Should Have list for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

let List = require('../list.js').List;
let Colors = require('../../enums/colors.js').Colors;

class CouldList {
  // Constructor deliberately left out

  /**
   * generates a Could Have List for MoSCoW board
   *
   * @return {List} a Could Have List
   */
  generateList() {
    return new List('Could', Colors.ORANGE);
  } // end generateList
} // end CouldList

// export this class
module.exports.CouldList = CouldList;

},{"../../enums/colors.js":7,"../list.js":15}],17:[function(require,module,exports){
/**
 * must_list.js
 *
 * A class that will generate a Must Have List for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

let List = require('../list.js').List;
let Colors = require('../../enums/colors.js').Colors;

class MustList {
  // Constructor delibrately left out

  /**
   * generates a Must Have List for MoSCoW board
   *
   * @return {List} a Must Have List
   */
  generateList() {
    return new List('Must', Colors.GREEN);
  } // end generateList
} // end MustList

// export this class
module.exports.MustList = MustList;

},{"../../enums/colors.js":7,"../list.js":15}],18:[function(require,module,exports){
/**
 * should_list.js
 *
 * A class that will generate a Should Have list for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

let List = require('../list.js').List;
let Colors = require('../../enums/colors.js').Colors;

class ShouldList {
  // Constructor delibrately left out

  /**
   * generates a Should Have List for MoSCoW board
   *
   * @return {List} a Should Have List
   */
  generateList() {
    return new List('Should', Colors.YELLOW);
  } // end generateList
} // end MustList

// export this class
module.exports.ShouldList = ShouldList;

},{"../../enums/colors.js":7,"../list.js":15}],19:[function(require,module,exports){
/**
 * wont_list.js
 *
 * A class that will generate a Wont Have list for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

let List = require('../list.js').List;
let Colors = require('../../enums/colors.js').Colors;

class WontList {
  // Constructor delibrately left out

  /**
   * generates a Wont Have List for MoSCoW board
   *
   * @return {List} a Wont Have List
   */
  generateList() {
    return new List('Wont', Colors.RED);
  } // end generateList
} // end WontList

// export this class
module.exports.WontList = WontList;

},{"../../enums/colors.js":7,"../list.js":15}],20:[function(require,module,exports){
/**
 * backlog_list.js
 *
 * A class that will generate a Backlog list for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

let List = require('../list.js').List;
let Colors = require('../../enums/colors.js').Colors;

class BacklogList {
  // Constructor deliberately left out

  /**
   * generates a Backlog LIst for Sprint Backlog board
   *
   * @return {List} a Backlog List
   */
  generateList() {
    return new List('Backlog', Colors.GRAY);
  } // end generateList
} // end BacklogList

// export this class
module.exports.BacklogList = BacklogList;
},{"../../enums/colors.js":7,"../list.js":15}],21:[function(require,module,exports){
/**
 * complete_list.js
 *
 * A class that will generate a Complete List for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

let List = require('../list.js').List;
let Colors = require('../../enums/colors.js').Colors;

class CompleteList {
  // Constructor deliberately left out

  /**
   * generates a Complete List for Sprint Backlog board
   *
   * @return {List} a Complete List
   */
  generateList() {
    return new List('Complete', Colors.GRAY);
  } // end generateList
} // end CompleteList

// export this module
module.exports.CompleteList = CompleteList;
},{"../../enums/colors.js":7,"../list.js":15}],22:[function(require,module,exports){
/**
 * in_progress_list.js
 *
 * A class that will generate an In Progress list for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

let List = require('../list.js').List;
let Colors = require('../../enums/colors.js').Colors;

class InProgressList {
  // Constructor deliberately left out

  /**
   * generates an In Progress List for Sprint Backlog board
   *
   * @return {List} an In Progress List
   */
  generateList() {
    return new List('In Progress', Colors.GRAY);
  } // end generateList
} // end InProgressList

// export this class
module.exports.InProgressList = InProgressList;
},{"../../enums/colors.js":7,"../list.js":15}],23:[function(require,module,exports){
/**
 * in_review_list.js
 *
 * A class that will generate an In Review list for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

let List = require('../list.js').List;
let Colors = require('../../enums/colors.js').Colors;

class InReviewList {
  // Constructor deliberately left out

  /**
   * generates an In Review List for Sprint Backlog board
   *
   * @return {List} an InReviewList
   */
  generateList() {
    return new List('In Review', Colors.GRAY);
  } // end generateList
} // end InReviewList

// export this class
module.exports.InReviewList = InReviewList;
},{"../../enums/colors.js":7,"../list.js":15}],24:[function(require,module,exports){
/**
 * model.js
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

class Model {
  /**
   * Generates the foundation for the app
   *
   * @param {String} the title of this board
   */
  constructor(title) {
    this.title = title;
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
  } // end generateBoardTemplate

  /**
   * Removes a board from the list of boards.
   *
   * @param {integer} boardID the id of the to be removed
   */
  removeBoard(boardID) {
    this.boards.splice(boardID, 1);
  } // end removeBoard

  /**
   * Generates a list with the title and color provided in the board specified by the Controller.
   *
   * @param {integer} boardID the id of the board we are trying to add a list into.
   * @param {string} label the name of the list being generated
   * @param {colors} color the color of the list being generated
   */
  generateList(boardID, label, color) {
    this.boards[boardID].addList(label, color);
  } // end generateList

  /**
   * Generates a list based on the template given, to the specified board
   *
   * @param {integer} boardID the id of the baord we are trying to add a list into
   * @param {option} option the type of list we are trying to create
   */
  generateListTemplate(boardID, option) {
    this.boards[boardID].addListTemplate(option);
  } // end generateListTemplate

  /**
   * Removes a list from a specified board.
   * @param {integer} boardID the ID of the board from whom we want to remove a list from
   * @param {integer} listID the ID of the list we are removing
   */
  removeList(boardID, listID) {
    this.boards[boardID].removeList(listID);
  } // end removeList

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
    this.boards[boardID].generateTaskCard(listID, label, text);
  } // end generateTaskCard

  /**
   * Remove a task card from the specified list from a specified board.
   * @param {integer} listID the ID of the list we're removing a card from.
   * @param {integer} taskID the ID of the card we're removing.
   */
  removeTaskCard(listID, taskID) {
    this.boards[0].removeTaskCard(listID, taskID);
  } // end removeTaskCard

  /**
   * Sets the controller of this app.
   *
   * @param {controller} Controller the controller that will send commands to this app.
   */
  setController(controller) {
    this.controller = controller;
  } // end setController
} // end App

// export this class
module.exports.Model = Model;

},{"./enums/board_options.js":6,"./factories/board_factory.js":11}],25:[function(require,module,exports){
/**
 * task_card.js
 *
 * The JavaScript class that represents a Task Card in our Agile Development
 * Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

class TaskCard {
  /**
   * Generates the TaskCard object
   *
   * @param {string} label the label representing this task card
   * @param {string} text the text this task card should display
   */
  constructor(label, text) {
    this.label = label;
    this.text = text;
  } // end constructor
} // end class

// export the class
module.exports.TaskCard = TaskCard;

},{}],26:[function(require,module,exports){
/**
 * view.js
 *
 * The class responsible for generating the HTML based off our current model
 *
 * @author Chris Wolf
 * @version 2.0.0 (October 21, 2019)
 */

let Color = require('../model/enums/colors.js').Colors;

class View {
  // Intentionally no constructor

  // FIXME: There must be a better way of generating style into this CSS

  /**
   * generates HTML based on the current model
   *
   * @param {Model} model the model we are generating HTML for
   *
   * @return {string} the HTML for model
   */
  generateHTML(model) {
    let html = '<html>';
    html += this.generateStyle();
    html += this.generateHeaderHTML(model);
    html += this.generateListsHTML(model);
    html += '</html>';
    return html;
  } // end generateHTML

  /**
   * Generates the style for this HTML page
   *
   * @return {string} the HTML that specifies the style
   */
  generateStyle() {
    let style = '<style> body {';
    style += 'background-color: purple;';
    style += 'color: white;';
    style += '}';
    style += '</style>';
    return style;
  }

  /**
   * generates the header based on the current model
   *
   * @param {Model} model the model we are generating the header HTML for
   *
   * @return {String} the HTML for the header of the model
   */
  generateHeaderHTML(model)  {
    let html = '<div style=text-align:center;>'
    html += '<h1><u>'
    html += model.title;
    html += '</u></h1></div>';
    return html;
  }; // end generateHeaderHTML

  /**
   * generates all of the lists inside of the model
   *
   * @param {Model} model the model we are displaying the lists for
   *
   * @return {string} the HTML for the lists
   */
  generateListsHTML(model)  {
    let html = '<div style=\'height: 80vh;\'>';

    // for every list, generate the HTML
    for(var i = 0; i < model.boards[0].lists.length; i++) {
      html += '<div id=\'' + model.boards[0].lists[i].label + '\' style=' + this.generateListStyle(model.boards[0].lists[i])
        + '; position: fixed;><h1><u>' + model.boards[0].lists[i].label + '</u></h1>' +
        this.generateIndividualListHTML(model.boards[0].lists[i]) +
          this.generateButtonHTML(model.boards[0].lists[i].label) +
        '</div>';
    } // end for loop

    return html;
  }; // end generateListsHTML

  /**
   * generates the list passed in
   *
   * @param {List} list the list whose HTML is being generated
   *
   * @return {string} the HTML representation of the given list
   */
  generateIndividualListHTML(list) {
    let html = '<div>'
    html += this.generateTaskCardsHTML(list);
    html += '</div>';
    return html;
  } // end generateIndividualListHTML

  /**
   * generates the HTML for all of the task cards in a list
   *
   * @param {List} list the list whose task cards we are generating
   *
   * @return {string} the HTML representation of all of the task cards in the
   *                  list
   */
  generateTaskCardsHTML(list) {
    let html = '<div>';

    // for each task card, generate the HTML
    for(var i = 0; i < list.tasks.length; i++) {
      html += this.generateIndividualTaskCardHTML(list.tasks[i]);
    } // end for loop

    html += '</div>';

    return html;
  } // end generateTaskCardsHTML

  /**
   * generates the HTML for an individual task card
   *
   * @param {TaskCard} task the task card we are generating HTML for
   *
   * @return {string} the HTML representation of the task card
   */
  generateIndividualTaskCardHTML(task) {
    let html = '<div id=\'' + task.label + '\' ' + this.generateTaskCardStyle() + '>';

    html += '<div id=' + task.label + 'Text>' + task.text + '</div>';

    html += this.generateRemoveButtonHTML(task);

    html += '</div>';

    return html;
  } // end generateIndividualTaskCardHTML

  generateRemoveButtonHTML(task) {
    let buttonID = task.label + "RemoveButton";
    return '</br><button id=' + buttonID + ' style=\'background-color: red; color: white\'>' +
      'X</button>';
  }

  /**
   * generates the style for a task card
   *
   * @return {string} the HTML representation of the style of a task card
   */
  generateTaskCardStyle() {
    let style = 'style =\'';
    style += 'background-color: grey;';
    style += 'width: 80%;';
    style += 'height: 15vh;';
    style += 'margin-left: auto;';
    style += 'margin-right: auto;';
    style += 'margin-bottom: 10px;';
    style += 'padding-top: 5px;';
    style += 'border-radius: 5px;';
    style += 'font-size: 24px;';
    style += '\'';
    return style;
  }

  /**
   * generates the style for the individual list
   *
   * @param {List} list the list we are trying to generate style for
   *
   * @return {string} the HTML for the style of this
   */
  generateListStyle(list) {
    let style = '\'';
    style += 'display: inline-block;';
    style += 'vertical-align: top;';
    style += 'height: 80vh;';
    style += 'text-align: center;'
    style += 'border: 5px solid black;';
    style += 'border-radius: 5px;';
    style += 'background-color: ' + this.generateListBackgroundColor(list) +
      ';';
    style += 'color: black;';
    style += 'margin-left: 5px;';
    style += 'width: 23%';
    style += '\'';
    return style;
  } // end generateListStyle

  /**
   * generates the background color based on the list's color property
   *
   * @param {List} list the list whose color we are calculating
   *
   * @return {string} string representation of the list's color
   */
  generateListBackgroundColor(list) {
    switch(list.color) {
      case Color.GREEN:
        return 'green';
      case Color.YELLOW:
        return 'yellow';
      case Color.ORANGE:
        return 'orange';
      case Color.RED:
        return 'red';
      default:
        return 'white'
    } // end switch case
  } // end generateListBackgroundColor

  generateButtonHTML(parentID) {
    let thisID = parentID + 'AddButton';
    return "<button id=\'" + thisID + "\' style=\'background-color: blue;color: white;\'> + </button>";
  } // end generateButtonHTML
} // end View

// export this class
module.exports.View = View;

},{"../model/enums/colors.js":7}]},{},[2]);
