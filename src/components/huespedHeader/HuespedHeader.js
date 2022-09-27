import "./HuespedHeader.css";
import campana from "./hotelia campana.svg";

function HuespedHeader(){
    return(
        <div class="header">
            <h1><img src={campana} alt=""/>otelia</h1>
            <h3>Eres más que bienvenido</h3>
            <h4>Un lugar en tu corazón</h4>
        </div>
    );
}

export default HuespedHeader;