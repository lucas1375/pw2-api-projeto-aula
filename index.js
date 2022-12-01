/*IMPORTA O PACOTE DO EXPRESS PARA O SCRIPT index.js*/
const { application } = require('express');
const express = require('express');
const routesCategoria = require('./route/routesCategorias');

/*TORNA O EXPRESS EXECUTÁVEL DENTRO DO SCRIPT inxdex.js
ATRAVÉS DA CONSTANTE app
*/
const app = express();

app.use('/', Routercategorias);

/** ROTAS DE CRUD DE CATEGORIA **/


/** EXEMPLOS DE ROTA **/
// app.get('/', function (req, res) {
//     res.send('RESPOSTA DA ROTA RAIZ DA APLICAÇÃO');
// });

// app.get('/teste', function (req, res) {
//     res.send('RESPOSTA DA ROTA TESTE DA APLICAÇÃO');
// });

/*
CRIAR UM WEBSERVER CAPAZ DE RECEBER REQUISIÇÕES VIA
HTTP
PARAMETROS DO listem
1 - PORTA LÓGICA (OBRIGATÓRIA)
2 - CALLBACK (OPCIONAL)
*/
app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO!');
});