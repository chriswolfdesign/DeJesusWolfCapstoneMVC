/**
 * should_list.js
 *
 * A class that will generate a Should Have list for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

let List = require('../../list.js').List;
let Colors = require('../../enums/colors.js').Colors;

class ShouldList {
  // Constructor delibrately left out

  /**
   * generates a Should Have List for MoSCoW board
   *
   * @return {List} a Should Have List
   */
  generateList() {
    return new List('Should', Colors.YELLOW);
  } // end generateList
} // end MustList

// export this class
module.exports.ShouldList = ShouldList;
