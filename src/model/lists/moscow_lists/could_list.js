/**
 * could_list.js
 *
 * A class that will generate a Should Have list for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

let List = require('../../list.js').List;
let Colors = require('../../enums/colors.js').Colors;

class CouldList {
  // Constructor delibrately left out

  /**
   * generates a Could Have List for MoSCoW board
   *
   * @return {List} a Could Have List
   */
  generateList() {
    return new List('Could', Colors.ORANGE);
  } // end generateList
} // end CouldList

// export this class
module.exports.CouldList = CouldList;
