import "./style.css";
import Logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
import Button from "../../components/Button";

export default function Header() {
    return (
        <header>
            <div>
                <img src={Logo} alt="Logo" />
                <Link to="/about">Página sobre</Link>
                <a href="/about">Página Sobre com a</a>
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
    );
}