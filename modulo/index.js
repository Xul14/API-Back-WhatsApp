/***********************************************************************
* Objetivo: API Back-End WhatsApp
* Autor: Julia Soares de Almeida.
* Data: 19/03/23
* Versão: 1.0
***********************************************************************/

var contatos = require('./contatos.js')

const getIdPerfil = (function (id) {
    let jsonContatos = {}
    let status = false

    contatos.contatos['whats-users'].forEach(perfil => {

        if (contatos.id == id) {
            jsonContatos.contatos = perfil.contacts
            status = true
        }
    })

    if (status) {
        return jsonContatos
    } else {
        return status
    }

})

const getNumeroPerfil = (function (numeroTelefone) {
    let jsonContatos = {}
    let status = false

    contatos.contatos['whats-users'].forEach(perfil => {

        if (contatos.number == numeroTelefone) {
            jsonContatos.contatos = perfil.contacts
            status = true
        }
    })

    if (status) {
        return jsonContatos
    } else {
        return status
    }

})


module.exports = {
    getIdPerfil,
    getNumeroPerfil
}
