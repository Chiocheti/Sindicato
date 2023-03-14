import { Box } from "@mui/system"
import { TextField, Divider, Button } from "@mui/material"
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ItemBuscaSindicalistas({ Sindicalista, teste }) {

    console.log("Sindicalista")
    console.log(Sindicalista)

    return (

        <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.4, 0.4, 0.4],
                },
            }}

        >
            <Box
                display={"flex"}
                flexDirection={"row"}
                sx={{
                    flexDirection: useMediaQuery('(min-width:1300px)') ? "row" : "column",
                }}
            >

                <TextField
                    margin="dense"
                    label="Cod. Sindicato"
                    defaultValue={Sindicalista.SindCodSindicato}
                    size="small"
                    width='100%'
                    InputProps={{
                        readOnly: true,
                    }}
                />

                <TextField
                    margin="dense"
                    label="Cpf"
                    defaultValue={Sindicalista.SindCpf}
                    size="small"

                    InputProps={{
                        readOnly: true,
                    }}
                />

                <TextField
                    margin="dense"
                    label="Rg"
                    defaultValue={Sindicalista.SindRg}
                    size="small"

                    InputProps={{
                        readOnly: true,
                    }}
                />

            </Box>

            <TextField
                margin="dense"
                label="Nome"
                defaultValue={Sindicalista.SindNome}
                size="small"

                InputProps={{
                    readOnly: true,
                }}
            />

            <Button variant="outlined"
                onClick={() => teste(Sindicalista)}
                sx={{
                    width: '100%'
                }}>
                Editar
            </Button>

        </Box>
    )
}