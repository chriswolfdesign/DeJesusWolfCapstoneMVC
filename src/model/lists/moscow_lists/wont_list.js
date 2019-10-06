/**
 * wont_list.js
 *
 * A class that will generate a Wont Have list for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

let List = require('../../list.js').List;
let Colors = require('../../enums/colors.js').Colors;

class WontList {
  // Constructor delibrately left out

  /**
   * generates a Wont Have List for MoSCoW board
   *
   * @return {List} a Wont Have List
   */
  generateList() {
    return new List('Wont', Colors.RED);
  } // end generateList
} // end WontList

// export this class
module.exports.WontList = WontList;
