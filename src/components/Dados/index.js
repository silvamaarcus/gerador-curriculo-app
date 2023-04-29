import { useState } from "react";
import api from "../../services/api";

const Dados = () => {
  const [dadosFormulario, setDadosFormulario] = useState({});

  const [infoPessoal, setInfoPessoal] = useState([]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setDadosFormulario({ ...dadosFormulario, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const novaInfoPessoal = {
      nome: dadosFormulario.nome,
      profissao: dadosFormulario.profissao,
      sobre: dadosFormulario.sobre,
      celular: dadosFormulario.celular,
      email: dadosFormulario.email,
      linkedin: dadosFormulario.linkedin,
      outros: dadosFormulario.outros,
    };

    // Adicionando nova experiência ao array de experiências
    setInfoPessoal([...infoPessoal, novaInfoPessoal]);

    // limpando os dados do formulário após a submissão
    setDadosFormulario({});

    // Criando um arquivo JSON com as informações obtidas.
    const jsonString = JSON.stringify(dadosFormulario);
    // Convertendo em JSON, para manipula-lo.
    const jsonObjeto = JSON.parse(jsonString);
    // console.log(jsonObjeto);
    api
      .post("/dados", jsonObjeto)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <h3 className="ml-2">-| Dados Pessoais</h3>
      <h5>Informe seus dados pessoais.</h5>
      <form className="main-dados grid-meio-meio" onSubmit={handleSubmit}>
        <div>
          <div className="input-padrao grid">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Homer Simpsons"
              value={dadosFormulario.nome || ""}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-padrao grid">
            <label htmlFor="profissao">Profissão</label>
            <input
              type="text"
              name="profissao"
              id="profissao"
              placeholder="Inspetor de segurança"
              value={dadosFormulario.profissao || ""}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-padrao grid">
            <label htmlFor="sobre">Sobre</label>
            <textarea
              id="sobre"
              name="sobre"
              rows="6"
              placeholder="Meu nome é Homer..."
              value={dadosFormulario.sobre || ""}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <div>
          <div className="input-padrao grid">
            <label htmlFor="celular">Celular</label>
            <input
              type="tel"
              name="celular"
              id="celular"
              placeholder="+55 (00) 0 0000-0000"
              value={dadosFormulario.celular || ""}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-padrao grid">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              value={dadosFormulario.email || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-padrao grid">
            <label htmlFor="link">LinkedIn</label>
            <input
              type="text"
              name="linkedin"
              id="linkedin"
              value={dadosFormulario.linkedin || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-padrao grid">
            <label htmlFor="link">Outros links</label>
            <input
              type="text"
              name="outros"
              id="outros"
              value={dadosFormulario.outros || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button type="submit" className="btn-add">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default Dados;
