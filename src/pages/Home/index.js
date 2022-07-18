import "./netflix.css";
import Motivo1 from "../../assets/images/motivo-1.png";
import Motivo2 from "../../assets/images/motivo-2.png";
import Button from "../../components/Button";
import Divisor from "../../components/Divisor";
import SectionMotivo from "../../components/SectionMotivo";
import MOTIVOS from "../../constants/motivos";
import Card from "../../components/Card";
import Header from "../../components/Header"

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

function Home() {
  const idioma = "EN";
  return (
   <div>
      <Header />
      <section id="banner">
        <h1>
          Filmes, séries e muito <br />
          mais. Sem limites.
        </h1>
        {/* <Card>
          <h1>Teste</h1>
          <Button variante="alert" text="Oi sergio" />
        </Card> */}
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

export default Home;
