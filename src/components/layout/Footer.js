import { Link } from "react-router-dom";
import logo from '../../assets/img/lemondessert.jpg';
export default function Footer() {
    return (
    <footer>
        <div className='container'>
            <img src={logo} alt="" />
            <div>
                <h4>Doormat Navigation</h4>
                <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><Link to="/order">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                </nav>
            </div>
            <div>
                <h4>Contact</h4>
                <p>
                123 Address Way<br />
                Chicago, Il 11222
                </p>
                <p>123-456-7890</p>
                <p>contact@littlelemon.com</p>
            </div>
            <div>
                <h4>Social Media Links</h4>
                <nav>
                    <ul>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Youtube</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer> 
    )
}