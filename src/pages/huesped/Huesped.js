import "./Huesped.css";
import campana from "./hotelia campana.svg";
import { Link } from "react-router-dom";

function Huesped() {
    return(
        <><section class="add-huesped">
            <div class="header">
                <h1><img src={campana} alt="" />otelia</h1>
                <h3>Eres más que bienvenido</h3>
                <h4>Un lugar en tu corazón</h4>
            </div>
            <div class="add-content">
                <div class="form">
                    <h1>Regístrate</h1>
                    <form action="">
                        <div class="form-body">
                            <div class="form-body-1">
                                <label for="">Tipo de documento</label>
                                <select name="" id="">
                                    <option value="" selected>Escoja una opción</option>
                                </select>
                                <label for="">Nombres</label>
                                <input type="text" />
                                <label for="">Fecha nacimiento</label>
                                <input type="date" />
                                <label for="">Email</label>
                                <input type="text" />
                                <label for="">País de origen</label>
                                <select name="" id=""></select>
                                <label for="">Contraseña</label>
                                <input type="text" />
                            </div>
                            <div class="form-body-2">
                                <label for="">Número de documento</label>
                                <input type="text" />
                                <label for="">Apellidos</label>
                                <input type="text" />
                                <label for="">Género</label>
                                <div class="form-genero">
                                    <input type="radio" /><p>Mujer</p>
                                    <input type="radio" /><p>Hombre</p>
                                    <input type="radio" /><p>Otro</p>
                                </div>
                                <label for="">Teléfono de contacto</label>
                                <input type="text" />
                                <label for="">Foto</label>
                                <div class="form-file"><input type="file" /></div>
                                <label for="">Confirmar contraseña</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div class="form-footer">
                            <a href="#miModal"><p>Acepto Términos y Condiciones</p></a>
                            <Link to="/login"><button><a>Ingresar</a></button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        
        <div id="miModal" class="modal">
            <div class="modal-contenido">
                <a href="#">X</a>
                <h2>Mi primer Modal</h2>
                <p>Este es mi primera ventana modal sin utilizar JavaScript.</p>
            </div>  
        </div></>
    );
}

export default Huesped;