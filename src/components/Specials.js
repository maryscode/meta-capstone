import { Link } from "react-router-dom";
import greekSalad from '../assets/img/greeksalad.jpg';
import bruschetta from '../assets/img/bruschetta.png';
import apps from '../assets/img/apps.jpg';

export default function Specials({showMenuBtn}){
    return (
        <section id="specials">
                <div className='container'>
                    <div className="section-title">
                        <h2>Specials</h2>
                        {showMenuBtn && <Link to="/menu"><button className="button">Online Menu</button></Link> }
                    </div>
                    <div className="section-grid">
                        <div className='card'>
                            <img src={greekSalad} alt="Greek Salad" />
                            <div>
                                <h3>Greek Salad</h3>
                                <span>$12.99</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo lobortis turpis, eget pharetra sem vulputate in.</p>
                            <Link to="/order"><button className="button">Order a delivery</button></Link>
                        </div>
                        <div className='card'>
                            <img src={bruschetta} alt="Bruschetta" />
                            <div>
                                <h3>Bruschetta</h3>
                                <span>$12.99</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo lobortis turpis, eget pharetra sem vulputate in.</p>
                            <Link to="/order"><button className="button">Order a delivery</button></Link>
                        </div>
                        <div className='card'>
                            <img src={apps} alt="Appetizers" />
                            <div>
                                <h3>Appetizers</h3>
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