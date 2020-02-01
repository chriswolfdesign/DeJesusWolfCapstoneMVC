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
var sprint_backlog_list_options_1 = require("../enums/sprint_backlog_list_options");
var sprint_backlog_list_factory_1 = require("../factories/sprint_backlog_list_factory");
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
        board.addListTemplate(sprint_backlog_list_options_1.SprintBacklogListOptions.BACKLOG);
        board.addListTemplate(sprint_backlog_list_options_1.SprintBacklogListOptions.INPROGRESS);
        board.addListTemplate(sprint_backlog_list_options_1.SprintBacklogListOptions.INREVIEW);
        board.addListTemplate(sprint_backlog_list_options_1.SprintBacklogListOptions.COMPLETE);
        return board;
    }; // end generateBoard
    return SprintBacklogBoard;
}()); // end SprintBacklogBoard
exports.SprintBacklogBoard = SprintBacklogBoard;
