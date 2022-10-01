import "./CardReviews.css";

function CardReviews({icono, nombre, user}){
    return(
        <div class="card-opinion">
            <img src={user} alt=""/>
            <div class="opinion-user">
                <h5>{nombre}</h5>
                <div class="puntuacion">
                    <i className={icono}></i>
                    <i className={icono}></i>
                    <i className={icono}></i>
                    <i className={icono}></i>
                    <i className={icono}></i>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore voluptate cumque officiis recusandae sint nobis ipsum, dicta harum blanditiis.</p>
        </div>
    )
}

export default CardReviews;