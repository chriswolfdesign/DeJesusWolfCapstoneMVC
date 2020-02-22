/**
 * view.js
 *
 * The class responsible for generating the HTML based off our current model
 *
 * @author Chris Wolf
 * @version 2.0.0 (October 21, 2019)
 */

import { List } from '../model/lists/List';
import { TaskCard } from '../model/TaskCard';
import { Model } from '../model/Model';

export class View {
  // Intentionally no constructor

  /**
   * generates HTML based on the current model
   *
   * @param {Model} model the model we are generating HTML for
   *
   * @return {string} the HTML for model
   */
  generateHTML(model): string {
    let html = '<div>';
    html += this.generateToolbar(model);
    html += this.generateBodyHTML(model);
    html += '</div>';
    return html;
  } // end generateHTML

  /**
   * generates the toolbar HTML
   * 
   * @return {HTML} the html for the toolbar
   */
  generateToolbar(model: Model): string {
    let html = '<div id=toolbar>';
    html += this.generateSaveLoadButtons();
    html += '<div id=toolbar-text>Agility</div>';
    html += '</div>';
    return html;
  } // end generateToolbar

  /**
   * generates the save and load button HTML
   * 
   * @return {HTML} the html for the save and load buttons
   */
  generateSaveLoadButtons(): string {
    let html = '<div id=save-load-buttons>';
    html += '<button id=save> Save </button>';
    html += '<input id=file-input type=\'file\' name=\'test\'/>';
    html += '<button id=submit> Submit </button>';
    html += '</div>';
    return html;
  } // end generateSaveLoadButtons

  /**
   * generates the header based on the current model
   *
   * @param {Model} model the model we are generating the header HTML for
   *
   * @return {string} the HTML for the header of the model
   */
  generateHeaderHTML(model): string {
    let html = '<div id=header>';
    html += '<h1><u>';
    html += model.getProjects().getActiveBoard().getTitle();
    html += '</u></h1></div>';
    return html;
  } // end generateHeaderHTML

  generateBodyHTML(model): string {
    let html: string = '<div id=appBody>';
    html += this.generateBoardButtons(model);
    html += this.generateCurrentBoard(model);
    html += '</div>';
    return html;
  }

  generateBoardButtons(model): string {
    let html: string = '<div id=boardButtons>';

    html += '<div id=boardMenuTitle>' + model.getProjects().getTitle() + '</div>';

    let boards = model.getProjects().getBoards();

    for (let i = 0; i < boards.length; i++) {
      html += '<button class=boardButton id=board' + i + '>';
      html += boards[i].getTitle();
      html += '</button>'; 
      html += '</br>';
    }

    html += '</div>';

    return html;
  }

  generateCurrentBoard(model): string {
    let html = '<div id=currentBoard>';
    html += this.generateHeaderHTML(model);
    html += this.generateListsHTML(model);
    html += '</div>';
    return html;
  }

  /**
   * generates all of the lists inside of the model
   *
   * @param {Model} model the model we are displaying the lists for
   *
   * @return {string} the HTML for the lists
   */
  generateListsHTML(model): string {
    let html = '<div class=lists>';

    // for every list, generate the HTML
    for (let i = 0; i < model.getProjects().getActiveBoard().getLists().length; i++) {
      html += '<div id=\'' + model.getProjects().getActiveBoard().getLists()[i].getLabel() + '\' class=\'dropzone list\'>' + 
        '<div class=list-header>' + 
        '<h1 class=list-label><u>' + 
        model.getProjects().getActiveBoard().getLists()[i].getLabel() + 
        '</u></h1>' +
        // '<h1 class=list-label><u>Hello</u></h1>' + 
        this.generateAddButtonHTML(model.getProjects().getActiveBoard().getLists()[i].getLabel()) + 
        '</div>' + 
        this.generateIndividualListHTML(model.getProjects().getActiveBoard().getLists()[i]) +
        // this.generateAddButtonHTML(model.getProjects().getActiveBoard().getLists()[i].getLabel()) +
        '</div>';
    } // end for loop

    return html;
  } // end generateListsHTML

  /**
   * generates the list passed in
   *
   * @param {List} list the list whose HTML is being generated
   *
   * @return {string} the HTML representation of the given list
   */
  generateIndividualListHTML(list: List): string {
    let html = '<div>';
    html += this.generateTaskCardsHTML(list);
    html += '</div>';
    return html;
  } // end generateIndividualListHTML

  /**
   * generates the HTML for all of the task cards in a list
   *
   * @param {List} list the list whose task cards we are generating
   *
   * @return {string} the HTML representation of all of the task cards in the
   *                  list
   */
  generateTaskCardsHTML(list: List): string {
    let html = '<div>';

    // for each task card, generate the HTML
    for (let i = 0; i < list.getTasks().length; i++) {
      html += this.generateIndividualTaskCardHTML(list.getTasks()[i]);
    } // end for loop

    html += '</div>';

    return html;
  } // end generateTaskCardsHTML

  /**
   * generates the HTML for an individual task card
   *
   * @param {TaskCard} task the task card we are generating HTML for
   *
   * @return {string} the HTML representation of the task card
   */
  generateIndividualTaskCardHTML(task: TaskCard): string {
    let html = '<div id=\'' + task.getLabel() + '\' class=\'task-card draggable\'>';

    html += '<div>';
    html += '<div id=' + task.getLabel() + 'Label>';
    html += '<div class="task-card-label"><u>' + task.getLabel() + '</u></div>';
    html += this.generateRemoveButtonHTML(task);
    html += '</div>';
    html += '<div class=task-card-text id=' + task.getLabel() + 'TextField>' + task.getText() + '</div>';

    html += '</div></div>';

    return html;
  } // end generateIndividualTaskCardHTML

  generateRemoveButtonHTML(task: TaskCard) {
    let buttonID = task.getLabel() + 'RemoveButton';
    return '<button id=' + buttonID + ' class=remove-button>' +
      '<i class=\"fa fa-trash-o\"></i></button>';
  } // end generateRemoveButtonHTML

  generateAddButtonHTML(parentID: number) {
    let thisID = parentID + 'AddButton';
    return '<button id=\'' + thisID + '\' class=add-button>+</button>';
  } // end generateAddButtonHTML
} // end View
