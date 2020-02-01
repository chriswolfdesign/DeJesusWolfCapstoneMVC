"use strict";
/**
 * moscow_list_factory.js
 *
 * The JavaScript class that will allows us to easily autogenerate template
 * lists for a MoSCoW board
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
var moscow_list_options_1 = require("../enums/moscow_list_options");
var list_factory_1 = require("./list_factory");
var MoscowListFactory = /** @class */ (function (_super) {
    __extends(MoscowListFactory, _super);
    function MoscowListFactory() {
        return _super.call(this) || this;
    } // end constructor
    /**
     * generates a list based on the parameter passed in
     *
     * @param {MoscowListOptions} option the type of list the user wants generated
     *
     * @return {List} a list set up based on the users preferences
     */
    MoscowListFactory.prototype.generateList = function (option) {
        switch (option) {
            case moscow_list_options_1.MoscowListOptions.MUST:
                return this.getMustList().generateList();
            case moscow_list_options_1.MoscowListOptions.SHOULD:
                return this.getShouldList().generateList();
            case moscow_list_options_1.MoscowListOptions.COULD:
                return this.getCouldList().generateList();
            case moscow_list_options_1.MoscowListOptions.WONT:
                return this.getWontList().generateList();
            default:
                return null;
        } // end switch
    }; // end generateList
    return MoscowListFactory;
}(list_factory_1.ListFactory)); // end MoscowListFactory
exports.MoscowListFactory = MoscowListFactory;
