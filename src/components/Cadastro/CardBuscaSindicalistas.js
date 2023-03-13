import { Box } from "@mui/system"
import Item from "./ItemBuscaSindicalistas"

export default function CardBuscaSindicalistas({Sindicalistas}){
    
    console.log("Lista de Sindicalistas")
    console.log(Sindicalistas)
    
    return(
        <Box>
        {
            Sindicalistas.map((Sindicalista) => (
                <div key={Sindicalistas.SindId}>
                    <Item Sindicalista={Sindicalista}/>
                </div>
            ))
        }
    </Box>
    )
}