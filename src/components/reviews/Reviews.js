import user from './user.png';
import './Reviews.css';
import CardReviews from './CardReviews';

function Reviews(){
    return(
        <section class="reviews">
        <h1>Nuestros usuarios dicen...</h1>
        <div class="reviews-content">
            <CardReviews icono="fa-solid fa-star" nombre="Diego Rodriguez" user={user} />
            <CardReviews icono="fa-solid fa-star" nombre="Diana Garcia" user={user} />
            <CardReviews icono="fa-solid fa-star" nombre="Diego Rodriguez" user={user} />
        </div> 
    </section>
    );
}

export default Reviews;