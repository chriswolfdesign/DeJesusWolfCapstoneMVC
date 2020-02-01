"use strict";
/**
 * in_review_list.js
 *
 * A class that will generate an In Review list for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */
exports.__esModule = true;
var list_1 = require("../list");
var colors_1 = require("../../enums/colors");
var InReviewList = /** @class */ (function () {
    function InReviewList() {
    }
    // Constructor deliberately left out
    /**
     * generates an In Review List for Sprint Backlog board
     *
     * @return {List} an InReviewList
     */
    InReviewList.prototype.generateList = function () {
        return new list_1.List('In Review', colors_1.Colors.GRAY);
    }; // end generateList
    return InReviewList;
}()); // end InReviewList
exports.InReviewList = InReviewList;
