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

window.onload = function() {
  let controller = new Controller();

  // generate a MoSCoW board
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

  /**
   * DEBUG CODE
   */
  console.log(controller);
  /**
   * END DEBUG CODE
   */

  // draw the HTML to the page
  render(controller);
}; // end window.onload

/**
 * Causes the HTML to be drawn, or redrawn, to the screen
 *
 * @param {Controller} controller responsible for generating the HTML
 */
function render(controller) {
  document.getElementById('main').innerHTML = controller.generateHTML();
} // end render

function addButtonClicked(event, controller) {
  // TODO: Implement
} // end addTaskCard