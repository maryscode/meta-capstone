import { Link } from "react-router-dom";
import featuredFood from '../assets/img/lemondessert.jpg';

export default function Hero() {
    return  (
        <section id="hero">
                <div className='container'>
                    <div>
                        <h1>Little Lemon</h1>
                        <p className="subtitle">Chicago</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo lobortis turpis, eget pharetra sem vulputate in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vel molestie risus. Vivamus posuere magna non egestas malesuada.</p>
                        <Link to="/booking">
                            <button>Reserve a table</button>
                        </Link>
                    </div>
                    <img src={featuredFood} alt="Featured food" />
                </div>
            </section>
    )
}