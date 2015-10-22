var http= require('http');// 引入一个叫http的module

http.createServer(function (req,res){
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end('Hello World\n')
}).listen(8760, "localhost");