const Dependente = require('../models/dependente.model')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(404).send({
            message: "Os campos não podem estar vazios"
        })
    }

    const dependente = new Dependente({
        DepId: req.body.DepId,
        SindId: req.body.SindId,
        DepNome: req.body.DepNome,
        DepCel: req.body.DepCel,
        DepCpf: req.body.DepCpf,
        DepRg: req.body.DepRg,
        DepNascimento: req.body.DepNascimento,
        DepSexo: req.body.DepSexo,
        DepParentesco: req.body.DepParentesco,
        DepLicMedic: req.body.DepLicMedic
    });

    Dependente.create(dependente, (err, data) => {
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
    Dependente.getAll((err, data) => {
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
    Dependente.findById(req.params.DepId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Nenhuma Dependente com DepId: ${req.params.DepId} encontrado`
                })
            }
            else {
                res.status(505).send({
                    message: `Erro ao encontrar Dependente com DepId: ${req.params.DepId}`
                })
            }
        }
        else {
            res.send(data)
        }
    })
}

exports.findOneBySindId = (req, res) => {
    Dependente.findBySindId(req.params.SindId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Nenhuma Dependente com SindId: ${req.params.SindId} encontrado`
                })
            }
            else {
                res.status(505).send({
                    message: `Erro ao encontrar Dependente com SindId: ${req.params.SindId}`
                })
            }
        }
        else {
            res.send(data)
        }
    })
}

exports.deleteFromId = (req, res) => {
    Dependente.removeById(req.params.DepId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum Dependente com DepId: ${req.params.DepId} encontrado!!!`
                })
            }
            else {
                res.status(500).send({
                    message: `Erro ao encontrar Dependente com DepId: ${req.params.DepId}`
                })
            }
        }
        else {
            res.send({
                message: `Dependente com DepId: ${req.params.DepId} deletado com Sucesso`
            })
        }
    })
}

exports.deleteAll = (req, res) => {
    Dependente.removeAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }
        else {
            res.send({
                message: "Todas as Dependente foram deletadas com sucesso !!!"
            })
        }
    })
}