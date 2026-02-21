
import BookingForm from  '../BookingForm';
import Testimonials from '../Testimonials';

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
                            showConfirmation={setRsvpConfirmation}
                        />
                </div>
            </section>
            <Testimonials />
        </>
    )
}