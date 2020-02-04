"use strict";
/**
 * in_progress_list.js
 *
 * A class that will generate an In Progress list for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */
exports.__esModule = true;
var list_1 = require("../list");
var InProgressList = /** @class */ (function () {
    function InProgressList() {
    }
    // Constructor deliberately left out
    /**
     * generates an In Progress List for Sprint Backlog board
     *
     * @return {List} an In Progress List
     */
    InProgressList.prototype.generateList = function () {
        return new list_1.List('In Progress');
    }; // end generateList
    return InProgressList;
}()); // end InProgressList
exports.InProgressList = InProgressList;
