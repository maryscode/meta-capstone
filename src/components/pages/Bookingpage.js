
import BookingForm from  '../BookingForm';
import Rating from  '../Rating';

export default function Bookingpage({availableTimes,onDateChange, setRsvpConfirmation, submitForm}) {
    return (
        <>
            <section>
                <div className='container'>
                    <div>
                        <h1>Reservations</h1>
                        <p>Little Lemon is available for reservations. Book your experience today.</p>
                    </div>
                        <BookingForm
                            submitForm={submitForm}
                            // userSubmit={userSubmit}
                            availableTimes={availableTimes}
                            onDateChange={onDateChange}
                            onSuccess={setRsvpConfirmation}
                        />
                </div>
            </section>
            <section id="testimonials">
                <div className='container'>
                    <h2>Testimonials</h2>
                    <div className="section-grid">
                        <Rating />
                        <Rating />
                        <Rating />
                        <Rating />
                    </div>
                </div>
            </section>
        </>
    )
}