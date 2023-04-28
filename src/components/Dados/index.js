const Dados = () => {
  return (
    <div className="container">
      <h3 className="ml-2">-| Dados Pessoais</h3>
      <div className="main-dados grid-meio-meio">
        <div>
          <div className="input-padrao grid">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Homer Simpsons"
              required
            />
          </div>

          <div className="input-padrao grid">
            <label htmlFor="cargo">Profissão</label>
            <input
              type="text"
              name="cargo"
              id="cargo"
              placeholder="Inspetor de segurança"
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
              required
            />
          </div>

          <div className="input-padrao grid">
            <label htmlFor="link">LinkedIn</label>
            <input type="text" name="linkedin" id="linkedin" />
          </div>

          <div className="input-padrao grid">
            <label htmlFor="link">Outros links</label>
            <input type="text" name="outros" id="outros" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dados;
