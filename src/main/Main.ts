/**
 * main.js
 *
 * Acts as the HTML injector for our web application
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

import { BoardOptions } from '../model/enums/BoardOptions';
import { Controller } from '../controller/Controller';
import { Model } from '../model/Model';
import interact from 'interactjs';
import { Project } from '../model/Project';

let controller: Controller;  // I really don't like that this is global, let's look into other options

window.onload = function (): void {

  // // ask the user which board they would like
  // let decision: string = '';
  // while (decision !== 'moscow' && decision !== 'sprint') {
  //   decision = prompt('Which board would you like? (moscow/sprint)');
  // } // end while
  //
  // if (decision === 'moscow') {
  //   controller = new Controller('MoSCoW Board');
  //   generateMoSCoWController(controller);
  // } else {
  //   controller = new Controller('Sprint Backlog');
  //   generateSprintController(controller);
  // } // end if-else
  //
  // // draw the HTML to the page
  // render(controller);

  let decision: string = '';

  while (decision === '') {
    decision = prompt('What is the name of your project? ');
  }

  controller = new Controller(decision);

  // console.log(controller);

  render(controller);

}; // end window.onload

/**
 * sets up a basic Sprint Backlog Board
 *
 * @return {board} a Sprint Backlog board with predefined tasks
 */
// function generateSprintController(controller: Controller): void {
//   controller.generateProject("Test-Sprint");
//   controller.generateBoardTemplate(BoardOptions.SPRINT);
//
//   // add backlog items
//   controller.generateTaskCard(0, 0, 'BL1', 'Backlog Task 1');
//   controller.generateTaskCard(0, 0, 'BL2', 'Backlog Task 2');
//
//   // add in progress items
//   controller.generateTaskCard(0, 1, 'IP1', 'In Progress Task 1');
//   controller.generateTaskCard(0, 1, 'IP2', 'In Progress Task 2');
//
//   // add in review items
//   controller.generateTaskCard(0, 2, 'IR1', 'In Review Task 1');
//   controller.generateTaskCard(0, 2, 'IR2', 'In Review Task 2');
//
//   // add complete items
//   controller.generateTaskCard(0, 3, 'CT1', 'Complete Task 1');
//   controller.generateTaskCard(0, 3, 'CT2', 'Complete Task 2');
// } // end generateSprintController

/**
 * Forces the controller to generate a MoSCoW Board demonstration
 *
 * @param controller the controller generating the board
 */
// function generateMoSCoWController(controller: Controller): void {
//   controller.generateProject("Test-MoSCoW")
//   controller.generateBoardTemplate(BoardOptions.MOSCOW);
//
//   // add Must Have Items
//   controller.generateTaskCard(0, 0, 'MT1', 'Must Task 1');
//   controller.generateTaskCard(0, 0, 'MT2', 'Must Task 2');
//
//   // add Should Have Items
//   controller.generateTaskCard(0, 1, 'ST1', 'Should Task 1');
//   controller.generateTaskCard(0, 1, 'ST2', 'Should Task 2');
//
//   // add Could Have Items
//   controller.generateTaskCard(0, 2, 'CT1', 'Could Task 1');
//   controller.generateTaskCard(0, 2, 'CT2', 'Could Task 2');
//
//   // add Wont Have Items
//   controller.generateTaskCard(0, 3, 'WT1', 'Wont Task 1');
//   controller.generateTaskCard(0, 3, 'WT2', 'Wont Task 2');
// } // end generateMoscowController

/**
 * Adds the event listener to each of the buttons as they are rendered
 *
 * @param controller the controller holding each of the buttons
 */
