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

let MoscowListOptions = require('../enums/moscow_list_options.js').MoscowListOptions;
let MustList = require('../lists/moscow_lists/must_list.js').MustList;
let ShouldList = require('../lists/moscow_lists/should_list.js').ShouldList;
let CouldList = require('../lists/moscow_lists/could_list.js').CouldList;
let WontList = require('../lists/moscow_lists/wont_list.js').WontList;

class MoscowListFactory {
  constructor() {
    this.mustList = new MustList();
    this.shouldList = new ShouldList();
    this.couldList = new CouldList();
    this.wontList = new WontList();
  } // end constructor

  /**
   * generates a list based on the parameter passed in
   *
   * @param {MoscowListOption} option the type of list the user wants generated
   *
   * @return {List} a list set up based on the users preferences
   */
  generateList(option) {
    switch (option) {
      case MoscowListOptions.MUST:
        return this.mustList.generateList();
      case MoscowListOptions.SHOULD:
        return this.shouldList.generateList();
      case MoscowListOptions.COULD:
        return this.couldList.generateList();
      case MoscowListOptions.WONT:
        return this.wontList.generateList();
      default:
        return null;
    } // end switch
  } // end generateList
} // end MoscowListFactory

// export this class
module.exports.MoscowListFactory = MoscowListFactory;