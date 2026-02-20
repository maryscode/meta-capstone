import Nav from  './Nav';


export default function Header() {
    return (
        <header>
            <div className='container'>
                <a href="#"><img src="/Logo.svg" alt="Little Lemon Logo" width="200" height="54" /></a>
                <Nav />
            </div>
        </header>
    )
}