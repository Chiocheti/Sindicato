import Item from "./ItemEmpresa"
import "./../../css/StyleFormulario.css"
import { useState } from "react"

function CardEmpresa({ Empregos, handleResult }) {

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
                Empregos.map((emprego) => (
                    <div key={emprego.EmpId} className="Second">
                        <Item emprego={emprego} handleResult={update} />
                    </div>
                ))
            }
        </div>
    )
}

export default CardEmpresa