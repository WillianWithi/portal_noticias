// importa biblioteca http
var http = require('http');


// criar o servidor
var server = http.createServer(function(requisicao,resposta){
	var categoria = requisicao.url;

	if(categoria == '/tecnologia'){
		resposta.end("<html><body>Noticias de Tecnologia</body></html>");
	} else if(categoria == '/moda'){
		resposta.end("<html><body>Noticias de Moda</body></html>");
	} else if(categoria == '/beleza'){
		resposta.end("<html><body>Noticias de Beleza</body></html>");
	}else{
		resposta.end("<html><body>Portal de noticias</body></html>");
	}
});


// escutar porta 3000
server.listen(3000);


