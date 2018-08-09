const express=require("express");
const app =express();

app.use(express.static("public"));

app.get("/", function(req,res){
res.sendfile("index.html"); 
});



server = app.listen(3000);


const io = require("socket.io")(server);
var i=0;

io.on("connection", function(socket){
	console.log("New user connected");
	setInterval(function(){
		socket.emit("evento","i="+i);
		},3000);
	socket.on("message", function(data){
	console.log("Numero stampato su console");
	i++;});
});
	

