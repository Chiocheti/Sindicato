const sql = require('./db.js');

const Sindicalista = function (sindicalista) {
    this.SindId = sindicalista.SindId;
    this.SindCodSindicato = sindicalista.SindCodSindicato;
    this.SindNome = sindicalista.SindNome;
    this.SindCpf = sindicalista.SindCpf;
    this.SindRg = sindicalista.SindRg;
    this.SindOrgaoEmissor = sindicalista.SindOrgaoEmissor;
    this.SindCel01 = sindicalista.SindCel01;
    this.SindCel02 = sindicalista.SindCel02;
    this.SindCel03 = sindicalista.SindCel03;
    this.SindNascimento = sindicalista.SindNascimento;
    this.SindEmail = sindicalista.SindEmail;
    this.SindCarteiraDeTrabalho = sindicalista.SindCarteiraDeTrabalho;
    this.SindVencimento = sindicalista.SindVencimento;
    this.SindSexo = sindicalista.SindSexo;
    this.SindEstadoCivil = sindicalista.SindEstadoCivil;
    this.SindInstrucao = sindicalista.SindInstrucao;
    this.SindTipo = sindicalista.SindTipo;
    this.SindSituacao = sindicalista.SindSituacao;
    this.SindJornal = sindicalista.SindJornal;
    this.SindDeficiencia = sindicalista.SindDeficiencia;
    this.SindDetalhes = sindicalista.SindDetalhes;
    this.End01Cep = sindicalista.End01Cep;
    this.End01Rua = sindicalista.End01Rua;
    this.End01Numero = sindicalista.End01Numero;
    this.End01Bairro = sindicalista.End01Bairro;
    this.End01Estado = sindicalista.End01Estado;
    this.End01Cidade = sindicalista.End01Cidade;
    this.End02Cep = sindicalista.End02Cep;
    this.End02Rua = sindicalista.End02Rua;
    this.End02Numero = sindicalista.End02Numero;
    this.End02Bairro = sindicalista.End02Bairro;
    this.End02Estado = sindicalista.End02Estado;
    this.End02Cidade = sindicalista.End02Cidade;
}

Sindicalista.create = (newSindicalista, result) => {
    sql.query("INSERT INTO Sindicalista SET ?", newSindicalista, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        console.log('Sindicalista criado com sucesso: ', { ...newSindicalista });
        result(null, { ...newSindicalista })
    })
}

Sindicalista.getAll = result => {
    sql.query("SELECT * FROM Sindicalista", (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(null, err);
            return;
        }
        console.log('Sindicalistas encontrados: ', res);
        result(null, res)
    })
}

Sindicalista.findById = (SindId, result) => {
    sql.query(`SELECT * FROM Sindicalista WHERE SindId = ?`, [SindId] , (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Sindicalista encontrado: ", res[0]);
            result(null, res[0])
            return
        }
        console.log(`Nenhum Sindicalista com SindId: ${SindId} encontrado!!!`)
        result({ kind: "not_found" }, null)
    })
}

Sindicalista.findByNome = (SindNome, result) => {
    sql.query(`SELECT * FROM Sindicalista WHERE SindNome LIKE "%${SindNome}%"`, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(null, err);
            return;
        }
        console.log('Sindicalistas encontrados: ', res);
        result(null, res)
    })
}

Sindicalista.findByCpf = (SindCpf, result) => {
    sql.query(`SELECT * FROM Sindicalista WHERE SindCpf = "${SindCpf}"`, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Sindicalista encontrado: ", res[0]);
            result(null, res[0])
            return
        }
        console.log(`Nenhum Sindicalista com SindCpf: ${SindCpf} encontrado!!!`)
        result({ kind: "not_found" }, null)
    })
}

Sindicalista.findByRg = (SindRg, result) => {
    sql.query(`SELECT * FROM Sindicalista WHERE SindRg = "${SindRg}"`, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Sindicalista encontrado: ", res[0]);
            result(null, res[0])
            return
        }
        console.log(`Nenhum Sindicalista com SindRg: ${SindRg} encontrado!!!`)
        result({ kind: "not_found" }, null)
    })
}

Sindicalista.updateById = (SindId, sindicalista, result) => {
    sql.query(`UPDATE Sindicalista SET SindCodSindicato = ?, SindNome = ?, SindCpf = ?, SindRg = ?, SindOrgaoEmissor = ?, SindCel01 = ?, SindCel02 = ?, SindCel03 = ?, SindNascimento = ?, SindEmail = ?, SindCarteiraDeTrabalho = ?, SindVencimento = ?, SindSexo = ?, SindEstadoCivil = ?, SindInstrucao = ?, SindTipo = ?, SindSituacao = ?, SindJornal = ?, SindDeficiencia = ?, SindDetalhes = ?, End01Cep = ?, End01Rua = ?, End01Numero = ?, End01Bairro = ?, End01Estado = ?, End01Cidade = ?, End02Cep = ?, End02Rua = ?, End02Numero = ?, End02Bairro = ?, End02Estado = ?, End02Cidade = ?  WHERE SindId = ?`,
        [ sindicalista.SindCodSindicato, sindicalista.SindNome, sindicalista.SindCpf, sindicalista.SindRg, sindicalista.SindOrgaoEmissor, sindicalista.SindCel01, sindicalista.SindCel02, sindicalista.SindCel03, sindicalista.SindNascimento, sindicalista.SindEmail, sindicalista.SindCarteiraDeTrabalho, sindicalista.SindVencimento, sindicalista.SindSexo, sindicalista.SindEstadoCivil, sindicalista.SindInstrucao, sindicalista.SindTipo, sindicalista.SindSituacao, sindicalista.SindJornal, sindicalista.SindDeficiencia, sindicalista.SindDetalhes, sindicalista.End01Cep, sindicalista.End01Rua, sindicalista.End01Numero, sindicalista.End01Bairro, sindicalista.End01Estado, sindicalista.End01Cidade, sindicalista.End02Cep, sindicalista.End02Rua, sindicalista.End02Numero, sindicalista.End02Bairro, sindicalista.End02Estado, sindicalista.End02Cidade, SindId], (err, res) => {
            if (err) {
                console.log(`Houve um erro: ${err}`);
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                console.log(`Nenhum Sindicalista com SindId: ${SindId} encontrado!!!`)
                result({ kind: "not_found" }, null)
                return
            }
            console.log(`Sindicalista Atualizado com Sucesso: `, { ...sindicalista });
            result(null, { ...sindicalista })
        })
}

Sindicalista.removeById = (SindId, result) => {
    sql.query("DELETE FROM Sindicalista WHERE SindId = ?", SindId, (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            console.log(`Nenhum Sindicalista com SindId: ${SindId} encontrado!!!`)
            result({ kind: "not_found" }, null)
            return
        }
        console.log(`Sindicalista com SindId: ${SindId} deletado com Sucesso`)
        result(null, res)
    })
}

Sindicalista.removeAll = result => {
    sql.query("DELETE FROM Sindicalista", (err, res) => {
        if (err) {
            console.log(`Houve um erro: ${err}`);
            result(err, null);
            return;
        }
        console.log(`Foram DELETADOS ${res.affectedRows} Sindicalistas`)
        result(null, res)
    })
}

module.exports = Sindicalista;