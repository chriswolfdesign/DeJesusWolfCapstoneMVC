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
let Colors = require('../../src/model/enums/colors.js').Colors;

suite('Unit testing for board.js', function() {
  let testBoard = null;

  // Set up our board
  setup(function() {
    testBoard = new Board('Test Board');
  }); // end set up

  // Test the constructor
  suite('Testing Board Constructor', function() {
    test('Testing Board.title', function() {
      assert(testBoard.title === 'Test Board');
    }); // end Board.title test

    test('Testing Board.lists', function() {
      assert(testBoard.lists.length === 0, 'Should be empty');
    }); // end Board.lists test
  }); // end constructor tests

  // Test the addList function
  suite('Testing Board.addList', function() {
    test('Add colorless list to an empty board', function() {
      assert(testBoard.lists.length === 0, 'Should be empty');
      testBoard.addList('TestList1');
      assert(testBoard.lists.length === 1, 'Should have one list');
      assert(testBoard.lists[0].label === 'TestList1');
      assert(testBoard.lists[0].color === Colors.GRAY);
    }); // end colorless list to empty board test

    test('Add red list to an empty board', function() {
      assert(testBoard.lists.length === 0, 'Should be empty');
      testBoard.addList('TestList1', Colors.RED);
      assert(testBoard.lists.length === 1 , 'Should have one list');
      assert(testBoard.lists[0].label === 'TestList1');
      assert(testBoard.lists[0].color === Colors.RED);
    }); // end red list to empty board test

    test('Add colorless list to an empty board', function() {
      testBoard.addList('TestList1');
      assert(testBoard.lists.length === 1, 'Should have one list');
      testBoard.addList('TestList2');
      assert(testBoard.lists.length === 2, 'Should have two lists');
      assert(testBoard.lists[1].label === 'TestList2');
      assert(testBoard.lists[1].color === Colors.GRAY);
    }); // end colorless list to nonempty board test

    test('Add red list to an empty board', function() {
      testBoard.addList('TestList1');
      assert(testBoard.lists.length === 1, 'Should have one list');
      testBoard.addList('TestList2', Colors.RED);
      assert(testBoard.lists.length === 2, 'Should have two lists');
      assert(testBoard.lists[1].label === 'TestList2');
      assert(testBoard.lists[1].color === Colors.RED);
    })
  }); // end Board.addList tests
}); // end board.js tests
