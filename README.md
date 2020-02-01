# DeJesusWolfCapstoneMVC

Agility -- An agile development board

The purpose of this project is to create an agile development board that can be used in academic
setting to assist professors with managing and supervising student work

Author: Ellery De Jesus
Author: Chris Wolf
Version: 2.0.0
Submission Date: December 10, 2019

Usage:
    No installation should be necessary to run this application.  To run simply open index.html
    in the templates directory

Modifications:
    If you wish to modify this application, you will need to retranspile the main.ts file in
    the src/main directory.  This can be done with the browserify tool.  You can install this 
    tool with the following command

    npm install -g browserify

    From there, we recommend using piping to update the main_transpiled.js file

    Move into the src/main directory and run the following command after making changes

    browserify main.ts > main_transpiled.js
