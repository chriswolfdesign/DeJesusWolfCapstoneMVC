/**
 * test_list.js
 *
 * Unit testing for list.js
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

let assert = require('chai').assert;
let List = require('../../src/model/list.js').List;
let Colors = require('../../src/model/enums/colors.js').Colors;

suite('Unit testing for task-card.js', function() {
  let listOneParam = null;
  let listTwoParam = null;

  // Set up our lists
  suiteSetup(function() {
    listOneParam = new List('ListA');
    listTwoParam = new List('ListB', Colors.RED);
  }); // end set up

  // Test the constructor
  suite('Testing List Constructor', function() {
    test('Testing ListA.label', function() {
      assert(listOneParam.label === 'ListA', 'Should be ListA');
    }); // end ListA.label test

    test('Testing ListA.color', function() {
      assert(listOneParam.color === Colors.GRAY, 'Should be gray');
    }); // end ListA.color test

    test('Testing ListA.tasks', function() {
      assert(listOneParam.tasks.length === 0, 'Should be empty list');
    }); // end ListA.tasks test

    test('Testing ListB.label', function() {
      assert(listTwoParam.label === 'ListB', 'Should be ListB');
    }); // end ListB.label test

    test('Testing ListB.color', function() {
      assert(listTwoParam.color === Colors.RED, 'Should be red');
    }); // end ListB.color test

    test('Testing ListB.tasks', function() {
      assert(listTwoParam.tasks.length === 0, 'Should be empty list');
    }); // end ListB.tasks test
  }); // end constructor tests
}); // end unit testing for list.js
