"use strict";
/**
 * sprint_backlog_list_factory.js
 *
 * The JavaScript class that will allow us to easily autogenerate template
 * lists for a Sprint Backlog Board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var sprint_backlog_list_options_1 = require("../enums/sprint_backlog_list_options");
var list_factory_1 = require("./list_factory");
var SprintBacklogListFactory = /** @class */ (function (_super) {
    __extends(SprintBacklogListFactory, _super);
    function SprintBacklogListFactory() {
        return _super.call(this) || this;
    } // end constructor
    /**
     * generates a list based on the parameter passed in
     *
     * @param {SprintBacklogListOptions} option the type of list the user wants generated
     *
     * @return {List} a list set up based on the user's preferences
     */
    SprintBacklogListFactory.prototype.generateList = function (option) {
        switch (option) {
            case sprint_backlog_list_options_1.SprintBacklogListOptions.BACKLOG:
                return this.getBacklogList().generateList();
            case sprint_backlog_list_options_1.SprintBacklogListOptions.INPROGRESS:
                return this.getInProgressList().generateList();
            case sprint_backlog_list_options_1.SprintBacklogListOptions.INREVIEW:
                return this.getInReviewList().generateList();
            case sprint_backlog_list_options_1.SprintBacklogListOptions.COMPLETE:
                return this.getCompleteList().generateList();
            default:
                return null;
        } // end switch
    }; // end generateList
    return SprintBacklogListFactory;
}(list_factory_1.ListFactory)); // end SprintBacklogListFactory
exports.SprintBacklogListFactory = SprintBacklogListFactory;
