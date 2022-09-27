import logo from './Hotelia negro vertical.svg';
import './Desc.css';

function Desc() {
  return (
    <section class="desc">
        <p>Estamos ubicados en el barrio La Cabrera al norte de Bogotá, en un contexto de lujo donde interactúan los negocios, el ocio y el descanso, gracias a su estratégica ubicación rodeada de bancos, restaurantes de alta cocina, centros comerciales, almacenes de lujo, y emblemáticos parques para aprovechar la naturaleza entre la ciudad camina y hacer un poco de deporte al aire libre están el parque del Virrey y El Parque de la 93. Además de nuestro exclusivo diseño, ponemos a tu disposición uan oferta gastronómica tan sotisficada como saludable a base de productos locales, cargados de lo mejor de la tradición colombiana.</p>
        <img src={logo} alt=""/>
    </section>
  );
}

export default Desc;
