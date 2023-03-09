const Empresa = require('../models/empresa.model.js')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(404).send({
            message: "Os campos não podem estar vazios"
        })
    }

    const empresa = new Empresa({
        EmpId: req.body.EmpId,
        SindId: req.body.SindId,
        EmpNome: req.body.EmpNome,
        EmpCnpj: req.body.EmpCnpj,
        EmpCodEmpresa: req.body.EmpCodEmpresa,
        EmpAdmissao: req.body.EmpAdmissao,
        EmpDemissao: req.body.EmpDemissao,
        EmpContribuinte: req.body.EmpContribuinte
    });

    Empresa.create(empresa, (err, data) => {
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
    Empresa.getAll((err, data) => {
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
    Empresa.findById(req.params.EmpId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Nenhuma Empresa com EmpId: ${req.params.EmpId} encontrado`
                })
            }
            else {
                res.status(505).send({
                    message: `Erro ao encontrar Empresa com EmpId: ${req.params.EmpId}`
                })
            }
        }
        else {
            res.send(data)
        }
    })
}

exports.findOneBySindId = (req, res) => {
    Empresa.findBySindId(req.params.SindId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Nenhuma Empresa com SindId: ${req.params.SindId} encontrado`
                })
            }
            else {
                res.status(505).send({
                    message: `Erro ao encontrar Empresa com SindId: ${req.params.SindId}`
                })
            }
        }
        else {
            res.send(data)
        }
    })
}

exports.deleteFromId = (req, res) => {
    Empresa.removeById(req.params.EmpId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum Empresa com EmpId: ${req.params.EmpId} encontrado!!!`
                })
            }
            else {
                res.status(500).send({
                    message: `Erro ao encontrar Empresa com EmpId: ${req.params.EmpId}`
                })
            }
        }
        else {
            res.send({
                message: `Empresa com EmpId: ${req.params.EmpId} deletado com Sucesso`
            })
        }
    })
}

exports.deleteAll = (req, res) => {
    Empresa.removeAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }
        else {
            res.send({
                message: "Todas as Empresa foram deletadas com sucesso !!!"
            })
        }
    })
}