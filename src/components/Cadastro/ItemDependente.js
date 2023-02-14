import { useEffect } from "react"

function ItemDependente({ dependente }) {

    useEffect(() => {
        var Btt = document.getElementById("BttLicMedc")
        if(dependente.Licenca == "true"){
            Btt.style.borderColor = "#00FF00"
        }else{
            Btt.style.borderColor = "#FF0000"
        }
        
    })

    console.log("Dependente ++++++++++++")
    console.log(dependente)

    return (
        <div>
            <div className="box-select">
                <div >
                    <input id="name" type="text" className="inputs required" value={dependente.Nome} readOnly />
                </div>
                <div>
                    <input id="telefone" type="text" className="inputs required" value={dependente.Telefone} readOnly />
                </div>
                <div>
                    <input id="cpf" type="text" className="inputs required" value={dependente.Cpf} readOnly />
                </div>
                <div>
                    <input id="rg" type="text" className="inputs required" value={dependente.Rg} readOnly />
                </div>
            </div>
            <div className="box-select">
                <div>
                    <input id="Nasc" type="text" value={dependente.Nasc} className="inputs required" readOnly />
                </div>
                <div>
                    <input id="sexo" type="text" value={dependente.Sexo} className="inputs required" readOnly />
                </div>
                <div>
                    <input id="parentesco" type="text" value={dependente.Parentesco} className="inputs required" readOnly />
                </div>
                <div>
                <input id="BttLicMedc" type="text" value="Possui Licença Medica" className="BttMedicoItem" readOnly />
                <input id="BttLicMedc" type="text" value="Delete" className="BttDelete" readOnly />
                </div>
            </div>
        </div>
    )
}

export default ItemDependente