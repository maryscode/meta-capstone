import {useState} from 'react';
import { Link } from "react-router-dom";
import menuIcon from "../../assets/img/hamburger_icon.svg";
import closeIcon from "../../assets/img/close_icon.svg";
export default function Nav(){
    const [toggleMenu, setToggleMenu] = useState(false)
    const handleClick = () => {
        setToggleMenu(prev => !prev)
    }

    return (
        <div className="menu">
            <button aria-label="Toggle Mobile Menu" className="mobileIcon" onClick={handleClick}>
                { toggleMenu ?
                  <img src={closeIcon} alt="Close mobile hamburger menu icon" width={40} height={40} />
                : <img src={menuIcon} alt="Mobile hamburger icon" width={40} height={40} />
                }
            </button>
            <nav className={toggleMenu ? 'show': ''} aria-label="Main navigation">
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
    )
}