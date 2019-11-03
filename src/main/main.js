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
  let controller = new Controller();

  // generate a MoSCoW board
  generateMoSCoWController(controller);

  // draw the HTML to the page
  render(controller);

}; // end window.onload

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
}

/**
 * Adds the event listener to each of the buttons as they are rendered
 *
 * @param controller the controller holding each of the buttons
 */
function addClickListeners(controller) {
  for (let i = 0; i < controller.model.boards[0].lists.length; i++) {
    let buttonID = controller.model.boards[0].lists[i].label + "AddButton";
    console.log(document.getElementById(buttonID).innerText);
    document.getElementById(buttonID).addEventListener("click", function(event) {
      let newTaskID = prompt('Please enter the new task label: ');
      let newTaskText = prompt('Please enter the new task text: ');
        controller.model.boards[0].lists[i].addTask(newTaskID, newTaskText);
        render(controller);
    });
  }
}

/**
 * Causes the HTML to be drawn, or redrawn, to the screen
 *
 * @param {Controller} controller responsible for generating the HTML
 */
function render(controller) {
  document.getElementById('main').innerHTML = controller.generateHTML();
  addClickListeners(controller);
} // end render