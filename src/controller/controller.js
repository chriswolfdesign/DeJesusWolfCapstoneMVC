let App = require('../model/app.js').App;

class Controller{
    constructor() {
        this.model = new App();
        this.model.setController(this);
        // this.view = ...
        // this.view.setController(this);
    }

    generateBoard(option) {
        this.model.generateBoardTemplate(option);
    }

    getModel() {
        return this.model;
    }
}

module.exports.Controller = Controller