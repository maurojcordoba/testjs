"use strict"

// import my local module 
const myModule = require('./myModule');


console.log( myModule.hello('Mauro Cordoba'));

//const result = process.env.computername;
//console.log( result );

// ------- Make a Server ------------
// const http = require('http'); // before ES6
/*
import http from 'http'; //ES6

const server = http.createServer( (request, response)=>{

    response.writeHead(200, {'Content-type': 'text/html'});
    response.write('Response:' +  Date(Date.now()).toString() )

    console.log('get request web');
});

server.listen(3000);

console.log('server running.. ',Date.now());
*/

// --- Read a file ---
console.log('--- Read a file ---');

const fs = require('fs');

const file = fs.readFile('./files/test.txt','utf8', (err,data) => {

    if (err)
        console.log("Error:", err.message);
    else
        console.log("Second:", data);
});


console.log("First: ", file);


// --- Read a directory ---
console.log('--- Read a directory ---');


fs.readdir('./', { withFileTypes : true} , (err,data) => {

    if (err){
        console.log("Error:", err.message);
    }
    else
    {
        console.log(data);
        
        for (let d in data){
            //console.log(data[d].Symbol(type));
        }

        data.forEach((d,i)=>{
            console.log(d.name);
        })
        
    }
    
});

