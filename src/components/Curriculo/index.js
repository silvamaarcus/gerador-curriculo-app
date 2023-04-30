import Dados from "../Dados";
import Experiencia from "../Experiencia";
import Formacao from "../Formacao";
import Habilidades from "../Habilidades";

const Curriculo = () => {
  return (
    <div className="container pagina">
      <div className="header">
        <div className="header-esq">
          <h1>Marcus Silva</h1>
          <h2>Desenvolvedor Front-End</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
            deleniti molestias labore praesentium unde architecto vel officia
            repudiandae hic reiciendis soluta autem possimus tempora adipisci
            voluptatem distinctio numquam excepturi porro.
          </p>
        </div>

        <div className="header-dir">
          <ul>
            <li>Belo Horizonte, MG</li>
            <li>+55 31 9 9700-3074</li>
            <li>devsilvamarcus@gmail.com</li>
            <li>linkedin.com/in/silvamaarcus</li>
            <li>github.com/silvamaarcus</li>
          </ul>
        </div>

        {/* <div className="pagina-maior-exp">
          <h4>Experiência</h4>

          <div>
            <span>
              <h3>Desenvolvedor Front-End |</h3>
              <h3>Freelancer</h3>
            </span>
            <span>
              <h3>Dez/2021 |</h3>
              <h3>Dez/2022</h3>
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              provident cupiditate voluptates! Enim placeat provident, at quam
              optio perferendis blanditiis tenetur laboriosam earum ut numquam
              laudantium? Sapiente vel impedit excepturi?
            </p>
          </div>

          <div>
            <span>
              <h3>Desenvolvedor Front-End |</h3>
              <h3>Freelancer</h3>
            </span>
            <span>
              <h3>Dez/2021 |</h3>
              <h3>Dez/2022</h3>
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              provident cupiditate voluptates! Enim placeat provident, at quam
              optio perferendis blanditiis tenetur laboriosam earum ut numquam
              laudantium? Sapiente vel impedit excepturi?
            </p>
          </div>

          <div>
            <span>
              <h3>Desenvolvedor Front-End |</h3>
              <h3>Freelancer</h3>
            </span>
            <span>
              <h3>Dez/2021 |</h3>
              <h3>Dez/2022</h3>
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              provident cupiditate voluptates! Enim placeat provident, at quam
              optio perferendis blanditiis tenetur laboriosam earum ut numquam
              laudantium? Sapiente vel impedit excepturi?
            </p>
          </div>

        </div> */}

        {/* <div className="pagina-maior-hab">
          <h4>Habilidades</h4>
          <ul>
            <li>lllllllllll</li>
            <li>lllllllllll</li>
            <li>lllllllllll</li>
            <li>lllllllllll</li>
            <li>lllllllllll</li>
            <li>lllllllllll</li>
          </ul>
        </div> */}
      </div>

      <div className="main">
        <div className="main-esq">
          <h4>Experiência</h4>
          <div className="main-esq-exp">
            <span>
              <h3>Desenvolvedor Front-End</h3>
              <p>| Freelancer</p>
            </span>
            <span>
              <p>Dez/2021</p>
              <p>- Dez/2022</p>
            </span>
            <p className="exp-resumo">
              Atuo criando interfaces gráficas dinâmicas e atraentes usando CSS
              e SASS. Meus projetos apresentam funcionalidades interessantes em
              JavaScript, demonstrando minha habilidade técnica e criatividade.
              Valorizo o conhecimento básico de UI e UX design, o que me ajuda a
              criar interfaces intuitivas e agradáveis aos usuários, atendendo a
              vários dispositivos.
            </p>
          </div>

          <div className="main-esq-exp">
            <span>
              <h3>Desenvolvedor Front-End</h3>
              <p>| Freelancer</p>
            </span>
            <span>
              <p>Dez/2021</p>
              <p>- Dez/2022</p>
            </span>
            <p className="exp-resumo">
              Atuo criando interfaces gráficas dinâmicas e atraentes usando CSS
              e SASS. Meus projetos apresentam funcionalidades interessantes em
              JavaScript, demonstrando minha habilidade técnica e criatividade.
              Valorizo o conhecimento básico de UI e UX design, o que me ajuda a
              criar interfaces intuitivas e agradáveis aos usuários, atendendo a
              vários dispositivos.
            </p>
          </div>

          <div className="main-esq-exp">
            <span>
              <h3>Desenvolvedor Front-End</h3>
              <p>| Freelancer</p>
            </span>
            <span>
              <p>Dez/2021</p>
              <p>- Dez/2022</p>
            </span>
            <p className="exp-resumo">
              Atuo criando interfaces gráficas dinâmicas e atraentes usando CSS
              e SASS. Meus projetos apresentam funcionalidades interessantes em
              JavaScript, demonstrando minha habilidade técnica e criatividade.
              Valorizo o conhecimento básico de UI e UX design, o que me ajuda a
              criar interfaces intuitivas e agradáveis aos usuários, atendendo a
              vários dispositivos.
            </p>
          </div>
        </div>

        <div className="main-dir">
          <h4>Educação</h4>
          <ul>
            <li>Centro Universitário UNA</li>
            <li>Análise e Des. Sistemas</li>
            <li>Dezembro 2021</li>
            <li>Belo Horizonte, MG</li>
          </ul>
          <h4>Outros</h4>
          <ul>
            <li>Centro Universitário UNA</li>
            <li>Análise e Des. Sistemas</li>
            <li>Dezembro 2021</li>
          </ul>
        </div>
      </div>

      <div className="habilidades">
      <h4>Habilidades</h4>
        <ul>
          <li>Experiência em HTML, CSS e JavaScript.</li>
          <li>Consumo em API, manipulação do JSON.</li>
          <li>Familiaridade com React.</li>
          <li>Conhecimento em pré-processadores CSS como SASS.</li>
          <li>Capacidade de trabalhar com ferramentas como Git e Figma.</li>
        </ul>
      </div>
    </div>
  );
};

export default Curriculo;
