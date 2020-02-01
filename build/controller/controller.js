"use strict";
exports.__esModule = true;
var model_1 = require("../model/model");
var view_1 = require("../view/view");
var Controller = /** @class */ (function () {
    function Controller(boardName) {
        this.model = new model_1.Model(boardName);
        this.model.setController(this);
        this.view = new view_1.View();
    } // end constructor
    /**
     * calls on the model to create a new board from a template
     *
     * @param option which type of board the user would like
     */
    Controller.prototype.generateBoardTemplate = function (option) {
        this.model.generateBoardTemplate(option);
    }; // end generateBoardTemplate
    /**
     * Changes the text in a task card
     *
     * @param listIndex which list the task card is in
     * @param taskIndex which task card we are changing
     * @param newTaskText the text to change the task card to
     */
    Controller.prototype.editTaskText = function (listIndex, taskIndex, newTaskText) {
        if (newTaskText !== '' && newTaskText !== null) {
            this.model.boards[0].lists[listIndex].tasks[taskIndex].text = newTaskText;
        } // end if
    }; // end editTaskText
    /**
     * removes a board from our model
     *
     * @param {string} boardID the id for the board we are removing
     */
    Controller.prototype.removeBoard = function (boardID) {
        this.model.removeBoard(boardID);
    }; // end removeBoard
    /**
     * generates a list with the specific credentials
     *
     * @param {string} boardID the board to add the list to
     * @param {string} label the label for the new list
     * @param color
     */
    Controller.prototype.generateList = function (boardID, label, color) {
        this.model.generateList(boardID, label, color);
    }; // end generateList
    /**
     * removes a list from a board
     *
     * @param {string} boardID the board we are removing a list from
     * @param {string} listID the list we are removing
     */
    Controller.prototype.removeList = function (boardID, listID) {
        this.model.removeList(boardID, listID);
    }; // end removeList
    /**
     * generates a list from a template
     *
     * @param {string} boardID the board we are adding a list to
     * @param {ListOption} option the template we would like to src a list from
     */
    Controller.prototype.generateListTemplate = function (boardID, option) {
        this.model.generateListTemplate(boardID, option);
    }; // end generateListTemplate
    /**
     * generates a task card with the given credentials
     *
     * @param {string} boardID the board we are adding a task card to
     * @param {string} listID the list we are adding a task card to
     * @param {string} label the label for the new task card
     * @param {string} text the text for the new task card
     */
    Controller.prototype.generateTaskCard = function (boardID, listID, label, text) {
        this.model.generateTaskCard(boardID, listID, label, text);
    }; // end generateTaskCard
    /**
     * removes a task card from a list
     *
     * @param {string} listID the list from which we are removing a task card
     */
    Controller.prototype.removeTaskCard = function (listID, taskID) {
        this.model.removeTaskCard(listID, taskID);
    }; // end removeTaskCard
    /**
     * Moves a task card from one list to another
     *
     * @param {HTML} newList -- the HTML representation of the new list we're moving the task card to
     * @param {HTML} movedTaskCard -- the HTML representation of the task card we're moving
     */
    Controller.prototype.moveTaskCard = function (newList, movedTaskCard) {
        var listIndex = this.findListIndex(newList.id);
        var taskIndices = this.getTaskIndices(movedTaskCard.id);
        // store the data that was in the moved task card
        var tempData = this.getTaskData(taskIndices[0], taskIndices[1]);
        // remove the old task card
        this.removeTaskCard(taskIndices[0], taskIndices[1]);
        // add a new task card with the same data to the new list
        this.model.boards[0].lists[listIndex].addTask(tempData[0], tempData[1]);
    };
    /**
     * Finds the list index of a list by its label
     *
     * @param {string} listLabel -- the list label we are searching for
     *
     * @return {int} the list index of the requested list if it exists
     *               -1 otherwise
     */
    Controller.prototype.findListIndex = function (listLabel) {
        for (var i = 0; i < this.model.boards[0].lists.length; i++) {
            if (this.model.boards[0].lists[i].label === listLabel) {
                return i;
            } // end if
        } // end for
        // if the list does not exist
        return -1;
    }; // end findListIndex
    /**
     * Gets the board indices of the task card we are looking for
     *
     * @param {string} taskID -- the label of the task card we are looking for
     *
     * @return {list} -- [the list index of the task card, the task index of the task card]
     */
    Controller.prototype.getTaskIndices = function (taskID) {
        for (var i = 0; i < this.model.boards[0].lists.length; i++) {
            for (var j = 0; j < this.model.boards[0].lists[i].tasks.length; j++) {
                if (taskID === this.model.boards[0].lists[i].tasks[j].label) {
                    return [i, j];
                } // end if
            } // end inner-for
        } // end outer-for
    }; // end getTaskIndices
    /**
     * Gets the data held inside the task card
     * @return {list} -- [task card's label, task card's text]
     * @param listIndex
     * @param taskIndex
     */
    Controller.prototype.getTaskData = function (listIndex, taskIndex) {
        return [this.model.boards[0].lists[listIndex].tasks[taskIndex].label,
            this.model.boards[0].lists[listIndex].tasks[taskIndex].text];
    };
    /**
     * getter for model
     *
     * @return {App} the model this controller controls
     */
    Controller.prototype.getModel = function () {
        return this.model;
    }; // end getModel
    /**
     * Calls the view class to generate HTML based on the given model
     *
     * @return {String} html based off of model
     */
    Controller.prototype.generateHTML = function () {
        return this.view.generateHTML(this.model);
    }; // end generateHTML
    /**
     * Sets the values within model to the values loaded from a JSON file.
     *
     * @param {object} model the board we are trying to load into model
     */
    Controller.prototype.loadBoards = function (model) {
        this.model.loadBoards(model);
    };
    return Controller;
}()); // end Controller
exports.Controller = Controller;
