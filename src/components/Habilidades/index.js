import { useState } from "react";

const Habilidades = () => {
  const [habilidades, setHabilidades] = useState([]);

  const [input, setInput] = useState("");  

  function AdicionarHabilidade() {
    setHabilidades([...habilidades, input]);

    fetch("http://localhost:4000/skills", {
      method: "POST",
      body: JSON.stringify({ habilidade: input }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => setHabilidades([...habilidades, data.habilidade]))
    .catch(error => console.error(error));

    setInput("");
  }

  function handleInput(e) {
    setInput(e.target.value);
  }  

  return (
    <div className="container">
      <h3 className="ml-2">-| Habilidades</h3>
      <ul className="lista-habilidade grid">
        {habilidades.map((habilidade) => (
          <li key={habilidade}>{habilidade}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          name="habilidade"
          value={input}
          onChange={handleInput}
          className="input-habilidade"
        />
        <button type="button" className="btn-add" onClick={AdicionarHabilidade}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Habilidades;
