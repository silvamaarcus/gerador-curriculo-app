import Dados from "../Dados";
import Experiencia from "../Experiencia";
import Formacao from "../Formacao";
import Habilidades from "../Habilidades";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <main>
        <Dados />
        <Experiencia />
        <Formacao />
        <Habilidades />
      </main>
      <button>
        <Link to="curriculo" className="btn-add">
          GERAR CURRICULO
        </Link>
      </button>
    </>
  );
};

export default Main;
