import { Box } from "@mui/system"

export default function ItemBuscaSindicalistas({Sindicalista}) {
    
    console.log("Sindicalista")
    console.log(Sindicalista)
    
    return(
        <Box>
            {Sindicalista.SindNome}
        </Box>
    )
}