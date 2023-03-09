import Style from "../../css/StyleAdminPage.module.css"

import { useNavigate } from 'react-router-dom'
import Axios from "axios";
import { v4 as uuid } from "uuid"

import { useState, useEffect } from "react";
import { TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

function AdminPage() {

    const navigate = useNavigate();

    useEffect(() => {
        var user = JSON.parse(sessionStorage.getItem("usuario"))
        console.log("User")
        console.log(user)
        if (user == "" || user == null || user == undefined) {
            navigate("/")
            sessionStorage.removeItem("usuario")
            localStorage.removeItem("usuario")
        } else {
            const options = {
                method: 'GET',
                url: `http://localhost:3001/api/usuario/loginSenha/${user.loginUsuario}/${user.senhaUsuario}`
            };

            Axios.request(options).then(function (response) {
                console.log("Achou")
            }).catch(function (error) {
                navigate("/")
                sessionStorage.removeItem("usuario")
                localStorage.removeItem("usuario")
            });
        }
    })

    const [tipo, setTipo] = useState('');

    const handleChange = (event) => {
        setTipo(event.target.value);
    };

    function LogOut() {
        localStorage.removeItem("usuario")
        sessionStorage.removeItem("usuario")
        navigate("/")
    }

    function CriarConta() {
        var nomeUsuario = document.getElementById("nomeUsuario")
        var idSindicato = document.getElementById("idSindicato")
        var loginUsuario = document.getElementById("loginUsuario")
        var telefoneUsuario = document.getElementById("telefoneUsuario")
        var senhaUsuario = document.getElementById("senhaUsuario")
        var repeteSenha = document.getElementById("repeteSenha")

        const save = {
            method: 'POST',
            url: 'http://localhost:3001/api/usuario',
            headers: { 'Content-Type': 'application/json' },
            data: {
                idUsuario: uuid(),
                idSindicato: idSindicato.value,
                nomeUsuario: nomeUsuario.value,
                tipoPermissao: tipo,
                loginUsuario: loginUsuario.value,
                senhaUsuario: senhaUsuario.value,
                telefoneUsuario: telefoneUsuario.value
            }
        };

        Axios.request(save).then(function (response) {
            console.log(response.data);
            idSindicato.value = null
            nomeUsuario.value = null
            loginUsuario.value = null
            senhaUsuario.value = null
            repeteSenha.value = null
            telefoneUsuario.value = null
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <div>
            <div className={Style.All}>
                <div className={Style.Body}>

                    <p className={Style.Title}>
                        Cadastrar Usuario
                    </p>

                    <div className={Style.box_block}>

                        <div className={Style.box_x2}>
                            <TextField id="nomeUsuario" label="Nome de usuario" variant="outlined" size="small" sx={{ width: "100%" }} />
                        </div>

                        <div className={Style.box_x1}>
                            <TextField id="idSindicato" label="Sindicato" variant="outlined" size="small" sx={{ width: "100%" }} />
                        </div>

                    </div>

                    <br />

                    <div className={Style.box_block}>

                        <div className={Style.box_x1}>
                            <TextField id="loginUsuario" label="Login" variant="outlined" size="small" sx={{ width: "100%" }} />
                        </div>

                        <div className={Style.box_x1}>
                            <TextField id="telefoneUsuario" label="Telefone" variant="outlined" size="small" sx={{ width: "100%" }} />
                        </div>

                    </div>

                    <br />

                    <div className={Style.box_block}>

                        <div className={Style.box_x1}>
                            <TextField id="senhaUsuario" label="Senha" variant="outlined" size="small" sx={{ width: "100%" }} />
                        </div>

                        <div className={Style.box_x1}>
                            <TextField id="repeteSenha" label="Repetir Senha" variant="outlined" size="small" sx={{ width: "100%" }} />
                        </div>

                    </div>

                    <br />

                    <div className={Style.box_x1}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Tipo de Permissão</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="tipoPermissao"
                                label="Tipo de Permissão"
                                onChange={handleChange}
                            >
                                <MenuItem value={"User"}>Usuario</MenuItem>
                                <MenuItem value={"Adm"}>Administrador</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className={Style.DivBtt}>
                        <input type="button" value="Cadastrar" className={Style.Btt} onClick={CriarConta} />
                        <input type="button" value="Voltar" className={Style.Btt} onClick={LogOut} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminPage;