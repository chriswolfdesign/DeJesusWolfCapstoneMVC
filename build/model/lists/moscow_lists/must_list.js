/**
 * must_list.js
 *
 * A class that will generate a Must Have List for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

let List = require('../list.js').List;
let Colors = require('../../enums/colors.js').Colors;

class MustList {
  // Constructor delibrately left out

  /**
   * generates a Must Have List for MoSCoW board
   *
   * @return {List} a Must Have List
   */
  generateList() {
    return new List('Must', Colors.GREEN);
  } // end generateList
} // end MustList

// export this class
module.exports.MustList = MustList;
