
/** Here is where API end point is defined*/
var utils = require('./utils/writer.js');
var fs = require('fs');
var path = require('path');

const KeyList = [
    {key:'key1', value:'value1'},
    {key:'key2', value:'value2'},
    {key:'key3', value:'value3'}
];


module.exports.default = function(req, res) {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("\\Key : to list all the Key value pair\n");
}

module.exports.getAllKeys = function(req, res,next) {
    let response = KeyList;
    utils.writeJson(res,response);
}

module.exports.get = function(req,res,next){
    let key = req.params.key;
    let State = req.body;
    let response = {
        key: key,
        label:"Label for the key is not Found"
    }
    for (let i = 0; i < KeyList.length; i++) {
        if (KeyList[i].key == key) {
            response = KeyList[i]
            break;
        }
    }
    utils.writeJson(res,response);
}
