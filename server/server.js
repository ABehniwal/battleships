const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:8080",
  },
});

const path = require('path')
app.get('/Main.js', function(req, res){
    res.sendFile(path.resolve(__dirname, '../client/js/Main.js'));
});

app.get('/Game.js', function(req, res){
    res.sendFile(path.resolve(__dirname, '../client/js/Game.js'));
});

app.get('/Design.js', function(req, res){
    res.sendFile(path.resolve(__dirname, '../client/js/Design.js'));
});

app.get('/main.css', function(req, res){
    res.sendFile(path.resolve(__dirname, '../client/css/main.css'));
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

io.on('connection', (socket) => {
	//connect/disconnect
	console.log('a user connected');
	socket.on('disconnect', () => {
	console.log('user disconnected');
	});

	//client gets nickname
	io.on('connection', (socket) => {
	  socket.on('nickname', (msg) => {
	    console.log('nickname: ' + msg);
	  });
	});
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);
