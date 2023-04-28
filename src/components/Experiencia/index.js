import { useState } from "react";

const Experiencia = () => {
  return (
    <div className="container">
      <h3 className="ml-2">-| Experiência</h3>
      <h5>Adicione até três experiências.</h5>
      <div className="experiencia">
        <div>
          <div className="exp-titulo grid-meio-meio">
            <div className="grid input-padrao">
              <label htmlFor="cargo">Cargo</label>
              <input
                type="text"
                name="exp-cargo"
                id="exp-cargo"
                placeholder="Nome do cargo"
              />
            </div>
            <div className="grid input-padrao">
              <label htmlFor="empresa">Empresa</label>
              <input
                type="text"
                name="exp-empresa"
                id="exp-empresa"
                placeholder="Nome da Empresa"
              />
            </div>
          </div>

          <div className="exp-subtitulo grid-meio-meio">
            <div className="grid input-padrao">
              <label htmlFor="mesI">Início</label>
              <input
                type="text"
                name="exp-mesI"
                id="exp-mesI"
                placeholder="Dez/2022"
              />
            </div>
            <div className="grid input-padrao">
              <label htmlFor="mesF">Final</label>
              <input
                type="text"
                name="exp-mesF"
                id="exp-mesF"
                placeholder="Presente"
              />
            </div>
          </div>

          <div className="exp-resumo">
            <div className=" grid input-padrao">
              <label htmlFor="resumo">Resumo</label>
              <textarea name="resumo" id="resumo" rows="6"></textarea>
            </div>
          </div>

          <button
          type="button"
          className="btn-habilidade"
        >
          Adicionar
        </button>

        </div>      
      </div>
    </div>
  );
};

export default Experiencia;
