import {useState} from 'react';
import { BookingConfirmation, CancelConfirmation } from '../Confirmation';
import { Link } from 'react-router-dom';
import Testimonials from '../Testimonials';

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
            <Testimonials />
        </>
    )
}