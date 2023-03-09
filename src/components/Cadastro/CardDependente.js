import Item from "./ItemDependente"
import "./../../css/StyleFormulario.css"
import { useState } from "react"

function CardDependente({ Dependentes, handleResult }) {

    var [recharg, setRecharg] = useState("")

    const update = result => {
        console.log("Valor -> Card")
        setRecharg(result)
        console.log(result)
        handleResult(result)
    }

    return (
        <div>
            {
                Dependentes.map((dependente) => (
                    <div key={dependente.DepId} className="Second">
                        <Item dependente={dependente} handleResult={update}/>
                    </div>
                ))
            }
        </div>
    )
}

export default CardDependente