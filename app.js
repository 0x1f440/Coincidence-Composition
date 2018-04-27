// var app = require('http').createServer(handler),
//      io = require('socket.io').listen(app)
//      fs = require('fs'),
//      five = require('johnny-five');
//
// app.listen(8080);
//
// function handler (req, res) {
//   fs.readFile(__dirname + '/index.html',
//   function (err, data) {
//     if (err) {
//       res.writeHead(500);
//       return res.end('Error loading index.html');
//     }
//
//     res.writeHead(200);
//     res.end(data);
//   });
// }
//
// board = new five.Board();
//
// board.on("ready", function() {
//   // led = new five.Led(13);
//
//   io.sockets.on('connection', function (socket) {
//     socket.on('click', function () {
//       //led.toggle();
//     });
//   });
// });
// //
// // var five = require("johnny-five");
// // var board = new five.Board();
// // var app = require('express')();
// // var server = require('http').createServer(app);
// // // http server를 socket.io server로 upgrade한다
// // var io = require('socket.io')(server);
// //
// // server.listen(3000, function() {
// //   console.log('Socket IO server listening on port 3000');
// // });
// //
// // board.on("ready", function() {
// //   var proximity = new five.Proximity({
// //     controller: "HCSR04",
// //     pin: 7
// //   });
// //
// //   proximity.on("data", function() {
// //     console.log("  cm  : ", this.cm);
// //   });
// // });
// //
// // app.get('/', function(req, res) {
// //   res.sendFile(__dirname + '/index.html');
// // });
// //
// // io.on('connection', function(socket) {
// //   io.emit('login', this.cm );
// // });
// // app.listen(3000);
