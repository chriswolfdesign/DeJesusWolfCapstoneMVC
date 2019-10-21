/**
 * server.js
 *
 * The server that will generate the front end of our application for users
 * to interact with
 *
 * @author Chris Wolf
 * @version 2.0.0 (October 21, 2019)
 */

let express = require('express');
Controller = require('./controller/controller.js').Controller;

// Define the port number
const PORT = 5000;

const app = express();

let controller = new Controller();

// have the server start listening on PORT
app.listen(PORT, function() {
  console.log('Server is listening on port ' + PORT);
}); // end app.listen

// send some default HTML
app.get('/', function(req, res) {
  res.send(controller.generateHTML());
}); // end app.get
