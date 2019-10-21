/**
 * view.js
 *
 * The class responsible for generating the HTML based off our current model
 *
 * @author Chris Wolf
 * @version 2.0.0 (October 21, 2019)
 */

class View {
  // Intentionally no constructor

  /**
   * generates HTML based on the current model
   *
   * @param {Model} the model we are generating HTML for
   *
   * @return {string} the HTML for model
   */
  generateHTML(model) {
    let html = '<html>';
    html += this.generateHeaderHTML(model);
    html += '</html>';
    return html;
  } // end generateHTML

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
} // end View

// export this class
module.exports.View = View;
