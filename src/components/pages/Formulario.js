import "../../css/StyleFormulario.css"
import CardDependente from "../Cadastro/CardDependente.js"
import CardEmprego from "../Cadastro/CardEmpresa.js"

import { v4 as uuid } from "uuid"

import { useNavigate } from 'react-router-dom'
import Axios from "axios";

import { useState, useEffect } from "react";

import { TextField, InputLabel, MenuItem, FormControl, Select, Button } from "@mui/material";

function Formulario() {

    var [usuario, setUsuario] = useState("")

    var [useEndereco02, setUseEndereco02] = useState(false)

    var [dependentes, setDependentes] = useState([])
    var [totalDependentes, setTotalDependentes] = useState(0)

    var [empregos, setEmpregos] = useState([])
    var [totalEmpregos, setTotalEmpregos] = useState(false)

    var [sexo, setSexo] = useState("")
    var [civil, setCivil] = useState("")
    var [instrucao, setInstrucao] = useState("")
    var [tipo, setTipo] = useState("")
    var [situacao, setSituacao] = useState("")
    var [jornal, setJornal] = useState("")
    var [deficiencia, setDeficiencia] = useState("")

    var [contribuinte, setContribuinte] = useState("")

    var [sexoDependente, setSexoDependente] = useState("")
    var [parentescoDependente, setParentescoDependente] = useState("")

    const navigate = useNavigate();

    useEffect(() => {

        if (useEndereco02 == false) {
            document.getElementById("endereco01").style.display = "none"
            document.getElementById("endereco02").style.display = "none"
            document.getElementById("endereco03").style.display = "none"
        } else {
            document.getElementById("endereco01").style.display = "flex"
            document.getElementById("endereco02").style.display = "flex"
            document.getElementById("endereco03").style.display = "flex"
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

    const switchContribuinte = (event) => {
        setContribuinte(event.target.value);
    };

    const switchSexoDependente = (event) => {
        setSexoDependente(event.target.value);
    };

    const switchParentescoDependente = (event) => {
        setParentescoDependente(event.target.value);
    };

    const switchSexo = (event) => {
        setSexo(event.target.value);
    };

    const switchCivil = (event) => {
        setCivil(event.target.value);
    };

    const switchInstrucao = (event) => {
        setInstrucao(event.target.value);
    };

    const switchTipo = (event) => {
        setTipo(event.target.value);
    };

    const switchSituacao = (event) => {
        setSituacao(event.target.value);
    };

    const switchJornal = (event) => {
        setJornal(event.target.value);
    };

    const switchDeficiencia = (event) => {
        setDeficiencia(event.target.value);
    };

    const update = result => {
        console.log("Valor -> Pai")
        console.log(result)

        var lista = dependentes
        var item = dependentes.find(i => i.DepId == result)
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
        var item = empregos.find(i => i.EmpId == result)
        var index = empregos.indexOf(item)

        console.log("item")
        console.log(item)

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
        var cep = document.getElementById('end01Cep').value
        const options = {
            method: 'GET',
            url: `https://viacep.com.br/ws/${cep}/json/`
        };

        Axios.request(options).then(function (response) {
            console.log(response.data)
            var endereco = response.data
            console.log("Endedeço: ")
            console.log(endereco)
            document.getElementById("end01Rua").value = endereco.logradouro
            document.getElementById("end01Bairro").value = endereco.bairro
            document.getElementById("end01Cidade").value = endereco.localidade
            document.getElementById("end01Estado").value = endereco.uf

        }).catch(function (error) {
            console.log(error)
        })
    }

    function BuscaCEP02() {
        var cep = document.getElementById('end02Cep').value
        const options = {
            method: 'GET',
            url: `https://viacep.com.br/ws/${cep}/json/`
        };

        Axios.request(options).then(function (response) {
            console.log(response.data)
            var endereco = response.data
            console.log("Endedeço: ")
            console.log(endereco)

            document.getElementById("end02Rua").value = endereco.logradouro
            document.getElementById("end02Bairro").value = endereco.bairro
            document.getElementById("end02Cidade").value = endereco.localidade
            document.getElementById("end02Estado").value = endereco.uf

        }).catch(function (error) {
            console.log(error)
        })
    }

    function AddDependente() {
        var NomeDependente = document.getElementById("NomeDependente")
        var NascDependente = document.getElementById("NascDependente")

        var Array = new Object();
        Array.DepId = uuid()
        Array.DepNome = NomeDependente.value
        Array.DepNascimento = NascDependente.value
        Array.DepSexo = sexoDependente
        Array.DepParentesco = parentescoDependente

        var List = dependentes;
        List.push(Array)
        setDependentes(List)

        NomeDependente.value = ''
        NascDependente.value = ''

        setTotalDependentes(totalDependentes + 1)
    }

    function AddEndereco() {
        var container01 = document.getElementById("endereco01");
        var container02 = document.getElementById("endereco02");
        var container03 = document.getElementById("endereco03");

        if (container01.style.display === "none") {
            container01.style.display = "flex"
            container02.style.display = "flex"
            container03.style.display = "flex"
            setUseEndereco02(true)
        } else {
            container01.style.display = "none"
            container02.style.display = "none"
            container03.style.display = "none"
            document.getElementById("end02Cep").value = ("")
            document.getElementById("end02Rua").value = ("")
            document.getElementById("end02Bairro").value = ("")
            document.getElementById("end02Cidade").value = ("")
            document.getElementById("end02Estado").value = ("")
            setUseEndereco02(false)
        }
    }

    function AddEmprego() {
        var empresa = document.getElementById("Empresa")
        var codEmpresa = document.getElementById("CodEmpresa")
        var admissao = document.getElementById("Admissao")
        var demissao = document.getElementById("Demissão")

        var Array = new Object();
        Array.EmpId = uuid()
        Array.EmpCodEmpresa = codEmpresa.value
        Array.EmpNome = empresa.value
        Array.EmpAdmissao = admissao.value
        Array.EmpDemissao = demissao.value
        Array.EmpContribuinte = contribuinte

        var List = empregos
        List.push(Array)
        setEmpregos(List)

        empresa.value = ""
        codEmpresa.value = ""
        admissao.value = ""
        demissao.value = ""
        setTotalEmpregos(totalEmpregos + 1)
    }

    function CadastraSindicalista() {
        var nome = document.getElementById("nome")
        var cpf = document.getElementById("cpf")
        var carteira = document.getElementById("carteira")
        var codSind = document.getElementById("codSind")
        var nascimento = document.getElementById("nascimento")
        var vencimento = document.getElementById("vencimento")
        var rg = document.getElementById("rg")
        var orgaoEmissor = document.getElementById("orgaoEmissor")
        var cel01 = document.getElementById("cel01")
        var cel02 = document.getElementById("cel02")
        var cel03 = document.getElementById("cel03")
        var email = document.getElementById("email")
        var end01Cep = document.getElementById("end01Cep")
        var end01Numero = document.getElementById("end01Numero")
        var end01Rua = document.getElementById("end01Rua")
        var end01Estado = document.getElementById("end01Estado")
        var end01Cidade = document.getElementById("end01Cidade")
        var end01Bairro = document.getElementById("end01Bairro")
        var end02Cep = document.getElementById("end02Cep")
        var end02Numero = document.getElementById("end02Numero")
        var end02Rua = document.getElementById("end02Rua")
        var end02Estado = document.getElementById("end02Estado")
        var end02Cidade = document.getElementById("end02Cidade")
        var end02Bairro = document.getElementById("end02Bairro")
        var detalhes = document.getElementById("detalhes")

        const save = {
            method: 'POST',
            url: 'http://localhost:3001/api/sindicalista',
            headers: { 'Content-Type': 'application/json' },
            data: {
                SindId: uuid(),
                SindCodSindicato: codSind.value,
                SindNome: nome.value,
                SindCpf: cpf.value,
                SindRg: rg.value,
                SindOrgaoEmissor: orgaoEmissor.value,
                SindCel01: cel01.value,
                SindCel02: cel02.value,
                SindCel03: cel03.value,
                SindNascimento: nascimento.value,
                SindEmail: email.value,
                SindCarteiraDeTrabalho: carteira.value,
                SindVencimento: vencimento.value,
                SindSexo: sexo,
                SindEstadoCivil: civil,
                SindInstrucao: instrucao,
                SindTipo: tipo,
                SindSituacao: situacao,
                SindJornal: jornal,
                SindDeficiencia: deficiencia,
                SindDetalhes: detalhes.value,
                End01Cep: end01Cep.value,
                End01Rua: end01Rua.value,
                End01Numero: end01Numero.value,
                End01Bairro: end01Bairro.value,
                End01Estado: end01Estado.value,
                End01Cidade: end01Cidade.value,
                End02Cep: end02Cep.value,
                End02Rua: end02Rua.value,
                End02Numero: end02Numero.value,
                End02Bairro: end02Bairro.value,
                End02Estado: end02Estado.value,
                End02Cidade: end02Cidade.value
            }
        };
        Axios.request(save).then(function (response) {
            console.log(response.data);

            empregos.map((emprego) => {
                const save = {
                    method: 'POST',
                    url: 'http://localhost:3001/api/empresa',
                    headers: { 'Content-Type': 'application/json' },
                    data: {
                        EmpId: emprego.EmpId,
                        SindId: response.data.SindId,
                        EmpCodEmpresa: emprego.EmpCodEmpresa,
                        EmpNome: emprego.EmpNome,
                        EmpAdmissao: emprego.EmpAdmissao,
                        EmpDemissao: emprego.EmpDemissao,
                        EmpContribuinte: emprego.EmpContribuinte,
                    }
                };

                Axios.request(save).then(function (response) {
                    console.log(response.data);
                }).catch(function (error) {
                    console.error(error);
                });
            })

            dependentes.map((dependente) => {
                const save = {
                    method: 'POST',
                    url: 'http://localhost:3001/api/dependente',
                    headers: { 'Content-Type': 'application/json' },
                    data: {
                        DepId: dependente.DepId,
                        SindId: response.data.SindId,
                        DepNome: dependente.DepNome,
                        DepNascimento: dependente.DepNascimento,
                        DepSexo: dependente.DepSexo,
                        DepParentesco: dependente.DepParentesco,
                    }
                };

                Axios.request(save).then(function (response) {
                    console.log(response.data);
                }).catch(function (error) {
                    console.error(error);
                });
            })
        }).catch(function (error) {
            console.error(error);
        });




    }

    return (

        <div>
            <div className="Navbar">

                <div className="NavbarContent">

                    <input type="text" name="" id="nomeUsuario" value={""} readOnly className="UserName" />

                    <div className="Flex">
                        <input type="button" className="Save" value="Salvar" onClick={CadastraSindicalista} />
                        <input type="button" className="Save" value="Deslogar" onClick={LogOut} />
                    </div>

                </div>

            </div>

            <div className="content">

                <form id="form">

                    <h2>Informações Pessoais</h2>

                    <div className="box-select">

                        <div className="box-x1">
                            <TextField id="codSind" label="Cod. Sindicato" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div className="box-x3">
                            <TextField id="nome" label="Nome Completo" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div className="box-x1">
                            <TextField id="cpf" label="CPF" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                    </div>


                    <div className="box-select">

                        <div className="box-x1">
                            <TextField id="rg" label="RG" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div className="box-x1">
                            <TextField id="orgaoEmissor" label="Órgão Emissor" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div className="box-x1">
                            <TextField id="cel01" label="Celular" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div className="box-x1">
                            <TextField id="cel02" label="Celular / Telefone 2" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div className="box-x1">
                            <TextField id="cel03" label="Celular / Telefone 3" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                    </div>

                    <div className="box-select">

                        <div className="box-x1">
                            <TextField id="nascimento" type="date" label="Data Nascimento" variant="outlined" size="small" sx={{
                                width: '100%'
                            }}
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                        </div>

                        <div className="box-x2">
                            <TextField id="email" label="E-Mail" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div className="box-x1">
                            <TextField id="carteira" label="Cart.de Trabalho" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div className="box-x1">
                            <TextField id="vencimento" type="date" label="Vencimento Carteirinha" variant="outlined" size="small" sx={{
                                width: '100%'
                            }}
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                        </div>

                    </div>

                    <div className="box-select">

                        <div className="box-x1">
                            <FormControl fullWidth>
                                <InputLabel id="sexo">Sexo</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    size="small"
                                    label="Sexo"
                                    sx={{ width: '100%' }}
                                    onChange={switchSexo}
                                >
                                    <MenuItem value={"Masculino"}>Masculino</MenuItem>
                                    <MenuItem value={"Feminino"}>Feminino</MenuItem>
                                    <MenuItem value={"Outro"}>Outro</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="box-x1">
                            <FormControl fullWidth>
                                <InputLabel id="civil">Estado Civil</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    size="small"
                                    label="Estado Civil"
                                    sx={{ width: '100%' }}
                                    onChange={switchCivil}
                                >
                                    <MenuItem value={"Solteiro"}>Solteiro</MenuItem>
                                    <MenuItem value={"Casado"}>Casado</MenuItem>
                                    <MenuItem value={"Separado"}>Separado</MenuItem>
                                    <MenuItem value={"Divorciado"}>Divorciado</MenuItem>
                                    <MenuItem value={"Desquitado"}>Desquitado</MenuItem>
                                    <MenuItem value={"Viúvo"}>Viúvo</MenuItem>
                                    <MenuItem value={"União Estável"}>União Estável</MenuItem>
                                    <MenuItem value={"Outros"}>Outros</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="box-x1">
                            <FormControl fullWidth>
                                <InputLabel id="instrucao">Instrução</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    size="small"
                                    label="Instrução"
                                    sx={{ width: '100%' }}
                                    onChange={switchInstrucao}
                                >
                                    <MenuItem value={"Não Alfabetizado"}>Não Alfabetizado</MenuItem>
                                    <MenuItem value={"Fundamental"}>Fundamental</MenuItem>
                                    <MenuItem value={"Ensino Médio"}>Ensino Médio</MenuItem>
                                    <MenuItem value={"Superior"}>Superior</MenuItem>
                                    <MenuItem value={"Pós Graduado"}>Pós Graduado</MenuItem>
                                    <MenuItem value={"Mestre"}>Mestre</MenuItem>
                                    <MenuItem value={"Doutor"}>Doutor</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="box-x1">
                            <FormControl fullWidth>
                                <InputLabel id="tipo">Tipo</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    size="small"
                                    label="Tipo"
                                    onChange={switchTipo}
                                    sx={{ width: '100%' }}
                                >
                                    <MenuItem value={"Associado"}>Associado</MenuItem>
                                    <MenuItem value={"Não Associado"}>Não Associado</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="box-x1">
                            <FormControl fullWidth>
                                <InputLabel id="situacao">Situação</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    size="small"
                                    label="Situação"
                                    sx={{ width: '100%' }}
                                    onChange={switchSituacao}
                                >
                                    <MenuItem value={"Ativo"}>Ativo</MenuItem>
                                    <MenuItem value={"Aposentado"}>Aposentado</MenuItem>
                                    <MenuItem value={"Pensionista"}>Pensionista</MenuItem>
                                    <MenuItem value={"Lic. S. Remuneração"}>Lic. S. Remuneração</MenuItem>
                                    <MenuItem value={"Exonerado"}>Exonerado</MenuItem>
                                    <MenuItem value={"Falecido"}>Falecido</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="box-x1">
                            <FormControl fullWidth>
                                <InputLabel id="jornal">Jornal</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    size="small"
                                    label="Jornal"
                                    sx={{ width: '100%' }}
                                    onChange={switchJornal}
                                >
                                    <MenuItem value={"Enviar"}>Enviar</MenuItem>
                                    <MenuItem value={"Não Enviar"}>Não Enviar</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="box-x1">
                            <FormControl fullWidth>
                                <InputLabel id="deficiencia">Deficiência</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    size="small"
                                    label="Deficiência"
                                    onChange={switchDeficiencia}
                                    sx={{ width: '100%' }}
                                >
                                    <MenuItem value={"Não Possui"}>Não Possui</MenuItem>
                                    <MenuItem value={"Possui"}>Possui</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                    </div>

                    <h2>Endereço de Correspondencia</h2>

                    <div className="box-select">

                        <div className="box-x1">
                            <TextField id="end01Cep" label="CEP" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div>
                            <Button variant="outlined"
                                id="BttAddEndereco"
                                onClick={BuscaCEP}
                                value={"Buscar"}
                                sx={{
                                    width: '100%'
                                }}>
                                Buscar
                            </Button>
                        </div>


                        <div className="box-x3">
                            <TextField id="end01Rua" label="Rua" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div className="box-x1">
                            <TextField id="end01Numero" label="Número" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div className="box-x2">
                            <TextField id="end01Bairro" label="Bairro" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                    </div>

                    <div className="box-select">

                        <div className="box-x1">
                            <TextField id="end01Estado" label="Estado" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div className="box-x3">
                            <TextField id="end01Cidade" label="Cidade" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                    </div>

                    <h2 id="endereco01">Endereço 02</h2>

                    <div id="endereco02" className="box-select">

                        <div className="box-x1">
                            <TextField id="end02Cep" label="CEP" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div >
                            <Button variant="outlined"
                                onClick={BuscaCEP02}
                                value={"Buscar"}
                                sx={{
                                    width: '100%'
                                }}>
                                Buscar
                            </Button>
                        </div>

                        <div className="box-x3">
                            <TextField id="end02Rua" label="Rua" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div className="box-x1">
                            <TextField id="end02Numero" label="Número" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div className="box-x2">
                            <TextField id="end02Bairro" label="Bairro" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                    </div>

                    <div id="endereco03" className="box-select">

                        <div className="box-x1">
                            <TextField id="end02Estado" label="Estado" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div className="box-x3">
                            <TextField id="end02Cidade" label="Cidade" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                    </div>

                    <div className="box-select">

                        <div className="box-x1">
                            <Button variant="outlined"
                                id="BttAddEndereco"
                                onClick={AddEndereco}
                                value={"Adicionar"}
                                sx={{
                                    width: '100%'
                                }}>
                                Adicionar
                            </Button>
                        </div>

                    </div>


                    <h2>Empresas</h2>

                    <div className="box-select">

                        <div className="box-x1">
                            <TextField id="CodEmpresa" label="Cod. Empr." variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div className="box-x3">
                            <TextField id="Empresa" label="Empresa" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div className="box-x1">
                            <TextField id="Admissao" type="date" label="Data Admissão" variant="outlined" size="small" sx={{
                                width: '100%'
                            }}
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                        </div>

                        <div className="box-x1">
                            <TextField id="Demissão" type="date" label="Data Demissão" variant="outlined" size="small" sx={{
                                width: '100%'
                            }}
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                        </div>

                        <div className="box-x1">
                            <FormControl fullWidth>
                                <InputLabel id="Contribuinte">Contribui</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    size="small"
                                    label="Contribui"
                                    sx={{ width: '100%' }}
                                    onChange={switchContribuinte}
                                >
                                    <MenuItem value={"Sim"}>Sim</MenuItem>
                                    <MenuItem value={"Não"}>Não</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <Button
                                variant="outlined"
                                id="BttAddEndereco"
                                onClick={AddEmprego}
                            >
                                Adicionar
                            </Button>
                        </div>

                    </div>

                    <CardEmprego Empregos={empregos} handleResult={updateEmpregos}></CardEmprego>

                    <h2>Dependentes</h2>

                    <div className="box-select">

                        <div className="box-x3">
                            <TextField id="NomeDependente" label="Nome" variant="outlined" size="small" sx={{
                                width: '100%'
                            }} />
                        </div>

                        <div className="box-x1">
                            <TextField id="NascDependente" type="date" label="Nascimento" variant="outlined" size="small" sx={{
                                width: '100%'
                            }}
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                        </div>

                        <div className="box-x1">
                            <FormControl fullWidth>
                                <InputLabel id="SexoDependente">Sexo</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    size="small"
                                    label="Sexo"
                                    sx={{ width: '100%' }}
                                    onChange={switchSexoDependente}
                                >
                                    <MenuItem value={"Masculino"}>Masculino</MenuItem>
                                    <MenuItem value={"Feminino"}>Feminino</MenuItem>
                                    <MenuItem value={"Outro"}>Outro</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="box-x1">
                            <FormControl fullWidth>
                                <InputLabel id="ParentescoDependente">Parentesco</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    size="small"
                                    label="Parentesco"
                                    sx={{ width: '100%' }}
                                    onChange={switchParentescoDependente}
                                >
                                    <MenuItem value={"Cônjuge"}>Cônjuge</MenuItem>
                                    <MenuItem value={"Filho(a)"}>Filho(a)</MenuItem>
                                    <MenuItem value={"Enteado(a)"}>Enteado(a)</MenuItem>
                                    <MenuItem value={"Tutelado(a)"}>Tutelado(a)</MenuItem>
                                    <MenuItem value={"Outro"}>Outro</MenuItem>
                                    <MenuItem value={"Dep. Laudo Médico"}>Dep. Laudo Médico</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <Button variant="outlined" id="BttAddDependente" onClick={AddDependente}>Adicionar</Button>
                        </div>

                    </div>

                    <CardDependente Dependentes={dependentes} handleResult={update}></CardDependente>

                    <h2>Observações sobre o Cliente</h2>

                    <div className="box-x3">
                        <TextField id="detalhes" label="Descrição" variant="outlined"
                            multiline
                            maxRows={10}
                            sx={{
                                width: '100%'
                            }} />
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Formulario