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
var moscow_list_options_1 = require("../enums/moscow_list_options");
var moscow_list_factory_1 = require("../factories/moscow_list_factory");
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
        board.addListTemplate(moscow_list_options_1.MoscowListOptions.MUST);
        board.addListTemplate(moscow_list_options_1.MoscowListOptions.SHOULD);
        board.addListTemplate(moscow_list_options_1.MoscowListOptions.COULD);
        board.addListTemplate(moscow_list_options_1.MoscowListOptions.WONT);
        return board;
    }; // end generateBoard
    return MoscowBoard;
}()); // end MoscowBoard
exports.MoscowBoard = MoscowBoard;
