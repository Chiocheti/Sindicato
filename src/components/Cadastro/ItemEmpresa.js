import { TextField, Button } from "@mui/material";

function ItemEmpresa({ emprego, handleResult }) {

    console.log("Item")
    console.log(emprego)

    function deleteEmprego() {
        handleResult(emprego.EmpId)
    }

    return (

        <div className="purple">

            <div className="box-select">

                <div className="box-x1">
                    <TextField
                        id="CodEmpresa"
                        label="Cod. Empresa"
                        defaultValue={emprego.EmpCodEmpresa}
                        size="small"
                        sx={{
                            width: '100%'
                        }}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>

                <div className="box-x3">
                    <TextField
                        id="Empresa"
                        label="Empresa"
                        defaultValue={emprego.EmpNome}
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
                        id="Admissao"
                        label="Admissão"
                        defaultValue={emprego.EmpAdmissao}
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
                        id="Demissão"
                        label="Demissão"
                        defaultValue={emprego.EmpDemissao}
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
                        id="Contribuinte"
                        label="Contribuinte"
                        defaultValue={emprego.EmpContribuinte}
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
                    <Button variant="outlined"
                        onClick={deleteEmprego}
                    >
                        Deletar
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default ItemEmpresa