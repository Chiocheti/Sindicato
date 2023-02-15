import "../../css/StyleFormulario.css"
import Card from "../Cadastro/CardDependente.js"

import Axios from "axios";

import { useState, useEffect } from "react";
function Formulario() {

    var [useEndereco02, setUseEndereco02] = useState(false)
    var [dependentes, setDependentes] = useState([])
    var [booLecMedc, setBooLecMedc] = useState(false)
    var [totalDependentes, setTotalDependentes] = useState(0)

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
    })

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

        load(lista)
    }

    function load(lista) {
        setDependentes(() => lista)
        console.log("dependentes")
        console.log(dependentes)
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

    return (
        <div className="content">
            <h1>Cadastro</h1>
            <form id="form">
                <p>Informações Pessoais</p>
                <div className="box-select">
                    <div className="box-name">
                        <input id="name" type="text" placeholder="Nome Completo" className="inputs required" />
                    </div>
                    <div>
                        <input id="cpf" type="text" placeholder="Cpf" className="inputs required" />
                    </div>
                    <div>
                        <input id="rg" type="text" placeholder="Rg" className="inputs required" />
                    </div>
                </div>
                <div className="box-select">
                    <div className="box-date">
                        <input type="text" placeholder="Cod. Sindicato" className="inputs required" />
                    </div>
                    <div className="box-select">
                        <p className="TituloCampo">
                            Nascimento:
                        </p>
                        <input id="dateofbirth" type="date" placeholder="Data de Nascimento" className="typeDate" />
                    </div>
                    <div className="box-select">
                        <p className="TituloCampo">
                            Admissão:
                        </p>
                        <input id="hiringdate" type="date" placeholder="Data de Admissão" className="typeDate" />
                    </div>
                    <div className="box-select">
                        <p className="TituloCampo">
                            Vencimento:
                        </p>
                        <input id="duedate" type="date" placeholder="Data de Vencimento" className="typeDate" />
                    </div>
                </div>
                <div className="box-select">
                    <input type="text" placeholder="Carteira de Trabalho" className="inputs required" />
                    <input type="text" placeholder="Orgão Emissor" className="inputs required" />
                </div>
                <div className="box-select">
                    <input type="text" placeholder="Cel 01: " className="inputs required" />
                    <input type="text" placeholder="Cel 02: " className="inputs required" />
                    <input type="text" placeholder="Tel: " className="inputs required" />
                </div>
                <div className="box-select">
                    <input type="text" placeholder="Empresa" className="inputs required" />
                    <input id="cnpj" type="text" placeholder="Cnpj" className="inputs required" />
                </div>
                <div className="box-select">
                    <input type="email" placeholder="Seu melhor E-Mail" className="inputs required" />
                </div>
                <div className="box-block">
                    <div className="box-block">
                        <p>Sexo:</p>
                        <select id="sexo" className="sexo" >
                            <option value="none">Sexo</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>

                        </select>
                    </div>
                    <div className="box-block">
                        <p>Instrução:</p>
                        <select id="sexo" className="sexo" >
                            <option value="none">Instrução</option>
                            <option value="NaoAlfabetizado">Não Alfabetizado</option>
                            <option value="Fundamental">Ensino Fundamental</option>
                            <option value="Medio">Ensino Medio</option>
                            <option value="Superior">Superior</option>
                            <option value="Pos">Pós Graduado</option>
                            <option value="Mestre">Mestre</option>
                            <option value="Doutor">Doutor</option>
                        </select>
                    </div>
                    <div className="box-block">
                        <p>Tipo:</p>
                        <select id="tipo" className="sexo" >
                            <option value="none">Tipo</option>
                            <option value="Fornecedor">Fornecedor</option>
                            <option value="Geral">Geral</option>
                            <option value="Medico">Médico</option>
                            <option value="NaoAssociado">Não Associado</option>
                            <option value="Prestador">Prestador de Serviço</option>
                        </select>
                    </div>
                    <div className="box-block">
                        <p>Situação:</p>
                        <select id="Situacao" className="sexo" >
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
                    <div className="box-block">
                        <p>Estado Civil:</p>
                        <select id="EstadoCivil" className="sexo" >
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
                </div>
                <h3>-----------------------------------------------</h3>
                <p>Endereço de Correspondencia</p>

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
                <h3>-----------------------------------------------</h3>
                <p>Dependentes</p>
                <div className="box-select">
                    <div>
                        <input id="NomeDependente" type="text" placeholder="Nome Completo do Dependente: " className="inputs required" />
                    </div>
                    <div>
                        <input id="TelefoneDependente" type="text" placeholder="Cel: " className="inputs required" />
                    </div>
                    <div>
                        <input id="CpfDependente" type="text" placeholder="Cpf" className="inputs required" />
                    </div>
                    <div>
                        <input id="RgDependente" type="text" placeholder="Rg" className="inputs required" />
                    </div>
                </div>
                <div className="box-block">
                    <div className="box-block">
                        <p>Nascimento:</p>
                        <input id="NascDependente" type="date" placeholder="Data de Nascimento" className="typeDate" />
                    </div>
                    <div className="box-block">
                        <p>Sexo:</p>
                        <select id="SexoDependente" className="sexo" >
                            <option value="none">Sexo</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>
                    <div className="box-block">
                        <p>Parentesco:</p>
                        <select id="ParentescoDependente" className="sexo" >
                            <option value="none">Parentesco</option>
                            <option value="Pai">Pai</option>
                            <option value="Mae">Mãe</option>
                            <option value="Filho">Filho(a)</option>
                        </select>
                    </div>
                    <div className="box-block">
                        <p>Possui Licença Medica:</p>
                        <select id="LicencDependente" className="sexo" >
                            <option value="false">Não</option>
                            <option value="true">Sim</option>
                        </select>
                    </div>
                </div>
                <input type="button" id="AddDependente" onClick={AddDependente} value="Adicionar Dependente" className="inputs required" />
                <Card Dependentes={dependentes} handleResult={update}></Card>
                <h3>-----------------------------------------------</h3>

                <textarea className="inputs" name="descricao" id="descricao" cols="25" rows="10"
                    placeholder="Informações sobre o cliente ..."></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Formulario