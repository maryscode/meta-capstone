import BookingForm from  '../BookingForm';
import Rating from  '../Rating';

export default function Bookingpage({rsvpData, userSubmit, availableTimes,onDateChange}) {

    return (
        <>
            <section>
                <div className='container'>
                    <div>
                        <h1>Reservations</h1>
                        <p>Little Lemon is available for reservations. Book your experience today.</p>
                    </div>
                    <BookingForm
                        rsvpData={rsvpData}
                        userSubmit={userSubmit}
                        availableTimes={availableTimes}
                        onDateChange={onDateChange}

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