import "../../css/StyleFormulario.css"
import CardDependente from "../Cadastro/CardDependente.js"
import CardEmprego from "../Cadastro/CardEmpresa.js"

import { useNavigate } from 'react-router-dom'
import Axios from "axios";

import { useState, useEffect } from "react";
function Formulario() {

    var [usuario, setUsuario] = useState("")

    var [useEndereco02, setUseEndereco02] = useState(false)

    var [dependentes, setDependentes] = useState([])
    var [totalDependentes, setTotalDependentes] = useState(0)

    var [empregos, setEmpregos] = useState([])
    var [totalEmpregos, setTotalEmpregos] = useState(0)

    var [booLecMedc, setBooLecMedc] = useState(false)

    var [cep, setCep] = useState("")
    var [numero, setNumero] = useState("")
    var [rua, setRua] = useState("")
    var [estado, setEstado] = useState("")
    var [cidade, setCidade] = useState("")
    var [bairro, setBairro] = useState("")

    var [cep02, setCep02] = useState("")
    var [numero02, setNumero02] = useState("")
    var [rua02, setRua02] = useState("")
    var [estado02, setEstado02] = useState("")
    var [cidade02, setCidade02] = useState("")
    var [bairro02, setBairro02] = useState("")

    useEffect(() => {
        if (useEndereco02 == false) {
            document.getElementById("endereco01").style.display = "none"
            document.getElementById("endereco02").style.display = "none"
            document.getElementById("endereco03").style.display = "none"
            document.getElementById("endereco04").style.display = "none"
            document.getElementById("BttAddEndereco").value = "Adicionar Endereço"
        } else {
            document.getElementById("BttAddEndereco").value = "Remover Endereço"
        }

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
                document.getElementById("nomeUsuario").value = `Nome Usuario: ${user.nomeUsuario}`
            }).catch(function (error) {
                navigate("/")
            });
        }
    })

    const navigate = useNavigate();

    const update = result => {
        console.log("Valor -> Pai")
        console.log(result)

        var lista = dependentes
        var item = dependentes.find(i => i.Id == result)
        var index = dependentes.indexOf(item)

        console.log("item")
        console.log(item)

        console.log("index")
        console.log(index)

        if (index > -1) {
            lista.splice(index, 1)
        }

        console.log("lista")
        console.log(lista)

        Load(lista)
    }

    function Load(lista) {
        setDependentes(() => lista)
        console.log("dependentes")
        console.log(dependentes)
    }

    const updateEmpregos = result => {
        console.log("Valor -> Pai")
        console.log(result)

        var lista = empregos
        var item = empregos.find(i => i.Id == result)
        var index = empregos.indexOf(item)

        console.log("item")
        console.log(item)

        console.log("index")
        console.log(index)

        if (index > -1) {
            lista.splice(index, 1)
        }

        console.log("lista")
        console.log(lista)

        LoadEmpregos(lista)
    }

    function LoadEmpregos(lista) {
        setEmpregos(() => lista)
        console.log("empregos")
        console.log(empregos)
    }

    function LogOut() {
        localStorage.removeItem("usuario")
        sessionStorage.removeItem("usuario")
        navigate("/")
    }

    function BuscaCEP() {
        var cep = document.getElementById('Cep').value
        const options = {
            method: 'GET',
            url: `https://viacep.com.br/ws/${cep}/json/`
        };

        Axios.request(options).then(function (response) {
            console.log(response.data)
            var endereco = response.data
            console.log("Endedeço: ")
            console.log(endereco)
            setCep(cep)
            setRua(endereco.logradouro)
            setBairro(endereco.bairro)
            setCidade(endereco.localidade)
            setEstado(endereco.uf)
            document.getElementById("Rua").value = endereco.logradouro
            document.getElementById("Bairro").value = endereco.bairro
            document.getElementById("Cidade").value = endereco.localidade
            document.getElementById("Estado").value = endereco.uf

        }).catch(function (error) {
            console.log(error)
        })
    }

    function BuscaCEP02() {
        var cep = document.getElementById('Cep02').value
        const options = {
            method: 'GET',
            url: `https://viacep.com.br/ws/${cep}/json/`
        };

        Axios.request(options).then(function (response) {
            console.log(response.data)
            var endereco = response.data
            console.log("Endedeço: ")
            console.log(endereco)
            setCep02(cep)
            setRua02(endereco.logradouro)
            setBairro02(endereco.bairro)
            setCidade02(endereco.localidade)
            setEstado02(endereco.uf)
            document.getElementById("Rua02").value = endereco.logradouro
            document.getElementById("Bairro02").value = endereco.bairro
            document.getElementById("Cidade02").value = endereco.localidade
            document.getElementById("Estado02").value = endereco.uf

        }).catch(function (error) {
            console.log(error)
        })
    }

    function AddDependente() {
        var NomeDependente = document.getElementById("NomeDependente")
        var TelefoneDependente = document.getElementById("TelefoneDependente")
        var CpfDependente = document.getElementById("CpfDependente")
        var RgDependente = document.getElementById("RgDependente")
        var NascDependente = document.getElementById("NascDependente")
        var SexoDependente = document.getElementById("SexoDependente")
        var ParentescoDependente = document.getElementById("ParentescoDependente")
        var LicencaDependente = document.getElementById("LicencDependente")

        var Array = new Object();
        Array.Id = totalDependentes
        Array.Nome = NomeDependente.value
        Array.Telefone = TelefoneDependente.value
        Array.Cpf = CpfDependente.value
        Array.Rg = RgDependente.value
        Array.Nasc = NascDependente.value
        Array.Sexo = SexoDependente.value
        Array.Licenca = LicencaDependente.value
        Array.Parentesco = ParentescoDependente.value

        var List = dependentes;
        List.push(Array)
        setDependentes(List)

        NomeDependente.value = ''
        TelefoneDependente.value = ''
        CpfDependente.value = ''
        RgDependente.value = ''
        NascDependente.value = ''

        setTotalDependentes(totalDependentes + 1)

        console.log("List")
        console.log(List)

        console.log("Dependentes")
        console.log(dependentes)
    }

    function AddEndereco() {
        var container01 = document.getElementById("endereco01");
        var container02 = document.getElementById("endereco02");
        var container03 = document.getElementById("endereco03");
        var container04 = document.getElementById("endereco04");

        if (container01.style.display === "none") {
            container01.style.display = "flex"
            container02.style.display = "flex"
            container03.style.display = "flex"
            container04.style.display = "flex"
            setUseEndereco02(true)
        } else {
            container01.style.display = "none"
            container02.style.display = "none"
            container03.style.display = "none"
            container04.style.display = "none"
            setCep02("")
            setRua02("")
            setBairro02("")
            setCidade02("")
            setEstado02("")
            document.getElementById("Cep02").value = ("")
            document.getElementById("Rua02").value = ("")
            document.getElementById("Bairro02").value = ("")
            document.getElementById("Cidade02").value = ("")
            document.getElementById("Estado02").value = ("")
            setUseEndereco02(false)
        }
    }

    function AddEmprego() {
        var empresa = document.getElementById("Empresa")
        var codEmpresa = document.getElementById("CodEmpresa")
        var admissao = document.getElementById("Admissao")
        var demissao = document.getElementById("Demissão")
        var contribuinte = document.getElementById("Contribuinte")
        var cnpj = document.getElementById("Cnpj")

        var Array = new Object();
        Array.Id = totalEmpregos
        Array.Empresa = empresa.value
        Array.CodEmpresa = codEmpresa.value
        Array.Admissao = admissao.value
        Array.Demissao = demissao.value
        Array.Contribuinte = contribuinte.value
        Array.Cnpj = cnpj.value

        var List = empregos
        List.push(Array)
        setEmpregos(List)

        empresa.value = ""
        codEmpresa.value = ""
        admissao.value = ""
        demissao.value = ""
        cnpj.value = ""

        setTotalEmpregos(totalEmpregos + 1)
    }

    return (

        <div>
            <div className="Navbar">

                <div className="NavbarContent">

                    <input type="text" name="" id="nomeUsuario" value={""} readOnly className="UserName" />

                    <div className="Flex">
                        <input type="button" className="Save" value="Salvar" />
                        <input type="button" className="Save" value="Deslogar" onClick={LogOut} />
                    </div>

                </div>

            </div>

            <div className="content">

                <h1>Cadastro</h1>

                <form id="form">

                    <h2>Informações Pessoais</h2>

                    <div className="box-select">

                        <div className="box-x3">
                            <p>Nome Completo</p>
                            <input id="name" type="text" placeholder="Nome Completo" className="inputs required" />
                        </div>

                        <div className="box-x1">
                            <p>Cpf</p>
                            <input id="cpf" type="text" placeholder="Cpf" className="inputs required" />
                        </div>

                        <div className="box-x1">
                            <p>Cart. Trabalho</p>
                            <input id="carteira" type="text" placeholder="Cart. Trbalho" className="inputs required" />
                        </div>

                    </div>

                    <div className="box-select">

                        <div className="box-x1">
                            <p>Cod Sindicato</p>
                            <input type="text" placeholder="Cod. Sindicato" className="inputs required" />
                        </div>

                        <div className="box-x1">
                            <p>Nascimento:</p>
                            <input id="dateofbirth" type="date" placeholder="Data de Nascimento" className="typeDate" />
                        </div>

                        <div className="box-x1">
                            <p>Admissao:</p>
                            <input id="hiringdate" type="date" placeholder="Data de Admissão" className="typeDate" />
                        </div>

                        <div className="box-x1">
                            <p>Vencimento:</p>
                            <input id="duedate" type="date" placeholder="Data de Vencimento" className="typeDate" />
                        </div>

                    </div>

                    <div className="box-select">

                        <div className="box-x1">
                            <p>Rg</p>
                            <input type="text" placeholder="Rg" className="inputs required" />
                        </div>

                        <div className="box-x1">
                            <p>Orgão Emissor</p>
                            <input type="text" placeholder="Orgão Emissor" className="inputs required" />
                        </div>

                    </div>

                    <div className="box-select">

                        <div className="box-x1">
                            <p>Cel 01</p>
                            <input type="text" placeholder="Cel 01: " className="inputs required" />
                        </div>

                        <div className="box-x1">
                            <p>Cel 02</p>
                            <input type="text" placeholder="Cel 02: " className="inputs required" />
                        </div>

                        <div className="box-x1">
                            <p>Tel</p>
                            <input type="text" placeholder="Tel: " className="inputs required" />
                        </div>

                    </div>

                    <div className="box-select">

                        <div className="box-x1">
                            <p>Email</p>
                            <input type="email" placeholder="Seu melhor E-Mail" className="inputs required" />
                        </div>

                    </div>

                    <div className="box-select">

                        <div className="box-x1">
                            <p>Sexo</p>
                            <select id="" className="select" >
                                <option value="none">Sexo</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>
                        </div>

                        <div className="box-x1">
                            <p>Instrução</p>
                            <select id="" className="select" >
                                <option value="none">Instrução</option>
                                <option value="NaoAlfabetizado">Não Alfabetizado</option>
                                <option value="Fundamental">Fundamental</option>
                                <option value="Medio">Ensino Medio</option>
                                <option value="Superior">Superior</option>
                                <option value="Pos">Pós Graduado</option>
                                <option value="Mestre">Mestre</option>
                                <option value="Doutor">Doutor</option>
                            </select>
                        </div>

                        <div className="box-x1">
                            <p>Tipo</p>
                            <select id="tipo" className="select" >
                                <option value="true">Associado</option>
                                <option value="false">Não Associado</option>
                            </select>
                        </div>

                        <div className="box-x1">
                            <p>Situação</p>
                            <select id="Situacao" className="select" >
                                <option value="none">Situacao</option>
                                <option value="Ativo">Ativo</option>
                                <option value="Aposentado">Aposentado</option>
                                <option value="Pensionista">Pensionista</option>
                                <option value="Lic.S.Remun">Lic.S.Remun</option>
                                <option value="Exonerado">Exonerado</option>
                                <option value="Falecido">Falecido</option>
                                <option value="Não Informado">Não Informado</option>
                            </select>
                        </div>

                        <div className="box-x1">
                            <p>Estado Civil</p>
                            <select id="EstadoCivil" className="select" >
                                <option value="none">Estado Civil</option>
                                <option value="Solteiro">Solteiro</option>
                                <option value="Casado">Casado</option>
                                <option value="Separado">Separado</option>
                                <option value="Divorciado">Divorciado</option>
                                <option value="Desquitado">Desquitado</option>
                                <option value="Viuvo">Viuvo</option>
                                <option value="UniaoEstavel">União Estavel</option>
                                <option value="NA">NA</option>
                            </select>
                        </div>

                        <div className="box-x1">
                            <p>Jornal</p>
                            <select id="Jornal" className="select" >
                                <option value="true">Enviar</option>
                                <option value="false">Não Enviar</option>
                            </select>
                        </div>

                        <div className="box-x1">
                            <p>Deficiencia</p>
                            <select id="Deficiencia" className="select" >
                                <option value="false">Não Possui</option>
                                <option value="true">Possui</option>
                            </select>
                        </div>

                    </div>

                    <h2>Empresas</h2>

                    <div className="box-select">

                        <div className="box-x2">
                            <p>Empresa</p>
                            <input id="Empresa" type="text" placeholder="Empresa" className="inputs required" />
                        </div>

                        <div className="box-x1">
                            <p>Cnpj</p>
                            <input id="Cnpj" type="text" placeholder="Cnpj" className="inputs required" />
                        </div>

                    </div>

                    <div className="box-select">

                        <div className="box-x1">
                            <p>Cod. Empresa</p>
                            <input id="CodEmpresa" type="text" placeholder="Cod. Empresa" className="inputs required" />
                        </div>

                        <div className="box-x1">
                            <p>Admissão</p>
                            <input id="Admissao" type="date" placeholder="Data de Admissão" className="typeDate" />
                        </div>

                        <div className="box-x1">
                            <p>Demissão</p>
                            <input id="Demissão" type="date" placeholder="Data de Demissão" className="typeDate" />
                        </div>

                        <div className="box-x1">
                            <p>Contribuinte</p>
                            <select id="Contribuinte" className="select" >
                                <option value="false">Não</option>
                                <option value="true">Sim</option>
                            </select>
                        </div>

                    </div>

                    <input type="button" id="AddEmprego" onClick={AddEmprego} value="Adicionar Emprego" className="inputs required" />

                    <CardEmprego Empregos={empregos} handleResult={updateEmpregos}></CardEmprego>

                    <h2>Endereço de Correspondencia</h2>

                    <div className="box-select">
                        <input id="Cep" type="text" placeholder="CEP" className="inputs required" />
                        <input id="Numero" type="text" placeholder="Numero" className="inputs required" />
                        <input type="button" value="Buscar Endereço" className="BttEndereco" onClick={BuscaCEP} />
                    </div>
                    <div className="box-name">
                        <input id="Rua" type="text" placeholder="Rua" className="inputs required" />
                    </div>
                    <div className="box-select">
                        <input id="Estado" type="text" placeholder="Estado" className="inputs required" />
                        <input id="Cidade" type="text" placeholder="Cidade" className="inputs required" />
                        <input id="Bairro" type="text" placeholder="Bairro" className="inputs required" />
                    </div>

                    <p id="endereco04">Endereço Numero 02</p>

                    <div id="endereco01" className="box-select">
                        <input id="Cep02" type="text" placeholder="CEP" className="inputs required" />
                        <input id="Numero02" type="text" placeholder="Numero" className="inputs required" />
                        <input type="button" value="Buscar Endereço" className="BttEndereco" onClick={BuscaCEP02} />
                    </div>
                    <div id="endereco02" className="box-name">
                        <input id="Rua02" type="text" placeholder="Rua" className="inputs required" />
                    </div>
                    <div id="endereco03" className="box-select">
                        <input id="Estado02" type="text" placeholder="Estado" className="inputs required" />
                        <input id="Cidade02" type="text" placeholder="Cidade" className="inputs required" />
                        <input id="Bairro02" type="text" placeholder="Bairro" className="inputs required" />
                    </div>

                    <input type="button" id="BttAddEndereco" onClick={AddEndereco} value="" className="BttEndereco" />

                    <h2>Dependentes</h2>

                    <div className="box-select">
                        <div className="box-x1">
                            <p>Nome Completo</p>
                            <input id="NomeDependente" type="text" placeholder="Nome Completo: " className="inputs required" />
                        </div>

                        <div className="box-x1">
                            <p>Cel</p>
                            <input id="TelefoneDependente" type="text" placeholder="Cel: " className="inputs required" />
                        </div>

                        <div className="box-x1">
                            <p>Cpf</p>
                            <input id="CpfDependente" type="text" placeholder="Cpf" className="inputs required" />
                        </div>

                        <div className="box-x1">
                            <p>Rg</p>
                            <input id="RgDependente" type="text" placeholder="Rg" className="inputs required" />
                        </div>

                    </div>

                    <div className="box-select">

                        <div className="box-x1">
                            <p className="TituloCampoX1">Nascimento</p>
                            <input id="NascDependente" type="date" placeholder="Data de Nascimento" className="typeDate" />
                        </div>

                        <div className="box-x1">
                            <p>Sexo</p>
                            <select id="SexoDependente" className="select" >
                                <option value="none">Sexo</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </div>

                        <div className="box-x1">
                            <p>Parentesco</p>
                            <select id="ParentescoDependente" className="select" >
                                <option value="none">Parentesco</option>
                                <option value="Pai">Pai</option>
                                <option value="Mae">Mãe</option>
                                <option value="Filho">Filho(a)</option>
                            </select>
                        </div>

                        <div className="box-x1">
                            <p>Possui Licença Medica</p>
                            <select id="LicencDependente" className="select" >
                                <option value="false">Não</option>
                                <option value="true">Sim</option>
                            </select>

                        </div>
                    </div>

                    <input type="button" id="AddDependente" onClick={AddDependente} value="Adicionar Dependente" className="inputs required" />

                    <CardDependente Dependentes={dependentes} handleResult={update}></CardDependente>
                    <h2>Detalhes do Cliente</h2>

                    <textarea className="inputs" name="descricao" id="descricao" cols="25" rows="10"
                        placeholder="Informações sobre o cliente ...">
                    </textarea>

                </form>
            </div >
        </div >
    )
}

export default Formulario