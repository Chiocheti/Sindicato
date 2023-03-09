const sql = require('./db.js');

const Empresa = function (empresa) {
    this.EmpId = empresa.EmpId;
    this.SindId = empresa.SindId;
    this.EmpCodEmpresa = empresa.EmpCodEmpresa;
	this.EmpNome = empresa.EmpNome;
    this.EmpAdmissao = empresa.EmpAdmissao;
    this.EmpDemissao = empresa.EmpDemissao;
    this.EmpContribuinte = empresa.EmpContribuinte;
}

Empresa.create = (newEmpresa, result) => {
    sql.query("INSERT INTO Empresa SET ?", newEmpresa, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        console.log('Empresa criada com sucesso: ', { EmpId: res.EmpId, ...newEmpresa });
        result(null, { EmpId: res.EmpId, ...newEmpresa })
    })
};

Empresa.getAll = result => {
    sql.query("SELECT * FROM Empresa", (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(null, err);
            return;
        }
        console.log('Empresa encontrados: ', res);
        result(null, res)
    })
}

Empresa.findById = (EmpId, result) => {
    sql.query(`SELECT * FROM Empresa WHERE EmpId = ${EmpId}`, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Empresa encontrado: ", res[0]);
            result(null, res[0])
            return
        }
        console.log(`Nenhuma Empresa com EmpId: ${EmpId} encontrado!!!`)
        result({ kind: "not_found" }, null)
    })
}

Empresa.findBySindId = (SindId, result) => {
    sql.query(`SELECT * FROM Empresa WHERE Empresa.SindId = ${SindId};`, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Empresa encontrado: ", res);
            result(null, res)
            return
        }
        console.log(`Nenhuma Empresa com SindId: ${SindId} encontrado!!!`)
        result({ kind: "not_found" }, null)
    })
}

Empresa.removeById = (EmpId, result) => {
    sql.query("DELETE FROM Empresa WHERE EmpId = ?", EmpId, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            console.log(`Nenhum Empresa com EmpId: ${EmpId} encontrado!!!`)
            result({ kind: "not_found" }, null)
            return
        }
        console.log(`Empresa com EmpId: ${EmpId} deletado com Sucesso`)
        result(null, res)
    })
}

Empresa.removeAll = result => {
    sql.query("DELETE FROM Empresa", (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        console.log(`Foram DELETADAS ${res.affectedRows} Empresa`)
        result(null, res)
    })
}

module.exports = Empresa