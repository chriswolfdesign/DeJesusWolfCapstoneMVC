/**
 * test_app.js
 *
 * Unit testing for app.js
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */

let assert = require('chai').assert;
let App = require('../../src/model/app.js').App;
let BoardOptions = require('../../src/model/enums/board_options.js').BoardOptions;

suite('Unit testing for app.js', function() {
  let app = null;

  // Set up our app
  setup(function() {
    app = new App();
  }); // end setup

  // Test the constructor
  suite('Testing App constructor', function() {
    test('Boards genereated correctly', function() {
      assert(app.boards.length === 0, 'Should be empty');
    }); // end board generation test
  }); // end constructor tests

  // Test App.generateBoard
  test('Testing App.generateBoard', function() {
    app.generateBoardTemplate(BoardOptions.MOSCOW);
    assert(app.boards[0].title === 'MoSCoW Board', 'Should be MoSCoW Board');
  }); // end App.generateBoard test
}); // end unit testing for app.js
