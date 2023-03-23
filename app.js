/***********************************************************************
* Objetivo: API Back-End WhatsApp
* Autor: Julia Soares de Almeida.
* Data: 19/03/23
* Versão: 1.0
***********************************************************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const jsonContatos = require('./modulo/index.js')

const app = express()

//Cria um objeto com as caracteristicas do express.
app.use((request, response, next) => {
    //Define se a API vai ser pública ou privada.
    response.header('Access-Control-Allow-Origin', '*')

    //Quais métodos poderão ser utilizados nas requisições da API.
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Envia para o cors as regras de permissões
    app.use(cors())

    next()

})

app.get('/v1/senai/perfil/id/:id', cors(), async function(request, response, next){
    let idPerfil = request.params.id
    let statusCode
    let dadosPerfil = {}

    if (idPerfil == '' || idPerfil == undefined || idPerfil.length != 1 || isNaN(idPerfil)){
        statusCode = 400
        dadosPerfil.message = 'Não foi possível processar pois os dados de entrada que foi enviado não corresponde ao exigido.'
    } else {
        let perfil = jsonContatos.getIdPerfil(idPerfil)

        if (perfil) {
            statusCode = 200
            dadosPerfil = perfil
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosPerfil)


})

app.get('/v1/senai/perfil/numero-telefone/:telefone', cors(), async function(request, response, next){
    let numeroTelefone = request.params.telefone
    let statusCode
    let dadosPerfil = {}

    if (numeroTelefone == '' || numeroTelefone == undefined || numeroTelefone.length < 10 || numeroTelefone.length > 11 || isNaN(numeroTelefone)){
        statusCode = 400
        dadosPerfil.message = 'Não foi possível processar pois os dados de entrada que foi enviado não corresponde ao exigido.'
    } else {
        let perfil = jsonContatos.getNumeroPerfil(numeroTelefone)

        if (perfil) {
            statusCode = 200
            dadosPerfil = perfil
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosPerfil)


})

app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080.')
})