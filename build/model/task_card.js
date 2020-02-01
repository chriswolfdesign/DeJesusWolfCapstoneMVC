/**
 * task_card.ts
 *
 * The JavaScript class that represents a Task Card in our Agile Development
 * Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

class TaskCard {
  /**
   * Generates the TaskCard object
   *
   * @param {string} label the label representing this task card
   * @param {string} text the text this task card should display
   */
  constructor(label, text) {
    this.label = label;
    this.text = text;
  } // end constructor
} // end class

// export the class
module.exports.TaskCard = TaskCard;
