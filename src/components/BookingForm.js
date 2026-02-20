import {useState} from 'react';



export default function BookingForm({userSubmit, availableTimes, onDateChange, onSuccess}) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guestCount, setGuestCount] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [error, setError] = useState(false);
 


    const handleSubmit = (e) => {
        e.preventDefault();
        if (date.length <= 0) {
            setError(true)
            return;
        } else {
            setError(false)
        }
        userSubmit({
            date: date,
            time: time,
            guestCount: guestCount,
            occasion: occasion
        })
        onSuccess(true);
        setDate('');
        setTime('17:00');
        setGuestCount(1);
        setOccasion('Birthday');
    }
    const today = new Date().toISOString().split("T")[0]


    return (
        <>
            <h1>Book Now</h1>
                <div className='formStyles'>
                    <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="res-date">Choose date</label>
                        <input
                            type="date"
                            id="res-date"
                            min={today}
                            value={date}
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
                    <div>
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                            {availableTimes?.map(timeslot => <option key={timeslot} value={timeslot}>{timeslot}</option> )}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="guests">Number of guests</label>
                        <input value={guestCount} type="number" placeholder="1" min="1" max="10" id="guests" onChange={e => setGuestCount(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                            <option>None</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                    <input type="submit" value="Reserve a Table" className='button' />
                    </form>
                </div>
        </>
    )
}