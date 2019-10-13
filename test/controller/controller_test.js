 /**
 * controller_test.js
 *
 * Unit testing for controller.js
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 8, 2019)
 */

let assert = require('chai').assert;
let Controller = require('../../src/controller/controller.js').Controller;
let App = require('../../src/model/app.js').App;
let BoardOptions = require('../../src/model/enums/board_options.js').BoardOptions;
let ListOptions = require('../../src/model/enums/list_options.js').ListOptions;
let Colors = require('../../src/model/enums/colors.js').Colors;

suite('Unit testing for controller.js', function() {
    let controller = null;

    setup(function() {
        controller = new Controller();
        app = controller.getModel();
    });

    //Test constructor
    suite('Testing Constructor', function() {
        test('App was created.', function() {
            assert(app != null, 'App should not be null.');
            assert(app instanceof App, 'App should be an instance of the App object.')
        });
        test('App has a empty list of boards.', function() {
            assert(app.boards.length == 0, 'App should have an empty list of boards.')
        });
    });

    suite('Testing generateBoard method', function() {
        test('App was able to create a board at the request of the Controller.', function() {
            controller.generateBoardTemplate(BoardOptions.MOSCOW);
            assert(app.boards.length != 0, 'App should have created a board at the request'+
                                        ' of the Controller');
            assert(app.boards[0].title === 'MoSCoW Board', 'Board created should be the same'+
                                        ' board type as was requested.');
        });
    });

    suite('Testing generateList method', function() {
        test('App was able to create a list at the specified board at the request'
             + '  of the controller', function() {
            controller.generateBoardTemplate(BoardOptions.MOSCOW);
            controller.generateList(0, "Test", Colors.RED);
            assert(app.boards[0].lists.length != 4, 'App should have created a list at the'+
                                                    'requested board');
            assert(app.boards[0].lists[4].label === "Test", 'App should have created a list with '+
                                                            'the label "Test"');
            assert(app.boards[0].lists[4].color  === Colors.RED, 'App should have created a list'+
                                                               ' at the requested board with the'+
                                                               ' color of red.');
        });
    });

    suite('Testing generateListTemplate method', function() {
        test('App was able to create a list with a template option at the specified '+
             'board at the request of the Controller', function() {
            controller.generateBoardTemplate(BoardOptions.MOSCOW);
            controller.generateListTemplate(0, ListOptions.MUST);
            assert(app.boards[0].lists.length != 4, 'App should have created a second list at the '+
                                                    'requested board');
            assert(app.boards[0].lists[4].label === "Must", 'App should have created a list with '+
                                                            'the label "Must"');
            assert(app.boards[0].lists[4].color === Colors.GREEN, 'App should have created a list'+
                                                               ' at the requested board with the'+
                                                               ' color of green.');
        })
    });

    suite('Testing generateTaskCard method', function() {
        test('App was able to create a task card within the list specified at the'+
             ' request of the Controller', function() {
            controller.generateBoardTemplate(BoardOptions.MOSCOW);
            controller.generateTaskCard(0, 0, "Test", "This is a test.");
            assert(app.boards[0].lists[0].tasks.length != 0, 'App should have created a task card within '+
                                                          '"Must" in the first board.');
            assert(app.boards[0].lists[0].tasks[0].label === "Test", 'The created task Card\'s label should be "Test"');
            assert(app.boards[0].lists[0].tasks[0].text === "This is a test.", 'The created task card\'s text '
                                                            + 'should be "This is a test."');
        })
    })

});