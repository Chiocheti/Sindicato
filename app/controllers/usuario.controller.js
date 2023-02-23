const Usuario = require("../models/usuario.model.js")

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Os campos não podem estar vazios"
        })
    }

    const usuario = new Usuario({
        idUsuario: req.body.idUsuario,
        idSindicato: req.body.idSindicato,
        nomeUsuario: req.body.nomeUsuario,
        tipoPermissao: req.body.tipoPermissao,
        loginUsuario: req.body.loginUsuario,
        senhaUsuario: req.body.senhaUsuario,
        telefoneUsuario: req.body.telefoneUsuario
    });

    Usuario.create(usuario, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message
            })
        }
        else {
            res.send(data)
        }
    })
}

exports.findAll = (req, res) => {
    Usuario.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message
            })
        }
        else {
            res.send(data)
        }
    })
}

exports.findOneById = (req, res) => {
    Usuario.findById(req.params.idUsuario, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Nenhum Usuario com Id: ${req.params.idUsuario} encontrado`
                })
            }
            else {
                res.status(505).send({
                    message: `Erro ao encontrar Usuario com Id: ${req.params.idUsuario}`
                })
            }
        }
        else {
            res.send(data)
        }
    })
}

exports.findOneByNome = (req, res) => {
    Usuario.findByNome(req.params.nomeUsuario, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Nenhum Usuario com Nome: ${req.params.nomeUsuario} encontrado`
                })
            }
            else {
                res.status(505).send({
                    message: `Erro ao encontrar Usuario com Nome: ${req.params.nomeUsuario}`
                })
            }
        }
        else {
            res.send(data)
        }
    })
}

exports.findOneByLoginAndSenha = (req, res) => {
    Usuario.findByLoginAndSenha(req.params.loginUsuario, req.params.senhaUsuario, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Nenhum Usuario com loginUsuario: ${req.params.loginUsuario} e senhaUsuario: ${req.params.senhaUsuario} encontrado!!!`
                })
            }
            else {
                res.status(505).send({
                    message: `Erro ao encontrar Usuario com loginUsuario: ${req.params.loginUsuario} e senhaUsuario: ${req.params.senhaUsuario}`
                })
            }
        }
        else {
            res.send(data)
        }
    })
}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Os campos não podem estar vazios"
        })
    }

    Usuario.updateById(req.params.idUsuario, new Usuario(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum Usuario com idUsuario: ${req.params.idUsuario} encontrado!!!`
                })
            }
            else {
                res.status(500).send({
                    message: `Erro ao encontrar Usuario com idUsuario: ${req.params.idUsuario}`
                })
            }
        }
        else {
            res.send(data)
        }
    })
}

exports.deleteFromId = (req, res) => {
    Usuario.removeById(req.params.idUsuario, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum Usuario com idUsuario: ${req.params.idUsuario} encontrado!!!`
                })
            }
            else {
                res.status(500).send({
                    message: `Erro ao encontrar Usuario com idUsuario: ${req.params.idUsuario}`
                })
            }
        }
        else {
            res.send({
                message: `Usuario com idUsuario: ${req.params.idUsuario} deletado com Sucesso`
            })
        }
    })
}

exports.deleteAll = (req, res) => {
    Usuario.removeAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }
        else {
            res.send({
                message: "Todos os Usuarios foram deletados com sucesso !!!"
            })
        }
    })
}