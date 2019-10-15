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
let Board = require('../../src/model/boards/board.js').Board;
let List = require('../../src/model/lists/list.js').List;
let TaskCard = require('../../src/model/task_card.js').TaskCard;

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
    });

    suite('Testing removeBoard method', function() {
        test('App was able to remove a board at the request of the Controller', function() {
            app.boards.push(new Board("One"));
            app.boards.push(new Board("Two"));
            app.boards.push(new Board("Three"));

            controller.removeBoard(0);
            assert(app.boards[0].length != 3, 'App should have removed a board from its list of boards.');
            assert(app.boards[0].title === "Two", 'App should have removed the first board.');

            controller.removeBoard(1);
            assert(app.boards[0].length != 2, 'App should have removed a 2nd board from its list of boards.');
            assert(app.boards[0].title === "Two", 'App should have removed the second board.');
        });
    });

    suite('Testing removeList method', function() {
        test('App was able to remove a list from a board at the request of the Controller', function() {
            app.boards.push(new Board("TestBoard"));
            app.boards[0].lists.push(new List("One", Colors.GREEN));
            app.boards[0].lists.push(new List("Two", Colors.YELLOW));
            app.boards[0].lists.push(new List("Three", Colors.RED));

            controller.removeList(0, 0);
            assert(app.boards[0].length != 3, 'App should have removed a list from the specified board.');
            assert(app.boards[0].lists[0].label === "Two", 'App should have removed the first list.');

            controller.removeList(0, 1);
            assert(app.boards[0].length != 2, 'App should have removed a 2nd list from the specified board.');
            assert(app.boards[0].lists[0].label === "Two", 'App should have removed the 2nd remaining list.');
        });
    });

    suite('Testing removeTaskCard method', function() {
        test('App was able to remove a task card from a list in a board at the request of Controller', function() {
            app.boards.push(new Board("TestBoardA"));
            app.boards.push(new Board("TestBoardB"));
            app.boards[0].lists.push(new List("TestListA"));
            app.boards[0].lists.push(new List("TestListB"));
            app.boards[1].lists.push(new List("TestListC"));

            app.boards[0].lists[0].tasks.push(new TaskCard("One", ""));
            app.boards[0].lists[0].tasks.push(new TaskCard("Two", ""));
            app.boards[0].lists[0].tasks.push(new TaskCard("Three", ""));
            app.boards[0].lists[1].tasks.push(new TaskCard("TestCardA", ""));
            app.boards[1].lists[0].tasks.push(new TaskCard("TestCardB", ""));

            controller.removeTaskCard(0, 0, 0);
            assert(app.boards[0].lists[0].tasks.length != 3, 'App should have removed a task card from the first list in the' +
                                                             ' first board');
            assert(app.boards[0].lists[0].tasks[0].label === "Two", 'App should have removed the first task card.');

            controller.removeTaskCard(0, 0, 1);
            assert(app.boards[0].lists[0].tasks.length != 2, 'App should have removed a 2nd task card from the first list in the' +
                                                             ' first board');
            assert(app.boards[0].lists[0].tasks[0].label === "Two", 'App should have removed the 2nd task card.');

            controller.removeTaskCard(1, 0, 0);
            assert(app.boards[1].lists[0].tasks.length != 1, 'App should have removed a task card from the 2nd board\'s first list');

            controller.removeTaskCard(0, 1, 0);
            assert(app.boards[0].lists[1].tasks.length != 1, 'App should have removed a task card from the 1st board\'s second list');
        })
    })

});