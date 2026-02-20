import {useState} from 'react';
import BookingForm from  '../BookingForm';
import Rating from  '../Rating';

export const CancelConfirmation = ({showRsvp, showCancel, userSubmit}) => {
    const handleCancel = () => {
        showRsvp(false)
        showCancel(false)
        userSubmit({
            date: '',
            time: '17:00',
            guestCount: 1,
            occasion: 'Birthday'
        })
    }
    const handleKeep = () => {
        showRsvp(true)
        showCancel(false)
    }
    return (
        <div className='cancel'>
            <h3>Are you sure you want to cancel?</h3>
            <div className='button-container'>
                <button onClick={handleKeep}>No, keep reservation</button>
                <button onClick={handleCancel}>Yes, Cancel this Reservation</button>
            </div>
        </div>
    )
}

export const Confirmation = ({rsvpData, showRsvp, showCancel}) => {
    const handleCancel = () => {
        showRsvp(false);
        showCancel(true);
    }
    return (
        <div className='success'>
            <h3>RSVP Confirmed!</h3>
            <p>Your table has been booked:</p>
            <p><strong>Date: </strong>{rsvpData.date}<br />
            <strong>Time:</strong> {rsvpData.time}<br />
            <strong>Guests:</strong> {rsvpData.guestCount}<br />
            <strong>Occasion:</strong> {rsvpData.occasion}</p>

            <div className='button-container'>
                <button onClick={handleCancel}>Cancel this Reservation</button>
            </div>
        </div>
    )
}

export default function Bookingpage({rsvpData, userSubmit, availableTimes,onDateChange, setRsvpConfirmation, rsvpConfirmation}) {
    
    const [cancelConfirmation, setCancelConfirmation] = useState(false)
    return (
        <>
            <section>
                <div className='container'>
                    <div>
                        <h1>Reservations</h1>
                        <p>Little Lemon is available for reservations. Book your experience today.</p>
                    </div>
                    {cancelConfirmation && <CancelConfirmation showRsvp={setRsvpConfirmation} showCancel={setCancelConfirmation} userSubmit={userSubmit} />}

                    {rsvpConfirmation && <Confirmation showRsvp={setRsvpConfirmation} showCancel={setCancelConfirmation} rsvpData={rsvpData} />}

                    <BookingForm
                        userSubmit={userSubmit}
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