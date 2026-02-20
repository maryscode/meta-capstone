// import Hero from  './Hero';
import Rating from  '../Rating';

import restaurant from '../../assets/img/restaurant.jpg';

export default function Order() {
    return (
        <>

            <section>
                <div className='container'>
                    <div>
                        <h1>Order</h1>
                        <p className='subtitle'>Chicago</p>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>
                    <img src={restaurant} alt="Little Lemon Restaurant" width={500} height={334} />
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