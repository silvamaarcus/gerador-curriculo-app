import { useState } from "react";

const Experiencia = () => {
  const [dadosFormulario, setDadosFormulario] = useState({});

  const [experiencias, setExperiencias] = useState([]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setDadosFormulario({ ...dadosFormulario, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Criando um arquivo JSON com as informações obtidas.
    // const jsonString = JSON.stringify(dadosFormulario);

    // Convertendo em JSON, para manipula-lo.
    // const jsonObjeto = JSON.parse(jsonString);
    // console.log(jsonObjeto);

    const novaExperiencia = {
      cargo: dadosFormulario.cargo,
      nomeEmpresa: dadosFormulario.nomeEmpresa,
    };

    // adicionando nova experiência ao array de experiências
    setExperiencias([...experiencias, novaExperiencia]);

    // limpando os dados do formulário após a submissão
    setDadosFormulario({});
  }

  function handleDelete(index) {
    setExperiencias(experiencias.filter((_, i) => i !== index));
  }

  return (
    <div className="container">
      <h3 className="ml-2">-| Experiência</h3>
      <h5>Adicione até três experiências.</h5>
      <form className="experiencia" onSubmit={handleSubmit}>
        <div>
          <div className="exp-titulo grid-meio-meio">
            <div className="grid input-padrao">
              <label htmlFor="cargo">Cargo</label>
              <input
                type="text"
                name="cargo"
                id="cargo"
                value={dadosFormulario.cargo || ""}
                onChange={handleInputChange}
                placeholder="Nome do cargo"
              />
            </div>
            <div className="grid input-padrao">
              <label htmlFor="empresa">Empresa</label>
              <input
                type="text"
                name="nomeEmpresa"
                id="nomeEmpresa"
                value={dadosFormulario.nomeEmpresa || ""}
                onChange={handleInputChange}
                placeholder="Nome da Empresa"
              />
            </div>
          </div>

          <div className="exp-subtitulo grid-meio-meio">
            <div className="grid input-padrao">
              <label htmlFor="mesI">Início</label>
              <input
                type="date"
                id="dataInicio"
                name="dataInicio"
                value={dadosFormulario.dataInicio || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid input-padrao">
              <label htmlFor="mesF">Final</label>
              <input
                type="date"
                id="dataSaida"
                name="dataSaida"
                value={dadosFormulario.dataSaida || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="exp-resumo">
            <div className="grid input-padrao">
              <label htmlFor="resumo">Resumo</label>
              <textarea
                name="resumo"
                id="resumo"
                rows="6"
                value={dadosFormulario.resumo || ""}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn-add">
            Adicionar
          </button>
        </div>

        <div className="experiencia-salvas">
          <ul>
            {experiencias.map((experiencia, index) => (
              <li key={index} className="flex-space-between">
                <span><strong>{experiencia.cargo}</strong> | {experiencia.nomeEmpresa}</span>
                <button className="btn-remove" onClick={() => handleDelete(index)}>X</button>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Experiencia;
