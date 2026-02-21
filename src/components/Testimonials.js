import Rating from  './Rating';
export default function Testimonials() {
    return (
        <section id="testimonials">
                <div className='container'>
                    <h2>Testimonials</h2>
                    <div className="section-grid">
                        <Rating title="Excellent service" name="Joe">
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum tincidunt lectus ac eleifend. In sodales lacinia facilisis. Donec ipsum neque, </p>
                        </Rating>
                        <Rating title="Delicious" name="Sallly">
                            <p>⭐⭐⭐⭐</p>
                            <p>Consectetur adipiscing elit. Cras dictum tincidunt lectus ac eleifend. In sodales lacinia facilisis. Donec ipsum neque, </p>
                        </Rating>
                        <Rating title="Wonderful" name="Pam">
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum tincidunt lectus ac eleifend. In sodales lacinia facilisis. Donec ipsum neque, </p>
                        </Rating>
                        <Rating title="Tasty" name="Don">
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum tincidunt lectus ac eleifend. In sodales lacinia facilisis. Donec ipsum neque, </p>
                        </Rating>
                    </div>
                </div>
            </section>
    )
}