import Style from "../../css/StyleAdminPage.module.css"

import { useNavigate } from 'react-router-dom'
import Axios from "axios";

import { useState, useEffect } from "react";

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

    function LogOut() {
        localStorage.removeItem("usuario")
        sessionStorage.removeItem("usuario")
        navigate("/")
    }

    function CriarConta() {
        var nomeUsuario = document.getElementById("nomeUsuario")
        var idSindicato = document.getElementById("idSindicato")
        var tipoPermissao = document.getElementById("tipoPermissao")
        var loginUsuario = document.getElementById("loginUsuario")
        var telefoneUsuario = document.getElementById("telefoneUsuario")
        var senhaUsuario = document.getElementById("senhaUsuario")
        var repeteSenha = document.getElementById("repeteSenha")
        var password = document.getElementById("password")

        if (nomeUsuario.value == "" || nomeUsuario.value == null) {
            nomeUsuario.style.borderColor = "#FF0000"
            return false
        } else {
            nomeUsuario.style.borderColor = "#000000"
            if (idSindicato.value == "" || idSindicato.value == null) {
                idSindicato.style.borderColor = "#FF0000"
                return false
            } else {
                idSindicato.style.borderColor = "#000000"
                if (loginUsuario.value == "" || loginUsuario.value == null) {
                    loginUsuario.style.borderColor = "#FF0000"
                    return false
                } else {
                    loginUsuario.style.borderColor = "#000000"
                    if (telefoneUsuario.value == "" || telefoneUsuario.value == null) {
                        telefoneUsuario.style.borderColor = "#FF0000"
                        return false
                    }
                    else {
                        telefoneUsuario.style.borderColor = "#000000"
                        if (senhaUsuario.value == "" || senhaUsuario.value == null || senhaUsuario.value != repeteSenha.value) {
                            senhaUsuario.style.borderColor = "#FF0000"
                            repeteSenha.style.borderColor = "#FF0000"
                            return false
                        } else {
                            senhaUsuario.style.borderColor = "#000000"
                            repeteSenha.style.borderColor = "#000000"

                            const save = {
                                method: 'POST',
                                url: 'http://localhost:3001/api/usuario',
                                headers: { 'Content-Type': 'application/json' },
                                data: {
                                    idSindicato: idSindicato.value,
                                    nomeUsuario: nomeUsuario.value,
                                    tipoPermissao: tipoPermissao.value,
                                    loginUsuario: loginUsuario.value,
                                    senhaUsuario: senhaUsuario.value,
                                    telefoneUsuario: telefoneUsuario.value
                                }
                            };
                            Axios.request(save).then(function (response) {
                                console.log(response.data);
                                idSindicato.value = ""
                                nomeUsuario.value = ""
                                loginUsuario.value = ""
                                senhaUsuario.value = ""
                                repeteSenha.value = ""
                            }).catch(function (error) {
                                console.error(error);
                            });
                        }
                    }
                }
            }
        }
    }

    return (
        <div>
            <div className={Style.All}>
                <div className={Style.Body}>
                    <p className={Style.Title}>
                        Cadastrar Usuario
                    </p>
                    <div>
                        <p>Nome do Usuario: </p>
                        <input type="text" name="" id="nomeUsuario" className={Style.Input} />
                    </div>
                    <div className={Style.Senhas}>
                        <div>
                            <p>Sindicato: </p>
                            <input type="text" name="" id="idSindicato" className={Style.Input} />
                        </div>
                        <div>
                            <p>Tipo de Permissão</p>
                            <select name="Permissao" id="tipoPermissao" className={Style.InputPermissao}>
                                <option value="User">Usuario</option>
                                <option value="Adm">Administrador</option>
                            </select>
                        </div>
                    </div>
                    <div className={Style.Senhas}>
                        <div>
                            <p>Login do Usuario: </p>
                            <input type="text" name="" id="loginUsuario" className={Style.Input} />
                        </div>
                        <div>
                            <p>Telefone: </p>
                            <input type="text" name="" id="telefoneUsuario" className={Style.Input} />
                        </div>
                    </div>
                    <div className={Style.Senhas}>
                        <div>
                            <p>Insira uma Senha</p>
                            <input type="text" name="" id="senhaUsuario" className={Style.Input} />
                        </div>
                        <div>
                            <p>Repetir Senha</p>
                            <input type="text" name="" id="repeteSenha" className={Style.Input} />
                        </div>
                    </div>
                    <div>
                        <h1>Insira sua SENHA </h1>
                        <input type="text" name="" id="password" className={Style.Input} />
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