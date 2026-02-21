import { Link } from 'react-router-dom';
import Nav from  './Nav';

export default function Header() {
    return (
        <header>
            <div className='container'>
                <Link to="/"><img src="/Logo.svg" alt="Little Lemon Logo" width="200" height="54" /></Link>
                <Nav />
            </div>
        </header>
    )
}