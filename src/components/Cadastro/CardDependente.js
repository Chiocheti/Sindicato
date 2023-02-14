import Item from "./ItemDependente"
import "./../../css/StyleFormulario.css"

function CardDependente({Dependentes}) {
    return (
        <div>
            {
                Dependentes.map((dependente) => (
                    <Item key={dependente.Id} dependente={dependente}/>
                ))
            }
        </div>
    )
}

export default CardDependente