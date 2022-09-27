import user from './user.png';
import './Reviews.css';

function Reviews(){
    return(
        <section class="reviews">
        <h1>Nuestros usuarios dicen...</h1>
        <div class="reviews-content">
            <div class="card-opinion">
                <img src={user} alt=""/>
                <div class="opinion-user">
                    <h5>Diego Rodriguez</h5>
                    <div class="puntuacion">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore voluptate cumque officiis recusandae sint nobis ipsum, dicta harum blanditiis.</p>
            </div>
            <div class="card-opinion">
                <img src={user} alt=""/>
                <div class="opinion-user">
                    <h5>Diana García</h5>
                    <div class="puntuacion">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore voluptate cumque officiis recusandae sint nobis ipsum, dicta harum blanditiis.</p>
            </div>
            <div class="card-opinion">
                <img src={user} alt=""/>
                <div class="opinion-user">
                    <h5>Diego Rodriguez</h5>
                    <div class="puntuacion">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore voluptate cumque officiis recusandae sint nobis ipsum, dicta harum blanditiis.</p>
            </div>
        </div> 
    </section>
    );
}

export default Reviews;