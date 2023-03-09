module.exports = app => {
    const sindicalista = require('../controllers/sindicalista.controller');

    var router = require('express').Router();

    router.post("/", sindicalista.create);

    router.get("/", sindicalista.findAll);

    router.get("/Id/:SindId", sindicalista.findOneById);

    router.get("/Nome/:SindNome", sindicalista.findOneByNome);

    router.get("/Cpf/:SindCpf", sindicalista.findOneByCpf);

    router.get("/Rg/:SindRg", sindicalista.findOneByRg);

    router.put('/:SindId', sindicalista.update)

    router.delete('/:SindId', sindicalista.deleteFromId)

    router.delete('/', sindicalista.deleteAll)

    app.use('/api/sindicalista', router)
}