import { useEffect, useState } from "react"

function ItemDependente({ dependente, handleResult }) {

    console.log("Item")
    console.log(dependente)

    function deleteDependente() {
        handleResult(dependente.Id)
    }

    return (
        <div className="purple">
            <div className="box-select">
                <div >
                    <input id="name" type="text" className="inputs required" value={`Nome: ${dependente.Nome}`} readOnly />
                </div>
                <div>
                    <input id="telefone" type="text" className="inputs required" value={`Telefone: ${dependente.Telefone}`} readOnly />
                </div>
                <div>
                    <input id="cpf" type="text" className="inputs required" value={`Cpf: ${dependente.Cpf}`} readOnly />
                </div>
                <div>
                    <input id="rg" type="text" className="inputs required" value={`Rg: ${dependente.Rg}`} readOnly />
                </div>
            </div>
            <div className="Second">
                <div className="box-block">
                    <p className="TituloCampo">Nascimento:</p>
                    <div>
                        <input id="Nasc" type="text" value={dependente.Nasc} className="inputs required" readOnly />
                    </div>
                    <p className="TituloCampo">Sexo:</p>
                    <div>
                        <input id="sexo" type="text" value={dependente.Sexo} className="inputs required" readOnly />
                    </div>
                    <p className="TituloCampo">Parentesco:</p>
                    <div>
                        <input id="parentesco" type="text" value={dependente.Parentesco} className="inputs required" readOnly />
                    </div>
                    <p className="TituloCampo">Lic. Medica:</p>
                    <div>
                        <input id="licenca" type="text" value={dependente.Licenca == "true" ? "Sim" : "Não"} className="inputs required" readOnly />
                    </div>
                </div>
            </div>
            <input type="button" id="AddDependente" value="Remover Dependente" className="inputs required" onClick={deleteDependente} />
        </div>
    )
}

export default ItemDependente