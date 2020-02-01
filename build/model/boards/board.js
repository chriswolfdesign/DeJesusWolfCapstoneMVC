"use strict";
/**
 * board.js
 *
 * A JavaScript class to represent a board in our Agile Development Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */
exports.__esModule = true;
var list_1 = require("../lists/list");
var list_factory_1 = require("../factories/list_factory");
var Board = /** @class */ (function () {
    /**
     * Generates the board object
     *
     * @param {string} title the title of the board
     */
    function Board(title) {
        this.title = title;
        this.lists = [];
        this.listFactory = new list_factory_1.ListFactory();
    } // end constructor
    /**
     * sets listFactory to something more specific
     *
     * @param {ListFactory} factory the new factory
     */
    Board.prototype.setListFactory = function (factory) {
        this.listFactory = factory;
    };
    /**
     * adds a new list to our board
     *
     * @param {string} label the label for our new list
     * @param {Colors} color the optional color value for our list
     */
    Board.prototype.addList = function (label, color) {
        this.lists.push(new list_1.List(label, color));
    }; // end addList
    /**
     * Creates a task card within the specified list.
     *
     * @param {integer} listID the list of we are trying to add a card to
     * @param {string} label the label of the new task card
     * @param {string} text the text in the new task card
     */
    Board.prototype.generateTaskCard = function (listID, label, text) {
        this.lists[listID].addTask(label, text);
    }; // end generateTaskCard
    /**
     * Removes a task card from a specified list.
     * @param {number} listID the ID we are removing a card from.
     * @param {number} cardID the ID of the card we are removing.
     */
    Board.prototype.removeTaskCard = function (listID, cardID) {
        this.lists[listID].removeTaskCard(cardID);
    }; // end removeTaskCard
    /**
     * Removes the specified list.
     *
     * @param {number} listID the ID of a list we are trying to remove
     */
    Board.prototype.removeList = function (listID) {
        this.lists.splice(listID, 1);
    }; // end removeList
    /**
     * adds a new list using the ListFactory
     *
     * @param {ListOption} option the type of list we want to generate
     */
    Board.prototype.addListTemplate = function (option) {
        this.lists.push(this.listFactory.generateList(option));
    }; // end addListTemplate
    /**
     * Loads in a list of lists into the 'lists' attribute in board.
     * @param {lists[]} lists an array of lists to load into board.
     */
    Board.prototype.loadLists = function (lists) {
        var nlist;
        this.lists = [];
        for (var _i = 0, lists_1 = lists; _i < lists_1.length; _i++) {
            var list = lists_1[_i];
            nlist = new list_1.List(list.getLabel(), list.getColor());
            nlist.loadTasks(list.getTasks());
            this.lists.push(nlist);
        }
    };
    Board.prototype.getTitle = function () {
        return this.title;
    };
    Board.prototype.getLists = function () {
        return this.lists;
    };
    return Board;
}()); // end Board
exports.Board = Board;