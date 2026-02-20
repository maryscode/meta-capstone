import {useState} from 'react';
import { BookingConfirmation, CancelConfirmation } from '../Confirmation';
import Rating from  '../Rating';
import { Link } from 'react-router-dom';

export default function ConfirmedBooking({rsvpData, setRsvpData, setRsvpConfirmation, rsvpConfirmation}) {

    const [cancelConfirmation, setCancelConfirmation] = useState(false)
    return (
        <>
            <section>
                <div className='container'>

                    {cancelConfirmation && <CancelConfirmation showRsvp={setRsvpConfirmation} showCancel={setCancelConfirmation} setRsvpData={setRsvpData} />}

                    {rsvpConfirmation && <BookingConfirmation showRsvp={setRsvpConfirmation} showCancel={setCancelConfirmation} rsvpData={rsvpData} />}

                    {!rsvpConfirmation && !cancelConfirmation &&
                        <>
                            <h1>Reservations</h1>
                            <p>You have no upcoming reservations</p>
                            <Link to="/booking"><button>Book a table</button></Link>
                        </>
                    }
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