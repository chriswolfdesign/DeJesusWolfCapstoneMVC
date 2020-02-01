"use strict";
/**
 * sprint_backlog_board.js
 *
 * Allows us to easily generate a board that manages a Sprint Backlog
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */
exports.__esModule = true;
var board_1 = require("./board");
var sprint_backlog_list_factory_1 = require("../factories/sprint_backlog_list_factory");
var list_options_1 = require("../enums/list_options");
var SprintBacklogBoard = /** @class */ (function () {
    function SprintBacklogBoard() {
    }
    /**
     * generates a Sprint Backlog Board
     *
     * @return {Board} a SprintBacklogBoard
     */
    SprintBacklogBoard.prototype.generateBoard = function () {
        var board = new board_1.Board('Sprint Backlog');
        board.setListFactory(new sprint_backlog_list_factory_1.SprintBacklogListFactory());
        board.addListTemplate(list_options_1.ListOptions.BACKLOG);
        board.addListTemplate(list_options_1.ListOptions.INPROGRESS);
        board.addListTemplate(list_options_1.ListOptions.INREVIEW);
        board.addListTemplate(list_options_1.ListOptions.COMPLETE);
        return board;
    }; // end generateBoard
    return SprintBacklogBoard;
}()); // end SprintBacklogBoard
exports.SprintBacklogBoard = SprintBacklogBoard;
