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

import {ListOptions} from '../enums/list_options';
import {List} from '../lists/list';
import {MustList} from '../lists/moscow_lists/must_list';
import {ShouldList} from '../lists/moscow_lists/should_list';
import {CouldList} from '../lists/moscow_lists/could_list';
import {WontList} from '../lists/moscow_lists/wont_list';
import {BacklogList} from '../lists/sprint_backlog_lists/backlog_list';
import {InProgressList} from '../lists/sprint_backlog_lists/in_progress_list';
import {InReviewList} from '../lists/sprint_backlog_lists/in_review_list';
import {CompleteList} from '../lists/sprint_backlog_lists/complete_list';

export class ListFactory {
  private mustList: MustList;
  private shouldList: ShouldList;
  private couldList: CouldList;
  private wontList: WontList;
  private backlogList: BacklogList;
  private inProgressList: InProgressList;
  private inReviewList: InReviewList;
  private completeList: CompleteList;

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

  getMustList(): MustList {
    return this.mustList;
  }

  getShouldList(): ShouldList {
    return this.shouldList;
  }

  getCouldList(): CouldList {
    return this.couldList;
  }

  getWontList(): WontList {
    return this.wontList;
  }

  getBacklogList(): BacklogList {
    return this.backlogList;
  }

  getInProgressList(): InProgressList {
    return this.inProgressList;
  }

  getInReviewList(): InReviewList {
    return this.inReviewList;
  }

  getCompleteList(): CompleteList {
    return this.completeList;
  }

  /**
   * generates a list based on the parameter passed in
   *
   * @param {ListOptions} option the type of list the user wants generated
   *
   * @return {List} a list set up based on user preference
   */
  generateList(option: ListOptions): List {
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

