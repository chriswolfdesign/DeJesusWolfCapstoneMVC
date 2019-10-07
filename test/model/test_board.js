/**
 * test_board.js
 *
 * Unit testing for board.js
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */

let assert = require('chai').assert;
let Board = require('../../src/model/board.js').Board;

suite('Unit testing for board.js', function() {
  let TestBoard = null;

  // Set up our board
  suiteSetup(function() {
    TestBoard = new Board('Test Board');
  }); // end set up

  // Test the constructor
  suite('Testing Board Constructor', function() {
    test('Testing Board.title', function() {
      assert(TestBoard.title === 'Test Board');
    }); // end Board.title test

    test('Testing Board.lists', function() {
      assert(TestBoard.lists.length === 0, 'Should be empty');
    }); // end Board.lists test
  }); // end constructor tests
}); // end board.js tests
