const sql = require('./db.js');

const Usuario = function (usuario) {
    this.idUsuario = usuario.idUsuario;
    this.idSindicato = usuario.idSindicato;
    this.nomeUsuario = usuario.nomeUsuario;
    this.tipoPermissao = usuario.tipoPermissao;
    this.loginUsuario = usuario.loginUsuario;
    this.senhaUsuario = usuario.senhaUsuario;
    this.telefoneUsuario = usuario.telefoneUsuario;
}

Usuario.create = (newUsuario, result) => {
    sql.query("INSERT INTO Usuario SET ?", newUsuario, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        console.log('Usuario criado com sucesso: ', { ...newUsuario });
        result(null, { ...newUsuario })
    })
};

Usuario.getAll = result => {
    sql.query("SELECT * FROM Usuario", (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(null, err);
            return;
        }
        console.log('Usuarios encontrados: ', res);
        result(null, res)
    })
}

Usuario.findById = (idUsuario, result) => {
    sql.query(`SELECT * FROM Usuario WHERE idUsuario = ${idUsuario}`, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Usuario encontrado: ", res[0]);
            result(null, res[0])
            return
        }
        console.log(`Nenhum Usuario com idUsuario: ${idUsuario} encontrado!!!`)
        result({ kind: "not_found" }, null)
    })
}

Usuario.findByNome = (nomeUsuario, result) => {
    sql.query(`SELECT * FROM Usuario WHERE nomeUsuario = "${nomeUsuario}"`, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Usuario encontrado: ", res[0]);
            result(null, res[0])
            return
        }
        console.log(`Nenhum Usuario com nomeUsuario: ${nomeUsuario} encontrado!!!`)
        result({ kind: "not_found" }, null)
    })
}

Usuario.findByLoginAndSenha = (loginUsuario, senhaUsuario, result) => {
    sql.query(`SELECT * FROM Usuario WHERE loginUsuario = "${loginUsuario}" and senhaUsuario = "${senhaUsuario}"`, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Usuario encontrado: ", res[0]);
            result(null, res[0])
            return
        }
        console.log(`Nenhum Usuario com loginUsuario: ${loginUsuario} e senhaUsuario: ${senhaUsuario} encontrado!!!`)
        result({ kind: "not_found" }, null)
    })
}

Usuario.updateById = (idUsuario, usuario, result) => {
    sql.query("UPDATE Usuario SET idSindicato = ?, nomeUsuario = ?, tipoPermissao = ?, loginUsuario = ?, senhaUsuario = ?, telefoneUsuario = ? WHERE idUsuario = ?", [usuario.idSindicato, usuario.nomeUsuario, usuario.tipoPermissao, usuario.loginUsuario, usuario.senhaUsuario, usuario.telefoneUsuario, idUsuario], (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        if (res.affectedRows == 0) {
            console.log(`Nenhum Usuario com idUsuario: ${idUsuario} encontrado!!!`)
            result({ kind: "not_found" }, null)
            return
        }
        console.log(`Usuario Atualizado com Sucesso: `, { idUsuario: idUsuario, ...usuario });
        result(null, { idUsuario: idUsuario, ...usuario })
    })
}

Usuario.removeById = (idUsuario, result) => {
    sql.query("DELETE FROM Usuario WHERE idUsuario = ?", idUsuario, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            console.log(`Nenhum Usuario com idUsuario: ${idUsuario} encontrado!!!`)
            result({ kind: "not_found" }, null)
            return
        }
        console.log(`Usuario com idUsuario: ${idUsuario} deletado com Sucesso`)
        result(null, res)
    })
}

Usuario.removeAll = result => {
    sql.query("DELETE FROM Usuario", (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        console.log(`Foram DELETADOS ${res.affectedRows} Usuarios`)
        result(null, res)
    })
}

module.exports = Usuario;