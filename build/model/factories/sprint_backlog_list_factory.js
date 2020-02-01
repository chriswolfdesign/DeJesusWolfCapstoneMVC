/**
 * sprint_backlog_list_factory.js
 *
 * The JavaScript class that will allow us to easily autogenerate template
 * lists for a Sprint Backlog Board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

let SprintBacklogListOptions = require('../enums/sprint_backlog_list_options.js').SprintBacklogListOptions;
let BacklogList = require('../lists/sprint_backlog_lists/backlog_list.js').BacklogList;
let InProgressList = require('../lists/sprint_backlog_lists/in_progress_list.js').InProgressList;
let InReviewList = require('../lists/sprint_backlog_lists/in_review_list.js').InReviewList;
let CompleteList = require('../lists/sprint_backlog_lists/complete_list.js').CompleteList;

class SprintBacklogListFactory {
  constructor() {
    this.backlogList = new BacklogList();
    this.inProgressList = new InProgressList();
    this.inReviewList = new InReviewList();
    this.completeList = new CompleteList();
  } // end constructor

  /**
   * generates a list based on the parameter passed in
   *
   * @param {SprintBacklogListOption} option the type of list the user wants generated
   *
   * @return {List} a list set up based on the user's preferences
   */
  generateList(option) {
    switch (option) {
      case SprintBacklogListOptions.BACKLOG:
        return this.backlogList.generateList();
      case SprintBacklogListOptions.INPROGRESS:
        return this.inProgressList.generateList();
      case SprintBacklogListOptions.INREVIEW:
        return this.inReviewList.generateList();
      case SprintBacklogListOptions.COMPLETE:
        return this.completeList.generateList();
      default:
        return null;
    } // end switch
  } // end generateList
} // end SprintBacklogListFactory

// export this class
module.exports.SprintBacklogListFactory = SprintBacklogListFactory;