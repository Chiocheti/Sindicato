import "../css/StyleFormulario.css"

function Formulario() {




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
                    <div>
                        <p className="date">
                            Nascimento
                        </p>
                        <input id="dateofbirth" type="date" placeholder="Data de Nascimento" className="typeDate" />
                    </div>
                    <div>
                        <p className="date">
                            Admissão
                        </p>
                        <input id="hiringdate" type="date" placeholder="Data de Admissão" className="typeDate" />
                    </div>
                    <div>
                        <p className="date">
                            Vencimento
                        </p>
                        <input id="duedate" type="date" placeholder="Data de Vencimento" className="typeDate" />
                    </div>
                </div>
                <div className="box-select">
                    <input type="text" placeholder="Carteira de Trabalho" className="inputs required" />
                    <input type="text" placeholder="Orgão Emissor" className="inputs required" />
                </div>
                <div className="box-block">
                    <div className="box-block">
                        <p>Sexo:</p>
                        <select id="sexo" className="sexo" >
                            <option value="none">Sexo</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
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
                        <p>Estado Civil</p>
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
                <p>Endereço Comercial</p>
                <div className="box-select">
                    <input type="text" placeholder="CEP" className="inputs required" />
                    <input type="text" placeholder="Numero" className="inputs required" />
                    <input type="button" value="Buscar Endereço" className="BttEndereco"/>
                </div>
                <div className="box-name">
                    <input type="text" placeholder="Rua" className="inputs required" />
                </div>
                <div className="box-select">
                    <input type="text" placeholder="Estado" className="inputs required" />
                    <input type="text" placeholder="Cidade" className="inputs required" />
                    <input type="text" placeholder="Bairro" className="inputs required" />
                </div>
                <h3>-----------------------------------------------</h3>
                <p>Endereço de Correspondencia</p>
                <div className="box-select">
                    <input type="text" placeholder="CEP" className="inputs required" />
                    <input type="text" placeholder="Numero" className="inputs required" />
                    <input type="button" value="Buscar Endereço" className="BttEndereco"/>
                </div>
                <div className="box-name">
                    <input type="text" placeholder="Rua" className="inputs required" />
                </div>
                <div className="box-select">
                    <input type="text" placeholder="Estado" className="inputs required" />
                    <input type="text" placeholder="Cidade" className="inputs required" />
                    <input type="text" placeholder="Bairro" className="inputs required" />
                </div>
                <h3>-----------------------------------------------</h3>
                <p>Contato</p>
                <div className="box-select">
                    <div>
                        <input type="text" placeholder="Cel 01: " className="inputs required" />
                    </div>
                    <div>
                        <input type="text" placeholder="Cel 02: " className="inputs required" />
                    </div>
                    <div>
                        <input type="text" placeholder="Tel: " className="inputs required" />
                    </div>
                </div>
                <div className="box-select">
                    <div className="box-enterprise">
                        <input type="text" placeholder="Empresa" className="inputs required" />
                    </div>
                    <div>
                        <input id="cnpj" type="text" placeholder="cnpj" className="inputs required" />
                    </div>
                </div>
                <div>
                    <input type="email" placeholder="Seu melhor E-Mail" className="inputs required" />
                </div>
                <div className="box-select">
                    <div>
                        <input type="password" placeholder="Senha" className="inputs required" />
                    </div>
                    <div>
                        <input type="password" placeholder="Repita sua senha" className="inputs required" />
                    </div>
                </div>
                <textarea className="inputs" name="descricao" id="descricao" cols="25" rows="10"
                    placeholder="Anotações avulsas sobre o cliente..."></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Formulario