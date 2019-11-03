/**
 * in_progress_list.js
 *
 * A class that will generate an In Progress list for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

let List = require('../list.js').List;
let Colors = require('../../enums/colors.js').Colors;

class InProgressList {
  // Constructor deliberately left out

  /**
   * generates an In Progress List for Sprint Backlog board
   *
   * @return {List} an In Progress List
   */
  generateList() {
    return new List('In Progress', Colors.GRAY);
  } // end generateList
} // end InProgressList

// export this class
module.exports.InProgressList = InProgressList;