import './Card.css';

function Card({color,icono}) {
    return(
        <div className={color ?"service service-blue" :"service"}>
            <i className={icono}></i>
            <p>lorem ipsum dolor</p>
        </div>
    )
}

export default Card;