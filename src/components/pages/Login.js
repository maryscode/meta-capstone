
import restaurant from '../../assets/img/restaurant.jpg';

export default function Login() {
    return (
        <>

            <section id="about" style={{'minHeight': '50vh'}}>
                <div className='container'>
                    <div>
                        <h1>Login</h1>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>
                    <img src={restaurant} alt="Little Lemon Restaurant" width={500} height={334} />
                </div>
            </section>

        </>
    )
}