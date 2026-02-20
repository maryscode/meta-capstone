// import { Link } from "react-router-dom";
import Hero from  '../Hero';
import Rating from  '../Rating';
import greekSalad from '../../assets/img/greeksalad.jpg';
import bruschetta from '../../assets/img/bruschetta.png';
import apps from '../../assets/img/apps.jpg';
import restaurant from '../../assets/img/restaurant.jpg';

export default function Homepage() {
    return (
        <>
            <Hero />

            <section id="specials">
                <div className='container'>
                    <div class="section-title">
                        <h2>Specials</h2>
                        <a href="#" className='button'>Online Menu</a>
                    </div>
                    <div class="section-grid">
                        <div className='card' role="card">
                            <img src={greekSalad} alt="Greek Salad" />
                            <div>
                                <h3></h3>
                                <span>$12.99</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo lobortis turpis, eget pharetra sem vulputate in.</p>
                            <button>Order a delivery</button>
                        </div>
                        <div className='card' role="card">
                            <img src={bruschetta} alt="Bruschetta" />
                            <div>
                                <h3></h3>
                                <span>$12.99</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo lobortis turpis, eget pharetra sem vulputate in.</p>
                            <button>Order a delivery</button>
                        </div>
                        <div className='card' role="card">
                            <img src={apps} alt="Lemon Dessert" />
                            <div>
                                <h3></h3>
                                <span>$12.99</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo lobortis turpis, eget pharetra sem vulputate in.</p>
                            <button>Order a delivery</button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials">
                <div className='container'>
                    <h2>Testimonials</h2>
                    <div className="section-grid">
                        <Rating />
                        <Rating />
                        <Rating />
                        <Rating />
                    </div>
                </div>
            </section>

            <section id="about">
                <div className='container'>
                    <div>
                        <h2>Little Lemon</h2>
                        <p className='subtitle'>Chicago</p>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>
                    <img src={restaurant} alt="Little Lemon Restaurant" width={500} height={334} />
                </div>
            </section>

        </>
    )
}