import { Link } from "react-router-dom";
import greekSalad from '../assets/img/greeksalad.jpg';
import bruschetta from '../assets/img/bruschetta.png';
import apps from '../assets/img/apps.jpg';

export default function Specials(){
    return (
        <section id="specials">
                <div className='container'>
                    <div className="section-title">
                        <h2>Specials</h2>
                    </div>
                    <div className="section-grid">
                        <div className='card' role="card">
                            <img src={greekSalad} alt="Greek Salad" />
                            <div>
                                <h3></h3>
                                <span>$12.99</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo lobortis turpis, eget pharetra sem vulputate in.</p>
                            <Link to="/order"><button className="button">Order a delivery</button></Link>
                        </div>
                        <div className='card' role="card">
                            <img src={bruschetta} alt="Bruschetta" />
                            <div>
                                <h3></h3>
                                <span>$12.99</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo lobortis turpis, eget pharetra sem vulputate in.</p>
                            <Link to="/order"><button className="button">Order a delivery</button></Link>
                        </div>
                        <div className='card' role="card">
                            <img src={apps} alt="Lemon Dessert" />
                            <div>
                                <h3></h3>
                                <span>$12.99</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo lobortis turpis, eget pharetra sem vulputate in.</p>
                            <Link to="/order"><button className="button">Order a delivery</button></Link>
                        </div>
                    </div>
                </div>
            </section>
    )
}