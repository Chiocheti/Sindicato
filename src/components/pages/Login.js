import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Style from "../../css/StyleLogin.module.css"

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
            if (checkbox.checked) {
                localStorage.setItem("usuario", JSON.stringify(response.data))
            }
            sessionStorage.setItem("usuario", JSON.stringify(response.data))
            if (response.data.tipoPermissao == "adm") {
                navigate("/AdminPage")
            } else if (response.data.tipoPermissao == "user") {
                navigate("/Formulario")
            }
        }).catch(function (error) {
            login.style.borderColor = "#ff0000"
            senha.style.borderColor = "#ff0000"
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
                    <div>
                        <p>Seu Login: </p>
                        <input type="text" name="" id="inputLogin" className={Style.Input} />
                    </div>
                    <div>
                        <p>Sua Senha</p>
                        <input type="text" name="" id="inputSenha" className={Style.Input} />
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