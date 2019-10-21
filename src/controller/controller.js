let App = require('../model/app.js').App;
let View = require('../view/view.js').View;
let BoardOptions = require('../model/enums/board_options.js').BoardOptions;

class Controller{
    constructor() {
        this.model = new App('MoSCoW Board');
        this.model.setController(this);
        this.view = new View();
        this.generateBoardTemplate(BoardOptions.MOSCOW);

        /**
         * DEMO CODE
         * Simply for demonstration purposes
         * Remove after sprint review
         */
        this.model.boards[0].lists[0].addTask('MT1', 'Must Task 1');
        this.model.boards[0].lists[0].addTask('MT2', 'Must Task 2');

        this.model.boards[0].lists[1].addTask('CT1', 'Could Task 1');
        this.model.boards[0].lists[1].addTask('CT2', 'Could Task 2');

        this.model.boards[0].lists[2].addTask('ST1', 'Should Task 1');
        this.model.boards[0].lists[2].addTask('ST2', 'Should Task 2');

        this.model.boards[0].lists[3].addTask('WT1', 'Wont Task 1');
        this.model.boards[0].lists[3].addTask('WT2', 'Wont Task 2');
        /**
         * END DEMO CODE
         */

    }

    //generateBoard(label, color);

    generateBoardTemplate(option) {
        this.model.generateBoardTemplate(option);
    }

    removeBoard(boardID) {
        this.model.removeBoard(boardID);
    }

    generateList(boardID, label, color) {
        this.model.generateList(boardID, label, color);
    }

    removeList(boardID, listID) {
        this.model.removeList(boardID, listID);
    }

    generateListTemplate(boardID, option) {
        this.model.generateListTemplate(boardID, option);
    }

    generateTaskCard(boardID, listID, label, text) {
        this.model.generateTaskCard(boardID, listID, label, text);
    }

    removeTaskCard(boardID, listID, cardID) {
        this.model.removeTaskCard(boardID, listID, cardID);
    }

    getModel() {
        return this.model;
    }

    /**
     * Calls the view class to generate HTML based on the given model
     *
     * @return {String} html based off of model
     */
    generateHTML() {
        return this.view.generateHTML(this.model);
    }
}

module.exports.Controller = Controller
