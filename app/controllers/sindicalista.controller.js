const Sindicalista = require("../models/sindicalista.model.js")

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Os campos não podem estar vazios"
        })
    }
    const sindicalista = new Sindicalista({
        SindId: req.body.SindId,
        SindCodSindicato: req.body.SindCodSindicato,
        SindNome: req.body.SindNome,
        SindCpf: req.body.SindCpf,
        SindRg: req.body.SindRg,
        SindOrgaoEmissor: req.body.SindOrgaoEmissor,
        SindCel01: req.body.SindCel01,
        SindCel02: req.body.SindCel02,
        SindCel03: req.body.SindCel03,
        SindNascimento: req.body.SindNascimento,
        SindEmail: req.body.SindEmail,
        SindCarteiraDeTrabalho: req.body.SindCarteiraDeTrabalho,
        SindVencimento: req.body.SindVencimento,
        SindSexo: req.body.SindSexo,
        SindEstadoCivil: req.body.SindEstadoCivil,
        SindInstrucao: req.body.SindInstrucao,
        SindTipo: req.body.SindTipo,
        SindSituacao: req.body.SindSituacao,
        SindJornal: req.body.SindJornal,
        SindDeficiencia: req.body.SindDeficiencia,
        SindDetalhes: req.body.SindDetalhes,
        End01Cep: req.body.End01Cep,
        End01Rua: req.body.End01Rua,
        End01Numero: req.body.End01Numero,
        End01Bairro: req.body.End01Bairro,
        End01Estado: req.body.End01Estado,
        End01Cidade: req.body.End01Cidade,
        End02Cep: req.body.End02Cep,
        End02Rua: req.body.End02Rua,
        End02Numero: req.body.End02Numero,
        End02Bairro: req.body.End02Bairro,
        End02Estado: req.body.End02Estado,
        End02Cidade: req.body.End02Cidade
    });

    Sindicalista.create(sindicalista, (err, data) => {
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
    Sindicalista.getAll((err, data) => {
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
    Sindicalista.findById(req.params.SindId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Nenhum Sindicalista com Id: ${req.params.SindId} encontrado`
                })
            }
            else {
                res.status(505).send({
                    message: `Erro ao encontrar Sindicalista com Id: ${req.params.SindId}`
                })
            }
        }
        else {
            res.send(data)
        }
    })
}

exports.findOneByNome = (req, res) => {
    Sindicalista.findByNome(req.params.SindNome, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Nenhum Sindicalista com Nome: ${req.params.SindNome} encontrado`
                })
            }
            else {
                res.status(505).send({
                    message: `Erro ao encontrar Sindicalista com Nome: ${req.params.SindNome}`
                })
            }
        }
        else {
            res.send(data)
        }
    })
}

exports.findOneByCpf = (req, res) => {
    Sindicalista.findByCpf(req.params.SindCpf, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Nenhum Sindicalista com Cpf: ${req.params.SindCpf} encontrado`
                })
            }
            else {
                res.status(505).send({
                    message: `Erro ao encontrar Sindicalista com Cpf: ${req.params.SindCpf}`
                })
            }
        }
        else {
            res.send(data)
        }
    })
}

exports.findOneByRg = (req, res) => {
    Sindicalista.findByRg(req.params.SindRg, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Nenhum Sindicalista com Rg: ${req.params.SindRg} encontrado`
                })
            }
            else {
                res.status(505).send({
                    message: `Erro ao encontrar Sindicalista com Rg: ${req.params.SindRg}`
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

    Sindicalista.updateById(req.params.SindId, new Sindicalista(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum Sindicalista com SindId: ${req.params.SindId} encontrado!!!`
                })
            }
            else {
                res.status(500).send({
                    message: `Erro ao encontrar Sindicalista com SindId: ${req.params.SindId}`
                })
            }
        }
        else {
            res.send(data)
        }
    })
}

exports.deleteFromId = (req, res) => {
    Sindicalista.removeById(req.params.SindId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum Sindicalista com SindId: ${req.params.SindId} encontrado!!!`
                })
            }
            else {
                res.status(500).send({
                    message: `Erro ao encontrar Sindicalista com SindId: ${req.params.SindId}`
                })
            }
        }
        else {
            res.send({
                message: `Sindicalista com SindId: ${req.params.SindId} deletado com Sucesso`
            })
        }
    })
}

exports.deleteAll = (req, res) => {
    Sindicalista.removeAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }
        else {
            res.send({
                message: "Todos os Sindicalista foram deletados com sucesso !!!"
            })
        }
    })
}