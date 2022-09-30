import logo from './Hotelia horizontal blanco.svg';
import "./Header.css";
import { Link } from "react-router-dom";

function Header(){
    return(
        <nav>
            <div class="logo">
                <img src={logo} alt="" />
                <i class="fa-solid fa-bars"></i>
            </div>
            <div class="menu">
                <a>Inicio</a>
                <a>Ubicanos</a>
                <a>Opiniones</a>
                <hr class="menu-hr" noshade="" />
                <Link to="/login"><a id="iniciar-sesion"><i class="fa-solid fa-user"></i> Iniciar Sesión</a></Link>
            </div>
        </nav>
    );
}

export default Header;