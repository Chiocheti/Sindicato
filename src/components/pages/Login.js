import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Style from "../../css/StyleLogin.module.css"

import { TextField } from "@mui/material";

import Axios from "axios"

function Login() {

    const navigate = useNavigate();

    useEffect(() => {
        var user = JSON.parse(localStorage.getItem("usuario"))
        console.log("User")
        console.log(user)
        if (user == "" || user == null || user == undefined) {
            sessionStorage.removeItem("usuario")
            localStorage.removeItem("usuario")
        } else {
            const options = {
                method: 'GET',
                url: `http://localhost:3001/api/usuario/loginSenha/${user.loginUsuario}/${user.senhaUsuario}`
            };

            Axios.request(options).then(function (response) {
                console.log("Achou")
                if (user.tipoPermissao == "adm") {
                    navigate("/AdminPage")
                } else if (user.tipoPermissao == "user") {
                    navigate("/Formulario")
                }
            }).catch(function (error) {
                sessionStorage.removeItem("usuario")
                localStorage.removeItem("usuario")
            });
        }
    })

    function Login() {
        var login = document.getElementById("inputLogin")
        var senha = document.getElementById("inputSenha")
        var checkbox = document.getElementById("checkbox")

        const options = {
            method: 'GET',
            url: `http://localhost:3001/api/usuario/loginSenha/${login.value}/${senha.value}`
        };
        Axios.request(options).then(function (response) {
            console.log("Achou")
            sessionStorage.setItem("usuario", JSON.stringify(response.data))
            if (checkbox.checked) {
                localStorage.setItem("usuario", JSON.stringify(response.data))
            }
            if (response.data.tipoPermissao == "adm") {
                navigate("/AdminPage")
            } else if (response.data.tipoPermissao == "user") {
                navigate("/Formulario")
            }
        }).catch(function (error) {
            sessionStorage.removeItem("usuario")
            localStorage.removeItem("usuario")
            return 0;
        });
    }

    return (
        <div>
            <div className={Style.All}>
                <div className={Style.Body}>
                    <p className={Style.Title}>
                        Login
                    </p>
                    <div className={Style.Margin}>
                        <TextField id="inputLogin" label="Login" variant="outlined" size="small" sx={{ width: "100%" }} />
                    </div>
                    <div className={Style.Margin}>
                        <TextField id="inputSenha" label="Senha" variant="outlined" size="small" sx={{ width: "100%" }} />
                    </div>

                    <div className={Style.Flex}>
                        <input type="checkbox" name="" id="checkbox" />
                        <p className={Style.Text}>
                            Manter-me Logado
                        </p>
                    </div>
                    <div className={Style.DivBtt}>
                        <input type="button" value="Logar" className={Style.Btt} onClick={Login} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login