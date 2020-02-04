/**
 * moscow_board.js
 *
 * A class that will generate a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */

import {Board} from './board';
import {MoscowListOptions} from '../enums/moscow_list_options';
import {MoscowListFactory} from '../factories/moscow_list_factory';
import {ListOptions} from '../enums/list_options';

export class MoscowBoard {
  /**
   * generates a MoSCoW Board
   *
   * @return {Board} a MoSCoW Board
   */
  generateBoard() {
    let board: Board = new Board('MoSCoW Board');
    board.setListFactory(new MoscowListFactory());

    board.addListTemplate(ListOptions.MUST);
    board.addListTemplate(ListOptions.SHOULD);
    board.addListTemplate(ListOptions.COULD);
    board.addListTemplate(ListOptions.WONT);

    return board;
  } // end generateBoard
} // end MoscowBoard

