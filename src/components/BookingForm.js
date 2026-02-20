import {useState} from 'react';

export default function BookingForm({rsvpData, userSubmit, availableTimes, onDateChange}) {


    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guestCount, setGuestCount] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [showConfirmCancel, setShowConfirmCancel] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (date.length <= 0) {
            setError(true)
            return;
        } else {
            setError(false)
        }
        setSuccess(true)
        userSubmit({
            date: date,
            time: time,
            guestCount: guestCount,
            occasion: occasion
        })
        setDate('');
        setTime('17:00');
        setGuestCount(1);
        setOccasion('Birthday');
    }
    const today = new Date().toISOString().split("T")[0]

    const handleCancel = () => {
        setSuccess(false);
        setShowConfirmCancel(false);
        // remove rsvp from userSubmit api
    }
    return (
        <>


        {success ? (
            <div className='success'>

                {showConfirmCancel ? (
                    <div className='success'>
                        <h3>Are you sure you want to cancel?</h3>
                        <div className='button-container'>
                            <button onClick={(e) => setShowConfirmCancel(false)}>No, keep reservation</button>
                            <button onClick={handleCancel}>Yes, Cancel this Reservation</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <h3>RSVP Confirmed!</h3>
                        <p>Your table has been booked:</p>
                        <p><strong>Date: </strong>{rsvpData.date}<br />
                        <strong>Time:</strong> {rsvpData.time}<br />
                        <strong>Guests:</strong> {rsvpData.guestCount}<br />
                        <strong>Occasion:</strong> {rsvpData.occasion}</p>

                        <div className='button-container'>
                            <button onClick={(e) => setShowConfirmCancel(true)}>Cancel this Reservation</button>
                        </div>
                    </>
                )}
            </div>
        ) : (<>
            <h1>Book Now</h1>
                <form onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
                <label htmlFor="res-date">Choose date</label>
                <div>
                    <input
                        type="date"
                        id="res-date"
                        min={today}
                        onChange={e => {
                            onDateChange({
                                type: "DATE_CHANGED",
                                payload: e.target.value
                            })
                            setDate(e.target.value)
                        }}
                    />
                    {error && <div role="alert" className="error">Please select a date</div>}
                </div>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                    {availableTimes?.map(timeslot => <option key={timeslot} value={timeslot}>{timeslot}</option> )}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input value={guestCount} type="number" placeholder="1" min="1" max="10" id="guests" onChange={e => setGuestCount(e.target.value)} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Reserve a Table" className='button' />
                </form>
            </>)}

        </>
    )
}