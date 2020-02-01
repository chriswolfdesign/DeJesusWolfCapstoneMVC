"use strict";
/**
 * board_factory.js
 *
 * The JavaScript class that will allow us to easily autogenerate template
 * boards for our Agile Development Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */
exports.__esModule = true;
var board_options_1 = require("../enums/board_options");
var moscow_board_1 = require("../boards/moscow_board");
var sprint_backlog_board_1 = require("../boards/sprint_backlog_board");
var BoardFactory = /** @class */ (function () {
    function BoardFactory() {
        this.moscowBoard = new moscow_board_1.MoscowBoard();
        this.sprintBoard = new sprint_backlog_board_1.SprintBacklogBoard();
    } // end constructor
    /**
     * generates a board based on the parameter passed in
     *
     * @param {BoardOptions} option the type of the board the user wants generated
     *
     * @return {Board} a board based on user preference
     */
    BoardFactory.prototype.generateBoard = function (option) {
        switch (option) {
            case board_options_1.BoardOptions.MOSCOW:
                return this.moscowBoard.generateBoard();
            case board_options_1.BoardOptions.SPRINT:
                return this.sprintBoard.generateBoard();
            default:
                return null;
        } // end switch case
    }; // end generateBoard
    return BoardFactory;
}()); // end BoardFactory
exports.BoardFactory = BoardFactory;
