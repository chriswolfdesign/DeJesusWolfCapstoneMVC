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

  // FIXME: There must be a better way of generating style into this CSS

  /**
   * generates HTML based on the current model
   *
   * @param {Model} model the model we are generating HTML for
   *
   * @return {string} the HTML for model
   */
  generateHTML(model) {
    let html = '<html>';
    html += this.generateStyle();
    html += this.generateHeaderHTML(model);
    html += this.generateListsHTML(model);
    html += '</html>';
    return html;
  } // end generateHTML

  /**
   * Generates the style for this HTML page
   *
   * @return {string} the HTML that specifies the style
   */
  generateStyle() {
    let style = '<style> body {';
    style += 'background-color: purple;';
    style += 'color: white;';
    style += '}';
    style += '</style>';
    return style;
  }

  /**
   * generates the header based on the current model
   *
   * @param {Model} model the model we are generating the header HTML for
   *
   * @return {String} the HTML for the header of the model
   */
  generateHeaderHTML(model)  {
    let html = '<div style=text-align:center;>'
    html += '<h1><u>'
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
    var boardNum = this.idGenerate(0); //Replace 0 with the index of board

    // for every list, generate the HTML
    for(var i = 0; i < model.boards[0].lists.length; i++) {
      html += '<div id=\'' + boardNum + this.idGenerate(i+1) + '000'+ '\' style=' 
        + this.generateListStyle(model.boards[0].lists[i])
        + '><h1><u>' + model.boards[0].lists[i].label + '</u></h1>' +
        this.generateIndividualListHTML(model.boards[0].lists[i], 0, i) +
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
  generateIndividualListHTML(list, boardNum, listNum) {
    let html = '<div>'
    html += this.generateTaskCardsHTML(list, boardNum, listNum);
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
  generateTaskCardsHTML(list, boardNum, listNum) {
    let html = '<div>';

    // for each task card, generate the HTML
    for(var i = 0; i < list.tasks.length; i++) {
      html += this.generateIndividualTaskCardHTML(list.tasks[i], boardNum, listNum, i);
    } // end for loop

    html += '</div>';

    return html;
  } // end genereateTaskCardsHTML

  /**
   * generates the HTML for an individual task card
   *
   * @param {TaskCard} task the task card we are generating HTML for
   *
   * @return {string} the HTML representation of the task card
   */
  generateIndividualTaskCardHTML(task, boardNum, listNum, taskNum) {
    var boardID = this.idGenerate(boardNum);
    var listID = this.idGenerate(listNum+1);
    var taskID = this.idGenerate(taskNum+1);
    var id = boardID + listID + taskID;
    let html = '<div id=\'' + id + '\' ' + this.generateTaskCardStyle() + '>';

    html += '<h>' + task.title + '</h>';
    html += '<p>' + task.text + '</p>';
    html += '<div style=\'position:absolute;right: 0px;bottom: 0px;\'>';
    html += '<button>+</button>';
    html += '<button>++</button>';
    html += '</div>'

    html += '</div>';

    return html;
  } // end genereateIndividualTaskCardHTML

  /**
   * generates the style for a task card
   *
   * @return {string} the HTML representation of the style of a task card
   */
  generateTaskCardStyle() {
    let style = 'style =\'';
    style += 'position: relative;';
    style += 'background-color: grey;';
    style += 'width: 80%;';
    style += 'height: 15vh;';
    style += 'margin-left: auto;';
    style += 'margin-right: auto;';
    style += 'margin-bottom: 10px;';
    style += 'padding-top: 5px;';
    style += 'border-radius: 5px;';
    style += 'font-size: 24px;';
    style += '\'';
    return style;
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
    style += 'height: 80vh;';
    style += 'text-align: center;'
    style += 'border: 5px solid black;';
    style += 'border-radius: 5px;';
    style += 'background-color: ' + this.generateListBackgroundColor(list) +
      ';';
    style += 'color: black;';
    style += 'margin-left: 5px;';
    style += 'width: 23%';
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
        return 'grey'
    } // end switch case
  } // end generateListBackgroundColor

  /**
   * Generates an id based on the index of board and list that the card is in, as well
   * as the card's index. Made with the assumption that the entire HTML will be regenerated
   * if changes are made to Model.
   * 
   * Format:
   *    000 | 000 | 000
   *     1     2     3
   * 1) Signifies Board
   * 2) Signifies List
   * 3) Signifies Text Card
   * 
   *  * The 000 is reserved in section 2 and 3 to be used as the ID
   *    for the board and list respectively (ex. 001000000 is the ID of
   *    the second board)
   * 
   * @param {*} board 
   * @param {*} list 
   * @param {*} card 
   */
  idGenerate(number){
    let num = Number(number);
    var id = num.toString(16);
    while(id.length < 3){
        id = '0' + id;
    }
    return id;
  }


} // end View

// export this class
module.exports.View = View;
