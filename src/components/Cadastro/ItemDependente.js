function ItemDependente({ dependente, handleResult }) {

    console.log("Item")
    console.log(dependente)

    function deleteDependente() {
        handleResult(dependente.Id)
    }

    return (
        <div className="purple">

            <div className="box-select">

                <div className="box-x1">
                    <input id="name" type="text" className="inputs required" value={`Nome: ${dependente.Nome}`} readOnly />
                </div>

                <div className="box-x1">
                    <input id="telefone" type="text" className="inputs required" value={`Telefone: ${dependente.Telefone}`} readOnly />
                </div>

                <div className="box-x1">
                    <input id="cpf" type="text" className="inputs required" value={`Cpf: ${dependente.Cpf}`} readOnly />
                </div>

                <div className="box-x1">
                    <input id="rg" type="text" className="inputs required" value={`Rg: ${dependente.Rg}`} readOnly />
                </div>

            </div>

            <br />

            <div className="box-select">

                <div className="box-x1">
                    <input id="Nasc" type="text" value={`Nascimento: ${dependente.Nasc}`} className="inputs required" readOnly />
                </div>

                <div className="box-x1">
                    <input id="sexo" type="text" value={`Sexo: ${dependente.Sexo}`} className="inputs required" readOnly />
                </div>

                <div className="box-x1">
                    <input id="parentesco" type="text" value={`Parentesco: ${dependente.Parentesco}`} className="inputs required" readOnly />
                </div>

                <div className="box-x1">
                    <input id="licenca" type="text" value={dependente.Licenca == "true" ? "Sim" : "Não"} className="inputs required" readOnly />
                </div>

            </div>

            <br />

            <input type="button" id="AddDependente" value="Remover Dependente" className="inputs required" onClick={deleteDependente} />
        </div>
    )
}

export default ItemDependente