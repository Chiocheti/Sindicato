module.exports = app => {
    const empresa = require("../controllers/empresa.controller.js")

    var router = require("express").Router();

    router.post('/', empresa.create);

    router.get('/', empresa.findAll);

    router.get('/Id/:EmpId', empresa.findOneById);

    router.get('/Sind/:SindId', empresa.findOneBySindId);

    router.delete('/:EmpId', empresa.deleteFromId)

    router.delete('/', empresa.deleteAll)

    app.use('/api/empresa', router)
}