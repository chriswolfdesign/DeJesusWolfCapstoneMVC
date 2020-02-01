"use strict";
/**
 * moscow_board.js
 *
 * A class that will generate a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */
exports.__esModule = true;
var board_1 = require("./board");
var moscow_list_factory_1 = require("../factories/moscow_list_factory");
var list_options_1 = require("../enums/list_options");
var MoscowBoard = /** @class */ (function () {
    function MoscowBoard() {
    }
    /**
     * generates a MoSCoW Board
     *
     * @return {Board} a MoSCoW Board
     */
    MoscowBoard.prototype.generateBoard = function () {
        var board = new board_1.Board('MoSCoW Board');
        board.setListFactory(new moscow_list_factory_1.MoscowListFactory());
        board.addListTemplate(list_options_1.ListOptions.MUST);
        board.addListTemplate(list_options_1.ListOptions.SHOULD);
        board.addListTemplate(list_options_1.ListOptions.COULD);
        board.addListTemplate(list_options_1.ListOptions.WONT);
        return board;
    }; // end generateBoard
    return MoscowBoard;
}()); // end MoscowBoard
exports.MoscowBoard = MoscowBoard;
