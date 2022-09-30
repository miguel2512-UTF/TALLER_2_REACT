import './Servicios.css';
import Card from './Card';

function Servicios() {
  return (
    <div class="servicios">
        <h2>Razones por las que disfrutarás quedarte con nosotros</h2>
        <div class="servicios-content">
            <Card color={true} icono='fa-solid fa-bell-concierge'/>
            <Card color={false} icono='fa-solid fa-bed'/>
            <Card color={true} icono='fa-solid fa-wifi'/>
            <Card color={false} icono='fa-solid fa-dumbbell'/>
        </div>   
    </div>
  );
}

export default Servicios;
