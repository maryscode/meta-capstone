// import Hero from  './Hero';
import Rating from  '../Rating';
import greekSalad from '../../assets/img/greeksalad.jpg';
import bruschetta from '../../assets/img/bruschetta.png';
import apps from '../../assets/img/apps.jpg';

export default function Menu() {
    return (
        <>

        <section id="specials">
            <div className='container'>
                <div className="section-title">
                    <h1>Menu</h1>
                    <a href="#" className='button'>Online Menu</a>
                </div>
                <div className="section-grid">
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
        </>
    )
}