/**
 * view.js
 *
 * The class responsible for generating the HTML based off our current model
 *
 * @author Chris Wolf
 * @version 2.0.0 (October 21, 2019)
 */

let Color = require('../model/enums/colors.js').Colors;

class View {
  // Intentionally no constructor

  /**
   * generates HTML based on the current model
   *
   * @param {Model} model the model we are generating HTML for
   *
   * @return {string} the HTML for model
   */
  generateHTML(model) {
    let html = '<div>';
    html += this.generateToolbar();
    html += this.generateHeaderHTML(model);
    html += this.generateListsHTML(model);
    // html += this.generateSaveLoadButtons();
    html += '</div>';
    return html;
  } // end generateHTML

  /**
   * generates the toolbar HTML
   * 
   * @return {HTML} the html for the toolbar
   */
  generateToolbar() {
    // return '<div id=toolbar><u>Agility</u></div>';

    let html = '<div id=toolbar>';
    html += this.generateSaveLoadButtons();
    html += '<div style=\'display: inline-block; margin-left: 320px;\'><u>Agility</u></div>';
    html += '</div>';
    return html;
  } // end generateToolbar

  /**
   * generates the save and load button HTML
   * 
   * @return {HTML} the html for the save and load buttons
   */
  generateSaveLoadButtons() {
    let html = '<div style=\'display: inline-block\'>';
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
   * @return {String} the HTML for the header of the model
   */
  generateHeaderHTML(model)  {
    let html = '<div style=text-align:center;>';
    html += '<h1><u>';
    html += model.title;
    html += '</u></h1></div>';
    return html;
  }; // end generateHeaderHTML

  /**
   * generates all of the lists inside of the model
   *
   * @param {Model} model the model we are displaying the lists for
   *
   * @return {string} the HTML for the lists
   */
  generateListsHTML(model)  {
    let html = '<div style=\'height: 80vh;\'>';

    // for every list, generate the HTML
    for(let i = 0; i < model.boards[0].lists.length; i++) {
      html += '<div id=\'' + model.boards[0].lists[i].label + '\' class=\'dropzone\' style='
          + this.generateListStyle(model.boards[0].lists[i])
        + '; position: fixed;><h1><u>' + model.boards[0].lists[i].label + '</u></h1>' +
        this.generateIndividualListHTML(model.boards[0].lists[i]) +
          this.generateButtonHTML(model.boards[0].lists[i].label) +
        '</div>';
    } // end for loop

    return html;
  }; // end generateListsHTML

  /**
   * generates the list passed in
   *
   * @param {List} list the list whose HTML is being generated
   *
   * @return {string} the HTML representation of the given list
   */
  generateIndividualListHTML(list) {
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
  generateTaskCardsHTML(list) {
    let html = '<div>';

    // for each task card, generate the HTML
    for(let i = 0; i < list.tasks.length; i++) {
      html += this.generateIndividualTaskCardHTML(list.tasks[i]);
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
  generateIndividualTaskCardHTML(task) {
    let html = '<div id=\'' + task.label + '\' class=\'task-card draggable\'>';

    html += '<div>';
    html += '<div id=' + task.label + 'Text>'; // + task.text + '</div>';
    html += '<div style=\'text-align: left; font-size: 12pt; display: inline-block;\'><u>' + task.label + '</u></div>';
    html += this.generateRemoveButtonHTML(task);
    html += '</div>';
    html += '<div style=\'text-align: center; font-size: 14pt;\'>' + task.text + '</div>';

    html += '</div></div>';

    return html;
  } // end generateIndividualTaskCardHTML

  generateRemoveButtonHTML(task) {
    let buttonID = task.label + "RemoveButton";
    return '<button id=' + buttonID + ' class=remove-button>' +
      'X</button>';
  }

  /**
   * generates the style for the individual list
   *
   * @param {List} list the list we are trying to generate style for
   *
   * @return {string} the HTML for the style of this
   */
  generateListStyle(list) {
    let style = '\'';
    style += 'display: inline-block;';
    style += 'vertical-align: top;';
    style += 'min-height: 80vh;';
    style += 'text-align: center;';
    style += 'border: 5px solid black;';
    style += 'border-radius: 10px;';
    style += 'background-color: ' + this.generateListBackgroundColor(list) +
      ';';
    style += 'color: black;';
    style += 'margin-left: 5px;';
    style += 'width: 23%;';
    style += '\'';
    return style;
  } // end generateListStyle

  /**
   * generates the background color based on the list's color property
   *
   * @param {List} list the list whose color we are calculating
   *
   * @return {string} string representation of the list's color
   */
  generateListBackgroundColor(list) {
    switch(list.color) {
      case Color.GREEN:
        return 'green';
      case Color.YELLOW:
        return 'yellow';
      case Color.ORANGE:
        return 'orange';
      case Color.RED:
        return 'red';
      default:
        return 'white'
    } // end switch case
  } // end generateListBackgroundColor

  generateButtonHTML(parentID) {
    let thisID = parentID + 'AddButton';
    return "<button id=\'" + thisID + "\' class=add-button>+</button>";
  } // end generateButtonHTML
} // end View

// export this class
module.exports.View = View;
