/**
 * backlog_list.js
 *
 * A class that will generate a Backlog list for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

let List = require('../list.js').List;
let Colors = require('../../enums/colors.js').Colors;

class BacklogList {
  // Constructor deliberately left out

  /**
   * generates a Backlog LIst for Sprint Backlog board
   *
   * @return {List} a Backlog List
   */
  generateList() {
    return new List('Backlog', Colors.GRAY);
  } // end generateList
} // end BacklogList

// export this class
module.exports.BacklogList = BacklogList;