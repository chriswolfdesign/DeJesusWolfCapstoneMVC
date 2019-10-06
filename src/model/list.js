/**
 * list.js
 *
 * The JavaScript class that behaves as a List on our Agile Development
 * Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

const Colors = require('./enums/colors.js').Colors;

class List {
  /**
   * Generates the List object
   *
   * @param {string} label the label for the this list
   * @param {colors} color the background color of this list
   */
  constructor(label, color) {
    // if user did not define a color
    if (color === undefined) {
      color = Colors.GRAY;
    } // end if

    this.label = label;
    this.color = color;
    this.tasks = [];
  } // end constructor
} // end List

// export this class
module.exports.List = List;
