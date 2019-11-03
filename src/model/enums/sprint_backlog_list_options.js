/**
 * sprint_backlog_list_options.js
 *
 * A JavaScript object to act as an enumeration for list choices for our
 * Sprint Backlog
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

const SprintBacklogListOptions = {
  BACKLOG: 'Backlog',
  INPROGRESS: 'InProgress',
  INREVIEW: 'InReview',
  COMPLETE: 'Complete'
}; // end SprintBacklogListOptions

// export SprintBacklogListOptions
module.exports.SprintBacklogListOptions = SprintBacklogListOptions;
