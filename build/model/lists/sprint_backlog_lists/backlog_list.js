"use strict";
/**
 * backlog_list.js
 *
 * A class that will generate a Backlog list for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */
exports.__esModule = true;
var list_1 = require("../list");
var colors_1 = require("../../enums/colors");
var BacklogList = /** @class */ (function () {
    function BacklogList() {
    }
    // Constructor deliberately left out
    /**
     * generates a Backlog LIst for Sprint Backlog board
     *
     * @return {List} a Backlog List
     */
    BacklogList.prototype.generateList = function () {
        return new list_1.List('Backlog', colors_1.Colors.GRAY);
    }; // end generateList
    return BacklogList;
}()); // end BacklogList
exports.BacklogList = BacklogList;