function addClickListeners(controller: Controller): void {
  // generate the add button listeners
  for (let i = 0; i < controller.getModel().getProjects().getActiveBoard().getLists().length; i++) {
    let buttonID = controller.getModel().getProjects().getActiveBoard().getLists()[i].getLabel() + 'AddButton';
    document.getElementById(buttonID).addEventListener('click', function (event) {
      let newTaskText = prompt('Please enter the new task text: ');
      controller.getModel().getProjects().generateTaskCard(i, newTaskText);
      render(controller);
    }); // end Event Listener
  } // end for

  // generate the listeners for editting task cards
  for (let i = 0; i < controller.getModel().getProjects().getActiveBoard().getLists().length; i++) {
    for (let j = 0; j < controller.getModel().getProjects().getActiveBoard().getLists()[i].getTasks().length; j++) {
      let taskID = controller.getModel().getProjects().getActiveBoard().getLists()[i].getTasks()[j].getLabel() + 'TextField';
      document.getElementById(taskID).addEventListener('click', function (event) {
        let newTaskText = prompt('Please enter the new text', controller.getModel().getProjects().getActiveBoard().getLists()[i].getTasks()[j].getText());
        controller.editTaskText(i, j, newTaskText);
        render(controller);
      }); // end Event Listener
    } // end for each task
  } // end for each list

  // generate the listener for removing task cards
  for (let i = 0; i < controller.getModel().getProjects().getActiveBoard().getLists().length; i++) {
    for (let j = 0; j < controller.getModel().getProjects().getActiveBoard().getLists()[i].getTasks().length; j++) {
      let buttonID = controller.getModel().getProjects().getActiveBoard().getLists()[i].getTasks()[j].getLabel() + 'RemoveButton';
      document.getElementById(buttonID).addEventListener('click', function (event) {
        let choice = confirm('Delete this task card?');
        if (choice) {
          controller.removeTaskCard(i, j);
          render(controller);
        } // end if
      }); // end buttonID
    } // end inner for loop
  } // end outer for loop

  document.getElementById("save").addEventListener('click', function (event) {
    var temp = controller;
    var name = prompt("Enter the file name:");
    const data = JSON.stringify(controller.getModel().getProjects())
    const blob = new Blob([data], { type: 'text/plain' })
    const e = document.createEvent('MouseEvents'),
      a = document.createElement('a');
    a.download = name + ".json";
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    e.initEvent('click', true, false);
    a.dispatchEvent(e);
  });

  document.getElementById("submit").addEventListener('click', function (event) {
    let file = (<HTMLInputElement>document.getElementById("file-input")).files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (event) {
        var new_project: Project = <Project>JSON.parse((<string>event.target.result));
        controller.loadProject(new_project);
        render(controller);
      };
      reader.onerror = function (event) {
        alert("Error reading file.");
      };
    }
  });


} // end addClickListeners

/**
 * Causes the HTML to be drawn, or redrawn, to the screen
 *
 * @param {Controller} controller responsible for generating the HTML
 */
function render(controller: Controller): void {
  document.getElementById('main').innerHTML = controller.generateHTML();
  addClickListeners(controller);
} // end render

// Set up interact
interact('.draggable').draggable({
  inertia: true,
  autoscroll: true,
  onmove: dragMoveListener,
  onend: dropped
}); // end interact-draggable

interact('.dropzone').dropzone({
  accept: '.draggable',
  overlap: 0.5,
  ondrop: function (event) {
    controller.moveTaskCard(event.target, event.relatedTarget);
    render(controller);
  }, // end ondrop
  ondragenter: function (event) {
    // console.log(event.target);
    event.target.style.border = '5px solid white';
  }, // end ondragenter
  ondragleave: function (event) {
    event.target.style.border = '5px solid black';
  } // end ondragleave
}); // end interact-dropzone

/**
 * Describes what to do when a task card is being dragged
 *
 * @param {event} event -- the drag motion we are using to define movement
 */
function dragMoveListener(event) {
  let target = event.target;
  let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + + y +
    'px)';

  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);

} // end dragMoveListener

/**
 * Describes what to do when a task card is dropped
 */
function dropped(): void {
  render(controller);
} // end dropped
