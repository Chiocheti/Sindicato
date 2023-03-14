import {
    TextField,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Button,
    Box,
    InputBase,
    Drawer,
    Divider,
    Typography
} from "@mui/material";

import useMediaQuery from '@mui/material/useMediaQuery';

import React, { useState } from 'react';
import Axios from "axios"

import CardBuscaSindicalistas from "./CardBuscaSindicalistas";

export default function CompDrawer({ mostrar, troca, teste }) {

    var [type, setType] = useState("Nome")
    var [sindicalistas, setSindicalistas] = useState([])

    const changeType = (event) => {
        setType(event.target.value);
    };

    function Search() {
        var valor = document.getElementById("chave").value

        const options = {
            method: 'GET',
            url: `http://localhost:3001/api/sindicalista/${type}/${valor}`
        };

        Axios.request(options).then(function (response) {
            console.log(response.data)
            setSindicalistas(response.data)
        }).catch(function (error) {
            console.log("Error: " + error);
        });
    }

    return (
        <>
            <Drawer
                anchor={"left"}
                open={mostrar}
                onClose={troca}
                color={"#bdc8d4"}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    padding={2}
                    sx={{
                        width: useMediaQuery('(min-width:600px)') ? "30vw" : "50vw", 
                    }}
                >

                    <Typography variant="h6" component="div">
                        {"Usuario: " + JSON.parse(sessionStorage.getItem("usuario")).nomeUsuario}
                    </Typography>

                    <br />

                    <FormControl>
                        <InputLabel id="buscar">BUSCAR</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            size="small"
                            label="BUSCAR"
                            sx={{ width: '100%' }}
                            defaultValue={"Nome"}
                            onChange={changeType}
                        >
                            <MenuItem value={"Nome"}>Nome</MenuItem>
                            <MenuItem value={"Rg"}>RG</MenuItem>
                            <MenuItem value={"Cpf"}>CPF</MenuItem>
                            <MenuItem value={"TELEFONE"}>TELEFONE</MenuItem>
                        </Select>
                    </FormControl>

                    <br />

                    <TextField id="chave" label="Buscar" variant="outlined" size="small" sx={{
                        width: '100%'
                    }} />

                    <br />

                    <Button variant="outlined"
                        id="BttAddEndereco"
                        onClick={Search}
                        value={"Buscar"}
                        sx={{
                            width: '100%'
                        }}>
                        Buscar
                    </Button>
                    <br />

                    <Divider />

                    <CardBuscaSindicalistas Sindicalistas={sindicalistas} Teste={teste}></CardBuscaSindicalistas>

                </Box>
            </Drawer>
        </>
    )
}