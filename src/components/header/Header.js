import logo from './Hotelia horizontal blanco.svg';
import "./Header.css";

function Header(){
    return(
        <nav>
            <div class="logo">
                <img src={logo} alt="" />
                <i class="fa-solid fa-bars"></i>
            </div>
            <div class="menu">
                <a href="">Inicio</a>
                <a href="">Ubicanos</a>
                <a href="">Opiniones</a>
                <hr class="menu-hr" noshade="" />
                <a href="views/login.html" id="iniciar-sesion"><i class="fa-solid fa-user"></i> Iniciar Sesión</a>
            </div>
        </nav>
    );
}

export default Header;