export const BookingConfirmation = ({rsvpData, showRsvp, showCancel}) => {
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
            <strong>First Name:</strong> {rsvpData.firstName}<br />
            <strong>Last Name:</strong> {rsvpData.lastName}<br />
            <strong>Email:</strong> {rsvpData.email}<br />
            <div className='button-container'>
                <button onClick={handleCancel}>Cancel this Reservation</button>
            </div>
        </div>
    )
}

export const CancelConfirmation = ({showRsvp, showCancel, setRsvpData}) => {
    const handleCancel = () => {
        showRsvp(false)
        showCancel(false)
        setRsvpData({
            date: '',
            time: '17:00',
            guestCount: 1,
            occasion: 'Birthday',
            firstName: '',
            lastName: '',
            email: ''
        })
        const localRsvpData = localStorage.getItem('rsvpData')
        if (localRsvpData){
            localStorage.removeItem('rsvpData')
        }
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