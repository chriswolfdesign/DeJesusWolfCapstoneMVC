"use strict";
/**
 * could_list.js
 *
 * A class that will generate a Should Have list for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */
exports.__esModule = true;
var list_1 = require("../list");
var colors_1 = require("../../enums/colors");
var CouldList = /** @class */ (function () {
    function CouldList() {
    }
    // Constructor deliberately left out
    /**
     * generates a Could Have List for MoSCoW board
     *
     * @return {List} a Could Have List
     */
    CouldList.prototype.generateList = function () {
        return new list_1.List('Could', colors_1.Colors.ORANGE);
    }; // end generateList
    return CouldList;
}()); // end CouldList
exports.CouldList = CouldList;
