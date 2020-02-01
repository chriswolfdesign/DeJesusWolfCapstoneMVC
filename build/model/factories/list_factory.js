"use strict";
/**
 * list_factory.js
 *
 * The JavaScript class that will allow us to easily autogenerate template
 * lists for our Agile Development Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */
exports.__esModule = true;
var list_options_1 = require("../enums/list_options");
var must_list_1 = require("../lists/moscow_lists/must_list");
var should_list_1 = require("../lists/moscow_lists/should_list");
var could_list_1 = require("../lists/moscow_lists/could_list");
var wont_list_1 = require("../lists/moscow_lists/wont_list");
var backlog_list_1 = require("../lists/sprint_backlog_lists/backlog_list");
var in_progress_list_1 = require("../lists/sprint_backlog_lists/in_progress_list");
var in_review_list_1 = require("../lists/sprint_backlog_lists/in_review_list");
var complete_list_1 = require("../lists/sprint_backlog_lists/complete_list");
var ListFactory = /** @class */ (function () {
    function ListFactory() {
        this.mustList = new must_list_1.MustList();
        this.shouldList = new should_list_1.ShouldList();
        this.couldList = new could_list_1.CouldList();
        this.wontList = new wont_list_1.WontList();
        this.backlogList = new backlog_list_1.BacklogList();
        this.inProgressList = new in_progress_list_1.InProgressList();
        this.inReviewList = new in_review_list_1.InReviewList();
        this.completeList = new complete_list_1.CompleteList();
    } // end constructor
    ListFactory.prototype.getMustList = function () {
        return this.mustList;
    };
    ListFactory.prototype.getShouldList = function () {
        return this.shouldList;
    };
    ListFactory.prototype.getCouldList = function () {
        return this.couldList;
    };
    ListFactory.prototype.getWontList = function () {
        return this.wontList;
    };
    ListFactory.prototype.getBacklogList = function () {
        return this.backlogList;
    };
    ListFactory.prototype.getInProgressList = function () {
        return this.inProgressList;
    };
    ListFactory.prototype.getInReviewList = function () {
        return this.inReviewList;
    };
    ListFactory.prototype.getCompleteList = function () {
        return this.completeList;
    };
    /**
     * generates a list based on the parameter passed in
     *
     * @param {ListOptions} option the type of list the user wants generated
     *
     * @return {List} a list set up based on user preference
     */
    ListFactory.prototype.generateList = function (option) {
        switch (option) {
            case list_options_1.ListOptions.MUST:
                return this.mustList.generateList();
            case list_options_1.ListOptions.SHOULD:
                return this.shouldList.generateList();
            case list_options_1.ListOptions.COULD:
                return this.couldList.generateList();
            case list_options_1.ListOptions.WONT:
                return this.wontList.generateList();
            case list_options_1.ListOptions.BACKLOG:
                return this.backlogList.generateList();
            case list_options_1.ListOptions.INPROGRESS:
                return this.inProgressList.generateList();
            case list_options_1.ListOptions.INREVIEW:
                return this.inReviewList.generateList();
            case list_options_1.ListOptions.COMPLETE:
                return this.completeList.generateList();
            default:
                return null;
        } // end switch
    }; // end generateList
    return ListFactory;
}()); // end ListFactory
exports.ListFactory = ListFactory;
