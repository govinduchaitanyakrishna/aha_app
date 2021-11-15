/*var http = require('http');
var server = http.createServer(function(req,res){
    res.write('<h1>App with Node Js</h1>');
    res.end()
})
server.listen(6700)*/

var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
    fs.readFile('db.json',function(err,data){
        if (err) throw err;
        res.write(data);
        res.end()
    })
})

server.listen(8000,()=>{
    console.log('Running on port 8000');
})