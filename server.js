'use strict';
/**
 * This is the Entry point for the Nodejs application
 */
var fs = require('fs'),
    path = require('path'),
    http = require('http');

const express = require('express');
const app = express();
const router  = new express.Router();
var serverPort = 3002;

// CORS - Cross-Origin
var cors = require('cors');
app.use(cors());

//Body parser for Body parameters
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// API endpoints definition
var API = require('./api');
app.get('/Key/:key', API.get);
app.get('/Keys',API.getAllKeys);
app.get('/',API.default);

//Create server
var server = http.createServer(app);

//Start Server
server.listen(serverPort, function() {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);    
});