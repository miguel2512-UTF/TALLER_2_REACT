import './Ubicanos.css';
import Iframe from 'react-iframe';

function Ubicanos() {
  return (
    <section class="ubicanos">
        <h2>Ubícanos</h2>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9644418817484!2d-74.07747275036509!3d4.600391896641519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7147877c9%3A0x378b95e9cbda0740!2sCra.%208%20%2312a-42%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1659026703410!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
        <h3>AVENIDA CARRERA 8, #12A-42, BOGOTÁ DC, COLOMBIA</h3>
        <p>+57 601 4567899</p>
    </section>
  );
}

export default Ubicanos;
