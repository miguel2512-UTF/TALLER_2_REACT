import './Menu.css';
import campana from "./hotelia campana.svg";
import user from "./user-profile.png";

function Menu() {
  return (
    <div class="menu-dashboard">
            <div class="menu-logo">
                <h1><img src={campana} alt=""/>otelia</h1>
                <div class="user-name">
                    <h2>Angie Vargas</h2>
                    <h3>angievargas2@gmail.com</h3>
                </div>
                <img class="logo-hot" src={campana} alt=""/>
                <img class="user-profile" src={user} alt=""/>
            </div>
            <div class="menu-option">
                <div class="options">
                    <div class="option">
                    <i class="fa-solid fa-bed"></i>
                    <p>Habitaciones</p>
                </div>
                <div class="option option-2">
                    <i class="fa-solid fa-bell-concierge"></i>
                    <p>Reservas</p>
                </div>
                <div class="option">
                    <i class="fa-solid fa-bed"></i>
                    <p>Habitaciones</p>
                </div>
                <div class="option option-2">
                    <i class="fa-solid fa-bell-concierge"></i>
                    <p>Habitaciones</p>
                </div>
                </div>
                
                <div class="cerrar-sesion">
                    <a href="../index.html"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                    <a href="../index.html"><p>Cerrar sesión</p></a>
                </div>
            </div>
        </div>
  );
}

export default Menu;