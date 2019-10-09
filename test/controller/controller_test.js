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
            controller.generateBoard(BoardOptions.MOSCOW);
            assert(app.boards.length != 0, 'App should have created a board at the request'+
                                        ' of the Controller');
            assert(app.boards[0].title === 'MoSCoW Board', 'Board created should be the same'+
                                        ' board type as was requested.');
        });
    });

});