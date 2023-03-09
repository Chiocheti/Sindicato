const sql = require('./db.js');

const Dependente = function (dependente) {
    this.DepId = dependente.DepId;
    this.SindId = dependente.SindId;
    this.DepNome = dependente.DepNome;
    this.DepNascimento = dependente.DepNascimento;
    this.DepSexo = dependente.DepSexo;
    this.DepParentesco = dependente.DepParentesco;
}

Dependente.create = (newDependente, result) => {
    sql.query("INSERT INTO Dependente SET ?", newDependente, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        console.log('Dependente criada com sucesso: ', { DepId: res.DepId, ...newDependente });
        result(null, { DepId: res.DepId, ...newDependente })
    })
};

Dependente.getAll = result => {
    sql.query("SELECT * FROM Dependente", (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(null, err);
            return;
        }
        console.log('Dependentes encontrados: ', res);
        result(null, res)
    })
}

Dependente.findById = (DepId, result) => {
    sql.query(`SELECT * FROM Dependente WHERE DepId = ${DepId}`, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Dependente encontrado: ", res[0]);
            result(null, res[0])
            return
        }
        console.log(`Nenhum Dependente com DepId: ${DepId} encontrado!!!`)
        result({ kind: "not_found" }, null)
    })
}

Dependente.findBySindId = (SindId, result) => {
    sql.query(`SELECT * FROM Dependente WHERE Dependente.SindId = ${SindId};`, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Dependente encontrado: ", res);
            result(null, res)
            return
        }
        console.log(`Nenhum Dependente com SindId: ${SindId} encontrado!!!`)
        result({ kind: "not_found" }, null)
    })
}

Dependente.removeById = (DepId, result) => {
    sql.query("DELETE FROM Dependente WHERE DepId = ?", DepId, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            console.log(`Nenhum Dependente com DepId: ${DepId} encontrado!!!`)
            result({ kind: "not_found" }, null)
            return
        }
        console.log(`Dependente com DepId: ${DepId} deletado com Sucesso`)
        result(null, res)
    })
}

Dependente.removeAll = result => {
    sql.query("DELETE FROM Dependente", (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        console.log(`Foram DELETADOS ${res.affectedRows} Dependentes`)
        result(null, res)
    })
}

module.exports = Dependente