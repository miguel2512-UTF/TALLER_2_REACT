import './Footer.css';

function Footer(){
    return(
        <footer>
            <div class="footer-part">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est atque distinctio ipsum impedit illo obcaecati repellat quam earum corrupti quas natus porro, ea doloremque, minus ipsam quo ab quod debitis?</p>
                <div class="redes">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
            <hr class="menu-hr" noshade=""/>
            <div class="footer-part">
                <p><i class="fa-solid fa-location-dot"></i>Avenida carrera 8, #12A-42, Bogotá DC, Colombia</p>
                <p id="telefono"><i class="fa-solid fa-phone"></i>+57 601 4567899</p>
            </div>
            <hr class="menu-hr" noshade=""/>
            <div class="footer-part-1">
                <p>Políticas de privacidad</p>
                <p>Políticas de privacidad</p>
            </div>
        </footer>
    );
    
}

export default Footer;