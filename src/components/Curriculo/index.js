import { useState, useEffect } from "react";
import html2pdf from "html2pdf.js";

const Curriculo = () => {
  const [dataDados, setDataDados] = useState([]);
  const [dataExp, setDataExp] = useState([]);
  const [dataGrad, setDataGrad] = useState([]);
  const [dataSkills, setDataSkills] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:4000/dados").then((response) => response.json()),
      fetch("http://localhost:4000/exp").then((response) => response.json()),
      fetch("http://localhost:4000/graduacao").then((response) =>
        response.json()
      ),
      fetch("http://localhost:4000/skills").then((response) => response.json()),
    ])
      .then(([dataDados, dataExp, dataGrad, dataSkills]) => {
        setDataDados(dataDados);
        setDataExp(dataExp);
        setDataGrad(dataGrad);
        setDataSkills(dataSkills);
      })
      .catch((error) => console.error(error));
  }, []);

  function downloadPDF() {
    const page = document.querySelector(".pagina");
    html2pdf()
      .set({
        margin: 0,
        filename: "curriculo.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(page)
      .save();
  }

  return (
    <>
      <div className="container pagina">
        <div className="header">
          <div className="header-esq">
            {dataDados.map((item) => (
              <div key={item.id}>
                <h1>{item.nome}</h1>
                <h2>{item.profissao}</h2>
                <p>{item.sobre}</p>
              </div>
            ))}
          </div>

          <div className="header-dir">
            {dataDados.map((item) => (
              <ul key={item.id}>
                <li>{item.celular}</li>
                <li>{item.email}</li>
                <li>{item.linkedin}</li>
                <li>{item.outros}</li>
              </ul>
            ))}
          </div>
        </div>

        <div className="main">
          <div className="main-esq">
            <h4>Experiência</h4>
            {dataExp.map((item) => (
              <div className="main-esq-exp" key={item.id}>
                <span>
                  <h3>{item.cargo}</h3>
                  <p>| {item.nomeEmpresa}</p>
                </span>
                <span>
                  <p>{item.dataInicio}</p>
                  <p>| {item.dataSaida}</p>
                </span>
                <p className="exp-resumo">{item.resumo}</p>
              </div>
            ))}
          </div>

          <div className="main-dir">
            <h4>Educação</h4>
            {dataGrad.map((item) => (
              <ul key={item.id}>
                <li>{item.nomeFaculdade}</li>
                <li>{item.curso}</li>
              </ul>
            ))}
          </div>
        </div>

        <h4>Educação</h4>
        {dataSkills.map((item) => (
          <div className="habilidades">
            <ul key={item.id}>
              <li>{item.habilidade}</li>
            </ul>
          </div>
        ))}
      </div>
      <button onClick={downloadPDF} className="btn-add ml-5 mt-3">
        Salvar PDF
      </button>
    </>
  );
};

export default Curriculo;
