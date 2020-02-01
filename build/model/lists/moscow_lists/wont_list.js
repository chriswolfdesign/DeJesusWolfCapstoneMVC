"use strict";
/**
 * wont_list.js
 *
 * A class that will generate a Wont Have list for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */
exports.__esModule = true;
var list_1 = require("../list");
var colors_1 = require("../../enums/colors");
var WontList = /** @class */ (function () {
    function WontList() {
    }
    // Constructor deliberately left out
    /**
     * generates a Wont Have List for MoSCoW board
     *
     * @return {List} a Wont Have List
     */
    WontList.prototype.generateList = function () {
        return new list_1.List('Wont', colors_1.Colors.RED);
    }; // end generateList
    return WontList;
}()); // end WontList
exports.WontList = WontList;
