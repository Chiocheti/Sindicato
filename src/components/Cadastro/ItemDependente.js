import { TextField, Button } from "@mui/material";

function ItemDependente({ dependente, handleResult }) {

    console.log("Item")
    console.log(dependente)

    function deleteDependente() {
        handleResult(dependente.DepId)
    }

    return (
        
        <div className="purple">

            <div className="box-select">

                <div className="box-x3">
                    <TextField
                        label="Nome"
                        defaultValue={dependente.DepNome}
                        size="small"
                        sx={{
                            width: '100%'
                        }}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>

                <div className="box-x1">
                    <TextField
                        label="Nascimento"
                        defaultValue={dependente.DepNascimento}
                        size="small"
                        sx={{
                            width: '100%'
                        }}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>

                <div className="box-x1">
                    <TextField
                        label="Sexo"
                        defaultValue={dependente.DepSexo}
                        size="small"
                        sx={{
                            width: '100%'
                        }}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>

                <div className="box-x1">
                    <TextField
                        label="Parentesco"
                        defaultValue={dependente.DepParentesco}
                        size="small"
                        sx={{
                            width: '100%'
                        }}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>

                <div>
                    <Button
                        variant="outlined"
                        onClick={deleteDependente}
                        sx={{
                            width: '100%'
                        }}>
                        Deletar
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default ItemDependente