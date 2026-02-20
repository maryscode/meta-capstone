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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
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