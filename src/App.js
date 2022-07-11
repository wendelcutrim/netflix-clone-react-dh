import "./netflix.css";
import Logo from "./assets/images/logo.png";
import Motivo1 from "./assets/images/motivo-1.png";
import Motivo2 from "./assets/images/motivo-2.png";
import Button from "./components/Button";
import Divisor from "./components/Divisor";
import SectionMotivo from "./components/SectionMotivo";
import MOTIVOS from "./constants/motivos";

/* function App(){
  const nome = "Wendel";
  const titulo = "Teste";
  const idade = 16;
  return (
    <div>
      <header>
        {titulo}
        {idade >= 18 ? "Maior" : "Menor"}
      </header>
      <main>
        <h1 classNameName="vermelho">{nome}</h1>
        <img src={Logo} />
        <hr />
      </main>
    </div>
  )
} */

function App() {
  const idioma = "EN";
  return (
   <div>
      <header>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div id="login">
          <select id="idioma">
            <option value="PT">Português</option>
            <option value="ING">Ingles</option>
          </select>
          <Button variante="alert" text="Login" />
          {/* <button>Entrar</button> */}
        </div>
      </header>

      <section id="banner">
        <h1>
          Filmes, séries e muito <br />
          mais. Sem limites.
        </h1>
        <h2>Assista onde quiser. Cancele quando quiser.</h2>
        <p>
          Pronto para assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </p>
        <div>
          <input type="email" placeholder="Email" />
          <Button variante="success" text="Vamos lá" />
          {/* <button>Vamos Lá</button> */}
        </div>
      </section>

      <Divisor />
      <SectionMotivo 
        title={MOTIVOS[idioma].ONE.TITLE}
        description={MOTIVOS[idioma].ONE.DESCRIPTION}
        image={Motivo1}
        altImage="Imagem 1"
      />

      <Divisor />
      <SectionMotivo 
        title={MOTIVOS[idioma].ONE.TITLE}
        description={MOTIVOS[idioma].ONE.DESCRIPTION}
        image={Motivo2}
        altImage="Imagem 2"
        alterna={true}
      />
      <Divisor />

      <SectionMotivo 
        title={MOTIVOS[idioma].ONE.TITLE}
        description={MOTIVOS[idioma].ONE.DESCRIPTION}
        image={Motivo1}
        altImage="Imagem 1"
      />

      <hr className="divisor" />
      <SectionMotivo 
        title={MOTIVOS[idioma].ONE.TITLE}
        description={MOTIVOS[idioma].ONE.DESCRIPTION}
        image={Motivo1}
        altImage="Imagem 2"
        alterna={true}
      />
      <Divisor />
   </div>
  );
}

export default App;
