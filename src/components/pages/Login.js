import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Style from "../../css/StyleLogin.module.css"

import {
    TextField,
    IconButton,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button
} from "@mui/material";

import Axios from "axios"

import { useState } from 'react';

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

    const [showPassword, setShowPassword] = useState(false);
    const [senha, setSenha] = useState("");
    const [manter, setManter] = useState("");

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const getSenha = (event) => {
        setSenha(event.target.value);
    };

    function switchManter() {
        if (manter) {
            setManter(false)
        } else {
            setManter(true)
        }
    }

    function Login() {
        var login = document.getElementById("inputLogin")

        const options = {
            method: 'GET',
            url: `http://localhost:3001/api/usuario/loginSenha/${login.value}/${senha}`
        };
        Axios.request(options).then(function (response) {
            console.log("Achou")
            console.log(response.data)
            sessionStorage.setItem("usuario", JSON.stringify(response.data))
            
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
                        <TextField
                            id="inputLogin"
                            label="Login"
                            variant="outlined"
                            size="small"
                            sx={{ width: "100%" }} />
                    </div>

                    <div className={Style.Margin}>

                        <FormControl
                            sx={{ width: "100%" }}
                            variant="outlined">
                            <InputLabel
                                htmlFor="outlined-adornment-password"
                            >
                                Password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                onChange={getSenha}
                            />
                        </FormControl>
                    </div>

                    <div className={Style.Flex}>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Manter-me Logado"
                                onClick={switchManter} />
                        </FormGroup>
                    </div>

                    <Button variant="outlined"
                        onClick={Login}
                        value={"Buscar"}
                        sx={{
                            width: '100%'
                        }}>
                        Logar
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default Login