let App = require('../model/app.js').App;

class Controller{
    constructor() {
        this.model = new App();
        this.model.setController(this);
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
}

module.exports.Controller = Controller