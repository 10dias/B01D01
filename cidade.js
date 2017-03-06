/**
 *  Achar o nome da cidade através de uma string
    *
    */

'use strict';

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Entre com o nome (ou parde do nome) da cidade: \n', function(res) {
    console.log('res');
    console.log(res);
    rl.close();
});
