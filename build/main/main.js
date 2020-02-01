"use strict";
/**
 * main.js
 *
 * Acts as the HTML injector for our web application
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */
exports.__esModule = true;
var board_options_1 = require("../model/enums/board_options");
var controller_1 = require("../controller/controller");
// import interact from 'interactjs';
var controller; // I really don't like that this is global, let's look into other options
window.onload = function () {
    // ask the user which board they would like
    var decision = '';
    while (decision !== 'moscow' && decision !== 'sprint') {
        decision = prompt('Which board would you like? (moscow/sprint)');
    } // end while
    if (decision === 'moscow') {
        controller = new controller_1.Controller('MoSCoW Board');
        generateMoSCoWController(controller);
    }
    else {
        controller = new controller_1.Controller('Sprint Backlog');
        generateSprintController(controller);
    } // end if-else
    // draw the HTML to the page
    render(controller);
}; // end window.onload
/**
 * sets up a basic Sprint Backlog Board
 *
 * @return {board} a Sprint Backlog board with predefined tasks
 */
function generateSprintController(controller) {
    controller.generateBoardTemplate(board_options_1.BoardOptions.SPRINT);
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
    controller.generateBoardTemplate(board_options_1.BoardOptions.MOSCOW);
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
    var _loop_1 = function (i) {
        var buttonID = controller.getModel().getBoards()[0].getLists()[i].getLabel() + 'AddButton';
        document.getElementById(buttonID).addEventListener('click', function (event) {
            var newTaskID = prompt('Please enter the new task label: ');
            var newTaskText = prompt('Please enter the new task text: ');
            controller.getModel().getBoards()[0].getLists()[i].addTask(newTaskID, newTaskText);
            render(controller);
        }); // end Event Listener
    };
    // generate the add button listeners
    for (var i = 0; i < controller.getModel().getBoards()[0].getLists().length; i++) {
        _loop_1(i);
    } // end for
    var _loop_2 = function (i) {
        var _loop_4 = function (j) {
            // console.log(controller);
            var taskID = controller.getModel().getBoards()[0].getLists()[i].getTasks()[j].getLabel() + 'TextField';
            document.getElementById(taskID).addEventListener('click', function (event) {
                var newTaskText = prompt('Please enter the new text', controller.getModel().getBoards()[0].getLists()[i].getTasks()[j].getText());
                controller.editTaskText(i, j, newTaskText);
                render(controller);
            }); // end Event Listener
        };
        for (var j = 0; j < controller.getModel().getBoards()[0].getLists()[i].getTasks().length; j++) {
            _loop_4(j);
        } // end for each task
    };
    // generate the listeners for editting task cards
    for (var i = 0; i < controller.getModel().getBoards()[0].getLists().length; i++) {
        _loop_2(i);
    } // end for each list
    var _loop_3 = function (i) {
        var _loop_5 = function (j) {
            var buttonID = controller.getModel().getBoards()[0].getLists()[i].getTasks()[j].getLabel() + 'RemoveButton';
            document.getElementById(buttonID).addEventListener('click', function (event) {
                var choice = confirm('Delete this task card?');
                if (choice) {
                    controller.removeTaskCard(i, j);
                    render(controller);
                } // end if
            }); // end buttonID
        };
        for (var j = 0; j < controller.getModel().getBoards()[0].getLists()[i].getTasks().length; j++) {
            _loop_5(j);
        } // end inner for loop
    };
    // generate the listener for removing task cards
    for (var i = 0; i < controller.getModel().getBoards()[0].getLists().length; i++) {
        _loop_3(i);
    } // end outer for loop
    // document.getElementById("save").addEventListener('click', function(event){
    //   var temp = controller;
    //   controller.getModel().setController(null);
    //   var name = prompt("Enter the file name:");
    //   const data = JSON.stringify(controller.getModel())
    //   const blob = new Blob([data], {type: 'text/plain'})
    //   const e = document.createEvent('MouseEvents'),
    //   a = document.createElement('a');
    //   a.download = name + ".json";
    //   a.href = window.URL.createObjectURL(blob);
    //   a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    //   e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    //   a.dispatchEvent(e);
    //   controller.getModel().setController(temp);
    // });
    //
    // document.getElementById("submit").addEventListener('click', function(event){
    //   let file = document.getElementById("file-input").files[0];
    //   if (file) {
    //     var reader = new FileReader();
    //     reader.readAsText(file, "UTF-8");
    //     reader.onload = function (event) {
    //       var new_model = JSON.parse(event.target.result);
    //       controller.loadBoards(new_model);
    //       render(controller);
    //     };
    //     reader.onerror = function(event){
    //       alert("Error reading file.");
    //     };
    //   }
    // });
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
// // Set up interact
// interact('.draggable').draggable({
//   inertia: true,
//   autoscroll: true,
//   onmove: dragMoveListener,
//   onend: dropped
// }); // end interact-draggable
//
// interact('.dropzone').dropzone({
//   accept: '.draggable',
//   overlap: 0.5,
//   ondrop: function(event) {
//     controller.moveTaskCard(event.target, event.relatedTarget);
//     render(controller);
//   }, // end ondrop
//   ondragenter: function(event) {
//     console.log(event.target);
//     event.target.style.border = '5px solid white';
//   }, // end ondragenter
//   ondragleave: function(event) {
//     event.target.style.border = '5px solid black';
//   } // end ondragleave
// }); // end interact-dropzone
//
// /**
//  * Describes what to do when a task card is being dragged
//  *
//  * @param {event} event -- the drag motion we are using to define movement
//  */
// function dragMoveListener(event) {
//   let target = event.target;
//   let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
//   let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
//
//   target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' +  + y +
//     'px)';
//
//   target.setAttribute('data-x', x);
//   target.setAttribute('data-y', y);
//
// } // end dragMoveListener
//
/**
 * Describes what to do when a task card is dropped
 */
function dropped() {
    render(controller);
} // end dropped
