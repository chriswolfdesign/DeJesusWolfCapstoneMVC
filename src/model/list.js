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
const TaskCard = require('./task_card.js').TaskCard;

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

  /**
   * adds a new task card to the tasks field
   *
   * @param {string} label the label for the new task card
   * @param {string} text the text for the new task card
   */
  addTask(label, text) {
    this.tasks.push(new TaskCard(label, text));
  } // end addTask
} // end List

// export this class
module.exports.List = List;
