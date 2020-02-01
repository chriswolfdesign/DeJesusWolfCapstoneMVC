"use strict";
/**
 * should_list.js
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
var ShouldList = /** @class */ (function () {
    function ShouldList() {
    }
    // Constructor deliberately left out
    /**
     * generates a Should Have List for MoSCoW board
     *
     * @return {List} a Should Have List
     */
    ShouldList.prototype.generateList = function () {
        return new list_1.List('Should', colors_1.Colors.YELLOW);
    }; // end generateList
    return ShouldList;
}()); // end MustList
exports.ShouldList = ShouldList;
