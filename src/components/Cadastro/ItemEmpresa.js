function ItemEmpresa({ emprego, handleResult }) {

    console.log("Item")
    console.log(emprego)

    function deleteEmprego() {
        handleResult(emprego.Id)
    }

    return (
        <div className="purple">

            <div className="TituloCampo">
                <div className="TituloCampoX3">
                    <input id="Empresa" type="text" value={`Empresa: ${emprego.Empresa}`} className="inputs required" readOnly />
                </div>
                <div className="TituloCampoX1">
                    <input id="Cnpj" type="text" value={`Cnpj: ${emprego.Cnpj}`} className="inputs required" readOnly />
                </div>
            </div>
            <br />
            <div className="TituloCampo">

                <div className="TituloCampoX1">
                    <input id="CodEmpresa" type="text" value={`Cod. Empresa: ${emprego.CodEmpresa}`} className="inputs required" readOnly />
                </div>

                <div className="TituloCampoX1">
                    <input id="Admissao" type="date" value={emprego.Admissao} className="typeDate" readOnly />
                </div>

                <div className="TituloCampoX1">
                    <input id="Demissão" type="date" value={emprego.Demissao} className="typeDate" readOnly />
                </div>

                <div className="TituloCampoX1">
                    <input id="Contribuinte" type="text" value={`Contribuinte: ${emprego.Contribuinte == "true" ? "Sim" : "Não"}`} className="inputs required" readOnly />
                </div>

            </div>
            <br />
            <div className="TituloCampo">
                <input type="button" id="AddEmprego" onClick={deleteEmprego} value="Remover Emprego" className="inputs required" />
            </div>
        </div>
    )
}

export default ItemEmpresa