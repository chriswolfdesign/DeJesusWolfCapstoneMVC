"use strict";
/**
 * complete_list.js
 *
 * A class that will generate a Complete List for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */
exports.__esModule = true;
var list_1 = require("../list");
var colors_1 = require("../../enums/colors");
var CompleteList = /** @class */ (function () {
    function CompleteList() {
    }
    // Constructor deliberately left out
    /**
     * generates a Complete List for Sprint Backlog board
     *
     * @return {List} a Complete List
     */
    CompleteList.prototype.generateList = function () {
        return new list_1.List('Complete', colors_1.Colors.GRAY);
    }; // end generateList
    return CompleteList;
}()); // end CompleteList
exports.CompleteList = CompleteList;
