module.exports = app => {
    const dependente = require("../controllers/dependente.controller.js")

    var router = require("express").Router();

    router.post('/', dependente.create);

    router.get('/', dependente.findAll);

    router.get('/Id/:DepId', dependente.findOneById);

    router.get('/Sind/:SindId', dependente.findOneBySindId);

    router.delete('/:DepId', dependente.deleteFromId)

    router.delete('/', dependente.deleteAll)

    app.use('/api/dependente', router)
}