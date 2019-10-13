let App = require('../model/app.js').App;

class Controller{
    constructor() {
        this.model = new App();
        this.model.setController(this);
        // this.view = ...
        // this.view.setController(this);
    }

    //generateBoard(label, color);

    generateBoardTemplate(option) {
        this.model.generateBoardTemplate(option);
    }

    generateList(boardID, label, color) {
        this.model.generateList(boardID, label, color);
    }

    generateListTemplate(boardID, option) {
        this.model.generateListTemplate(boardID, option);
    }

    generateTaskCard(boardID, listID, label, text) {
        this.model.generateTaskCard(boardID, listID, label, text);
    }

    getModel() {
        return this.model;
    }
}

module.exports.Controller = Controller