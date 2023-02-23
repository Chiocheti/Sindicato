module.exports = app => {
    const usuario = require('../controllers/usuario.controller');

    var router = require("express").Router();

    router.post('/', usuario.create);
    
    router.get('/', usuario.findAll);

    router.get('/idUsuario/:idUsuario', usuario.findOneById)
    
    router.get('/nomeUsuario/:nomeUsuario', usuario.findOneByNome)
    
    router.get('/loginSenha/:loginUsuario/:senhaUsuario', usuario.findOneByLoginAndSenha)

    router.put('/:idUsuario', usuario.update)
    
    router.delete('/:idUsuario', usuario.deleteFromId)
    
    router.delete('/', usuario.deleteAll)

    app.use('/api/usuario', router)
}