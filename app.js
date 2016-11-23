// importa biblioteca express
var express = require('express');
var app = express();

// Organizar as rotas  
app.get('/',function(requisicao,resposta){
   resposta.send("<html><body>Portal de noticias</body></html>");
});

app.get('/tecnologia',function(requisicao,resposta){
   resposta.send("<html><body>Noticias de Tecnologia</body></html>");
});

// subir o express
app.listen(3000,function(){
	console.log("Servidor rodando com express");
});


