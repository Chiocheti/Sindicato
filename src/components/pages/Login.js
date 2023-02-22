import { useNavigate } from 'react-router-dom'
import Style from "../../css/StyleLogin.module.css"

function Login() {

    const navigate = useNavigate();

    function Login() {
        navigate("/Formulario")
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
                        <input type="text" name="" id="" className={Style.Input} />
                    </div>
                    <div>
                        <p>Sua Senha</p>
                        <input type="text" name="" id="" className={Style.Input} />
                    </div>
                    <div className={Style.Flex}>
                        <input type="checkbox" name="" id="" />
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