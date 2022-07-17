import "./style.css"
import Logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header>
            <div>
                <img src={Logo} alt="Logo" />
                <Link to="/about"><Button text="About"/></Link>
                <Link to="/movies"><Button text="Movies"/></Link>
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