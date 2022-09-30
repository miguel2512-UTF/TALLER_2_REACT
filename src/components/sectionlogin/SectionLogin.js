import './SectionLogin.css';
import logo from "./Hotelia horizontal negro.svg";
import { Link } from "react-router-dom";

function sectionLogin() {
  return (
    <section class="section-login">
        <div class="form-login">
            <div class="form-logo">
                <img src={logo} alt=""/>
            </div>
            <div class="form-user">
                <i class="fa-solid fa-user"></i>
            </div>
            <form action="">
                <label for="">Usuario</label>
                <input type="text" />
                <label for="">Contraseña</label>
                <input type="password" />
                <button type="submit"><Link to="/dashboard"><a>Ingresar</a></Link></button>
                <p>¿No tienes una cuenta? <Link to="/huesped"><a href="huesped-add.html">Registrate aquí.</a></Link></p>
            </form>
        </div>
    </section>
  );
}

export default sectionLogin;