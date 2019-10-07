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
let ListOptions = require('../../src/model/enums/list_options.js').ListOptions;

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

  // Test Board.addListTemplate
  suite('Testing Board.addListTemplate', function() {
    test('Add a Must Have List', function() {
      assert(testBoard.lists.length === 0, 'Should be empty');
      testBoard.addListTemplate(ListOptions.MUST);
      assert(testBoard.lists.length === 1, 'Should have one list');
      assert(testBoard.lists[0].label === 'Must', 'Should be Must');
      assert(testBoard.lists[0].color === Colors.GREEN, 'Should be Green');
    }); // end must have list test

    test('Add a Should Have List', function() {
      assert(testBoard.lists.length === 0, 'Should be empty');
      testBoard.addListTemplate(ListOptions.SHOULD);
      assert(testBoard.lists.length === 1, 'Should have one list');
      assert(testBoard.lists[0].label === 'Should', 'Should be Should');
      assert(testBoard.lists[0].color === Colors.YELLOW, 'Should be Yellow');
    }); // end should have list test

    test('Add a Could Have List', function() {
      assert(testBoard.lists.length === 0, 'Should be empty');
      testBoard.addListTemplate(ListOptions.COULD);
      assert(testBoard.lists.length === 1, 'Should have one list');
      assert(testBoard.lists[0].label === 'Could', 'Should be Could');
      assert(testBoard.lists[0].color === Colors.ORANGE, 'Should be Orange');
    }); // end could have list test

    test('Add a Wont Have List', function() {
      assert(testBoard.lists.length === 0, 'Should be empty');
      testBoard.addListTemplate(ListOptions.WONT);
      assert(testBoard.lists.length === 1, 'Should have one list');
      assert(testBoard.lists[0].label === 'Wont', 'Should be Wont');
      assert(testBoard.lists[0].color === Colors.RED, 'Should be Red');
    }); // end wont have list test
  }); // end Board.addListTemplate tests
}); // end board.js tests
