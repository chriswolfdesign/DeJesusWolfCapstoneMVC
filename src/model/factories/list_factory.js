/**
 * list_factory.js
 *
 * The JavaScript class that will allow us to easily autogenerate template
 * lists for our Agile Development Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

let ListOptions = require('../enums/list_options.js').ListOptions;
let MustList = require('../lists/moscow_lists/must_list.js').MustList;
let ShouldList = require('../lists/moscow_lists/should_list.js').ShouldList;
let CouldList = require('../lists/moscow_lists/could_list.js').CouldList;
let WontList = require('../lists/moscow_lists/wont_list.js').WontList;
let BacklogList = require('../lists/sprint_backlog_lists/backlog_list.js').BacklogList;
let InProgressList = require('../lists/sprint_backlog_lists/in_progress_list.js').InProgressList;
let InReviewList = require('../lists/sprint_backlog_lists/in_review_list.js').InReviewList;
let CompleteList = require('../lists/sprint_backlog_lists/complete_list.js').CompleteList;

class ListFactory {
  constructor() {
    this.mustList = new MustList();
    this.shouldList = new ShouldList();
    this.couldList = new CouldList();
    this.wontList = new WontList();
    this.backlogList = new BacklogList();
    this.inProgressList = new InProgressList();
    this.inReviewList = new InReviewList();
    this.completeList = new CompleteList();
} // end constructor

  /**
   * generates a list based on the parameter passed in
   *
   * @param {ListOption} option the type of list the user wants generated
   *
   * @return {List} a list set up based on user preference
   */
  generateList(option) {
    switch (option) {
      case ListOptions.MUST:
        return this.mustList.generateList();
      case ListOptions.SHOULD:
        return this.shouldList.generateList();
      case ListOptions.COULD:
        return this.couldList.generateList();
      case ListOptions.WONT:
        return this.wontList.generateList();
      case ListOptions.BACKLOG:
        return this.backlogList.generateList();
      case ListOptions.INPROGRESS:
        return this.inProgressList.generateList();
      case ListOptions.INREVIEW:
        return this.inReviewList.generateList();
      case ListOptions.COMPLETE:
        return this.completeList.generateList();
      default:
        return null;
    } // end switch
  } // end generateList
} // end ListFactory

// export this class
module.exports.ListFactory = ListFactory;
