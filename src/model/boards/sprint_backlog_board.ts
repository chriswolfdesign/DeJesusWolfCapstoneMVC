/**
 * sprint_backlog_board.js
 *
 * Allows us to easily generate a board that manages a Sprint Backlog
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

import {Board} from './board';
import {SprintBacklogListOptions} from '../enums/sprint_backlog_list_options';
import {SprintBacklogListFactory} from '../factories/sprint_backlog_list_factory';
import {ListOptions} from "../enums/list_options";

export class SprintBacklogBoard {
  /**
   * generates a Sprint Backlog Board
   *
   * @return {Board} a SprintBacklogBoard
   */
  generateBoard(): Board {
    let board: Board = new Board('Sprint Backlog');
    board.setListFactory(new SprintBacklogListFactory());

    board.addListTemplate(ListOptions.BACKLOG);
    board.addListTemplate(ListOptions.INPROGRESS);
    board.addListTemplate(ListOptions.INREVIEW);
    board.addListTemplate(ListOptions.COMPLETE);

    return board;
  } // end generateBoard
} // end SprintBacklogBoard

