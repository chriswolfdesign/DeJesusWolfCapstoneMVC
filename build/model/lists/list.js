"use strict";
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
exports.__esModule = true;
var task_card_1 = require("../task_card");
var List = /** @class */ (function () {
    /**
     * Generates the List object
     *
     * @param {string} label the label for the this list
     * @param {Colors} color the background color of this list
     */
    function List(label) {
        this.label = label;
        this.tasks = [];
    } // end constructor
    List.prototype.getLabel = function () {
        return this.label;
    };
    List.prototype.getTasks = function () {
        return this.tasks;
    };
    /**
     * adds a new task card to the tasks field
     *
     * @param {string} label the label for the new task card
     * @param {string} text the text for the new task card
     */
    List.prototype.addTask = function (label, text) {
        this.tasks.push(new task_card_1.TaskCard(label, text));
    }; // end addTask
    /**
     * Removes a task card from the tasks field
     *
     * @param {number} cardID the ID of the being removed.
     */
    List.prototype.removeTaskCard = function (cardID) {
        this.tasks.splice(cardID, 1);
    }; // end removeTaskCard
    /**
     * Loads in a set of tasks into the 'tasks' attribute.
     * @param {tasks[]} tasks lists of tasks to be loaded in
     */
    List.prototype.loadTasks = function (tasks) {
        var ntask;
        this.tasks = [];
        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
            var task = tasks_1[_i];
            ntask = new task_card_1.TaskCard(task.getLabel(), task.getText());
            this.tasks.push(ntask);
        }
    };
    return List;
}()); // end List
exports.List = List;
