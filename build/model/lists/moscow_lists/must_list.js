"use strict";
/**
 * must_list.js
 *
 * A class that will generate a Must Have List for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */
exports.__esModule = true;
var list_1 = require("../list");
var colors_1 = require("../../enums/colors");
var MustList = /** @class */ (function () {
    function MustList() {
    }
    // Constructor deliberately left out
    /**
     * generates a Must Have List for MoSCoW board
     *
     * @return {List} a Must Have List
     */
    MustList.prototype.generateList = function () {
        return new list_1.List('Must', colors_1.Colors.GREEN);
    }; // end generateList
    return MustList;
}()); // end MustList
exports.MustList = MustList;
