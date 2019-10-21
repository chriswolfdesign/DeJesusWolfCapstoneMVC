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
   * @param {Model} the model we are generating HTML for
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
   * @param {Model} the model we are generating the header HTML for
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
   * @param {Model} the model we are displaying the lists for
   *
   * @return {string} the HTML for the lists
   */
  generateListsHTML(model)  {
    let html = '<div style=\'height: 80vh;\'>';
    
    // for every list, generate the HTML
    for(var i = 0; i < model.boards[0].lists.length; i++) {
      html += '<div style=' + this.generateListStyle(model.boards[0].lists[i]) 
        + '><h1><u>' + model.boards[0].lists[i].label + '</u></h1></div>';
    } // end for loop

    return html;
  }; // end generateListsHTML

  /**
   * generates the list passed in
   *
   * @param {List} the list whose HTML is being generated
   *
   * @return {string} the HTML representation of the given list
   */
  generateIndividualListHTML(list) {
    let html = '<div>'
    html += list.title;
    html += '</div>';
    return html;
  } // end generateIndividualListHTML

  /**
   * generates the style for the individual list
   *
   * @param {List} the list we are trying to generate style for
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
   * @param {List} the list whose color we are calculating
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
} // end View

// export this class
module.exports.View = View;
