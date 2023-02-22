import Style from "../../css/StyleAdminPage.module.css"

function AdminPage() {
    return (
        <div>
            <div className={Style.All}>
                <div className={Style.Body}>
                    <p className={Style.Title}>
                        Cadastrar Usuario
                    </p>
                    <div>
                        <p>Nome do Usuario: </p>
                        <input type="text" name="" id="" className={Style.Input} />
                    </div>
                    <div className={Style.Senhas}>
                        <div>
                            <p>Sindicato: </p>
                            <input type="text" name="" id="" className={Style.Input} />
                        </div>
                        <div>
                            <p>Tipo de Permissão</p>
                            <select name="Permissao" id="" className={Style.Input}>
                                <option value="User">Usuario</option>
                                <option value="Adm">Administrador</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <p>Login do Usuario: </p>
                        <input type="text" name="" id="" className={Style.Input} />
                    </div>
                    <div className={Style.Senhas}>
                        <div>
                            <p>Insira uma Senha</p>
                            <input type="text" name="" id="" className={Style.Input} />
                        </div>
                        <div>
                            <p>Repetir Senha</p>
                            <input type="text" name="" id="" className={Style.Input} />
                        </div>
                    </div>
                    <div>
                        <h1>Insira sua SENHA </h1>
                        <input type="text" name="" id="" className={Style.Input} />
                    </div>
                    <div className={Style.DivBtt}>
                        <input type="button" value="Cadastrar" className={Style.Btt} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage;