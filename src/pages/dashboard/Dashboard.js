import "./Dashboard.css";
import campana from "./hotelia campana.svg";
import userprofile from "./user-profile.png";
import user from "./user.png";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <section class="dashboard">
        <div class="menu-dashboard">
            <div class="menu-logo">
                <h1><img src={campana} alt="" />otelia</h1>
                <div class="user-name">
                    <h2>Angie Vargas</h2>
                    <h3>angievargas2@gmail.com</h3>
                </div>
                <img class="logo-hot" src={campana} alt="" />
                <img class="user-profile" src={userprofile} alt="" />
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
                    <Link to="/"><a href="../index.html"><i class="fa-solid fa-arrow-right-from-bracket"></i></a></Link>
                    <Link to="/"><a href="../index.html"><p>Cerrar sesión</p></a></Link>
                </div>
            </div>
        </div>
        <div class="dashboard-content">
            <div class="content-dash">
                <div class="info-user">
                    <div class="section-foto">
                        <h1>Bienvenido, Angie Vargas</h1>
                        <img src={user} alt=""/>
                        <div class="foto-options">
                            <i class="fa-solid fa-file-arrow-up"></i>
                            <i class="fa-solid fa-upload"></i>
                            <i class="fa-solid fa-download"></i>
                        </div>
                        <button>Cambiar contraseña</button>  
                    </div>
                    <div class="form-usuario">
                        <h1>Bienvenido, Angie Vargas</h1>
                        <form action="">
                            <div class="form-info">
                                <div class="form-info-1">
                                    <label for="">Tipo de Documento</label>
                                    <input type="text" placeholder="Cédula de ciudadanía"/>
                                    <label for="">Nombres</label>
                                    <input type="text" placeholder="Angie Camila"/>
                                    <label for="">Fecha nacimiento</label>
                                    <input type="text" placeholder="10/08/1976"/>
                                    <label for="">Género</label>
                                    <input type="text"/>
                                    <label for="">Email</label>
                                    <input type="text" placeholder="angievargas2@gmail.com"/>
                                    <button>Actualizar</button>
                                </div>
                                <div class="form-info-2">
                                    <label for="">Número de Documento</label>
                                    <input type="text" placeholder="1025417456" />
                                    <label for="">Apellidos</label>
                                    <input type="text" placeholder="Vargas Pinzón"/>
                                    <label for="">País de origen</label>
                                    <input type="text" placeholder="Colombia"/>
                                    <label for="">Teléfono de contacto</label>
                                    <input type="text" placeholder="3135207460"/> 
                                    <button>Actualizar</button>
                                </div>
                            </div>
                            <div class="form-password">
                                <div class="form-password-1">
                                    <label for="">Contraseña</label>
                                    <input type="text" />
                                    <button>Cambiar</button>
                                </div>
                                <div class="form-password-2">
                                    <label for="">Confirmar contraseña</label>
                                    <input type="text" />
                                    <button>Cambiar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    </section>
  );
}

export default Dashboard;