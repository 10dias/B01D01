/**
 *  Achar o nome da cidade através de uma string
    *
    */

'use strict';

var readline = require('readline');
var http = require('http');

var API = {
    host: 'http://api.teleport.org',
    path: '/api/cities/?search='
};

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Entre com o nome (ou parte do nome) da cidade: \n', function(ans) {
    rl.close();
    http.get(API.host + API.path + ans.toLowerCase().trim(), function(res) {
        var finalData = '';
        res.on('data', function(d) {
            finalData +=d;
        });
        res.on('end', function() {
            finalData = JSON.parse(finalData);
            console.log(JSON.stringify(finalData, null, 2));
        });
    });
});
