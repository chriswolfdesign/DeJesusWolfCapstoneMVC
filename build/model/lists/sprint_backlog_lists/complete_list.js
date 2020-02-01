/**
 * complete_list.js
 *
 * A class that will generate a Complete List for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

let List = require('../list.js').List;
let Colors = require('../../enums/colors.js').Colors;

class CompleteList {
  // Constructor deliberately left out

  /**
   * generates a Complete List for Sprint Backlog board
   *
   * @return {List} a Complete List
   */
  generateList() {
    return new List('Complete', Colors.GRAY);
  } // end generateList
} // end CompleteList

// export this module
module.exports.CompleteList = CompleteList;