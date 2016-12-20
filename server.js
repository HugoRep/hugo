var http = require("http");
var express = require("express");
var app = express();
var events = require('events');
var net = require('net');
var emitter = new events.EventEmitter();
emitter.emit( 'simpleEvent');


var httpServer = http.createServer(app).listen( process.env.PORT,  function( req , res ) {
	app.use(express.static('public'));
	console.log ( req , res ) ;
	console.log ( 'Server Connect -----')
});

var io = require("socket.io").listen( httpServer )

io.sockets.on('connection' , function(socket){
    socket.emit('toclient' , {msg:'hello'});
    
    socket.on('fromClient' , function(data){
        socket.broadcast.emit('toclient' , data);
        console.log ( 'from : ' , data);
        socket.emit('toclient' , data );
    })
})


/*http.createServer((req , res )  => {
	app.use(express.static('public'));
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    
	//console.log ( req , res ) ;
	console.log ( 'Server Connect -----')
}).listen(process.env.PORT, process.env.IP);*/


/*


*/