import { Box } from "@mui/system"
import { Divider } from "@mui/material"
import Item from "./ItemBuscaSindicalistas"

export default function CardBuscaSindicalistas({ Sindicalistas, Teste }) {

    console.log("Lista de Sindicalistas")
    console.log(Sindicalistas)

    return (
        <Box display={"flex"} flexDirection={"column"} > 
            {
                Sindicalistas.map((Sindicalista) => (
                    <div key={Sindicalistas.SindId}>
                        <Item Sindicalista={Sindicalista} teste={Teste}/>
                        <Divider sx={{ m: 2 }}/>
                    </div>
                ))
            }
        </Box>
    )
}