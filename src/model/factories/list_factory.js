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

let ListOptions = require('../enums/list_options.js').ListOptions;
let MustList = require('../lists/moscow_lists/must_list.js').MustList;

class ListFactory {
  constructor() {
    this.mustList = new MustList();
  }

  /**
   * generates a list based on the parameter passed in
   *
   * @param {ListOption} list the type of list the user wants generated
   *
   * @return {List} a list set up based on user preference
   */
  generateList(option) {
    switch (option) {
      case ListOptions.MUST:
        return this.mustList.generateList();
      default:
        return null;
    } // end switch
  } // end generateList
} // end ListFactory

// export this class
module.exports.ListFactory = ListFactory;
