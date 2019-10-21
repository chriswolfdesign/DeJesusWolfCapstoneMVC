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

// Define the port number
const PORT = 5000;

const app = express();

// have the server start listening on PORT
app.listen(PORT, function() {
  console.log('Server is listening on port ' + PORT);
}); // end app.listen

// send some default HTML
app.get('/', function(req, res) {
  res.send('<h1>Testing</h1>');
}); // end app.get
