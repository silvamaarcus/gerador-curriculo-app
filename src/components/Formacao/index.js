import { useState } from "react";
import api from "../../services/api";

const Formacao = () => {
  const [dadosFormulario, setDadosFormulario] = useState({});

  const [formacoes, setFormacoes] = useState([]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setDadosFormulario({ ...dadosFormulario, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const novaFormacao = {
      curso: dadosFormulario.curso,
      nomeFaculdade: dadosFormulario.nomeFaculdade,
    };

    // Adicionando nova experiência ao array de experiências
    setFormacoes([...formacoes, novaFormacao]);

    // limpando os dados do formulário após a submissão
    setDadosFormulario({});

    // Criando um arquivo JSON com as informações obtidas.
    const jsonString = JSON.stringify(dadosFormulario);
    // Convertendo em JSON, para manipula-lo.
    const jsonObjeto = JSON.parse(jsonString);
    // console.log(jsonObjeto);
    api
      .post("/graduacao", jsonObjeto)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleDelete(index) {
    setFormacoes(formacoes.filter((_, i) => i !== index));
  }

  return (
    <div className="container">
      <h3 className="ml-2">-| Formação</h3>
      <h5>Adicione sua formação acadêmica.</h5>
      <form className="formacao" onSubmit={handleSubmit}>
        <div>
          <div className="exp-titulo grid-meio-meio">
            <div className="grid input-padrao">
              <label htmlFor="cargo">Curso</label>
              <input
                type="text"
                name="curso"
                id="curso"
                value={dadosFormulario.curso || ""}
                onChange={handleInputChange}
                placeholder="Nome do curso"
              />
            </div>
            <div className="grid input-padrao">
              <label htmlFor="faculdade">Faculdade</label>
              <input
                type="text"
                name="nomeFaculdade"
                id="nomeFaculdade"
                value={dadosFormulario.nomeFaculdade || ""}
                onChange={handleInputChange}
                placeholder="Nome da faculdade"
              />
            </div>
          </div>

          <button type="submit" className="btn-add">
            Adicionar
          </button>
        </div>

        <div className="formacao-salvas">
          <ul>
            {formacoes.map((facul, index) => (
              <li key={index} className="flex-space-between">
                <span>
                  <strong>{facul.curso}</strong> |{" "}
                  {facul.nomeFaculdade}
                </span>
                <button
                  className="btn-remove"
                  onClick={() => handleDelete(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Formacao;
