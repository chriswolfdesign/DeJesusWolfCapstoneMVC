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
