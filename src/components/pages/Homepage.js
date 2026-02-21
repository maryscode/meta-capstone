// import { Link } from "react-router-dom";
import Hero from  '../Hero';
import Testimonials from  '../Testimonials';
import Specials from  '../Specials';

import restaurant from '../../assets/img/restaurant.jpg';

export default function Homepage() {
    return (
        <>
            <Hero />

            <Specials showMenuBtn={true} />

            <Testimonials />

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