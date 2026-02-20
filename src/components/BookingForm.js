import {useState} from 'react';
import * as Yup from 'yup';

const bookingSchema = Yup.object({
    firstName: Yup.string().required("Enter First Name"),
    lastName: Yup.string().required("Enter Last Name"),
    email: Yup.string().email("Invalid Email").required("Enter Email"),
    date: Yup.string().required("Please select a date"),
    time: Yup.string().required("Please select a time"),
    guestCount: Yup.number().min(1).max(10).required("Please select guest number between 1-10"),
    occasion: Yup.string().required()
})

const reservationSchema = bookingSchema.pick([
  "date",
  "time",
  "guestCount",
  "occasion"
]);

export default function BookingForm({availableTimes, onDateChange, onSuccess, submitForm}) {
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [email, setEmail] = useState('johndoe@test.com');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guestCount, setGuestCount] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [errors, setErrors] = useState(false);
    const [errorFname, setErrorFname] = useState(false);
    const [errorLname, setErrorLname] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [showContact, setShowContact] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            firstName,
            lastName,
            email,
            date,
            time,
            guestCount,
            occasion
        };

        try {
            await bookingSchema.validate(formData, { abortEarly: false });

            setErrors({}); // clear errors

            onSuccess(true);
            submitForm(formData);

            // Reset form
            setDate('');
            setTime('17:00');
            setGuestCount(1);
            setOccasion('Birthday');
            setFirstName('John');
            setLastName('Doe');
            setEmail('johndoe@test.com');
            setShowContact(false);

        } catch (validationError) {
            const formattedErrors = {};

            validationError.inner.forEach(err => {
            formattedErrors[err.path] = err.message;
            });

            setErrors(formattedErrors);
        }
    };
    const today = new Date().toISOString().split("T")[0]

    const handleNext = async () => {
        const stepData = {
            date,
            time,
            guestCount,
            occasion
        };
        try { await reservationSchema.validate(stepData, { abortEarly: false });
            setErrors({});
            setShowContact(true);

        } catch (validationError) {
            const formattedErrors = {};

            validationError.inner.forEach(err => {
                formattedErrors[err.path] = err.message;
            });

            setErrors(formattedErrors);
        }
    }

    return (
        <>

            <h1>Book Now</h1>
                <div className='formStyles'>
                    <form onSubmit={handleSubmit}>
                        {!showContact && (
                            <>
                                <h2>Reservation</h2>
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
                                    {errors.date && <span role="alert" className="error">{errors.date}</span>}
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

                                <div><a role="button" className="button" onClick={handleNext}>Next</a></div>
                            </>
                        )}

                    {showContact && (
                        <>
                            <h2>Contact Info</h2>
                            <div>
                                <label htmlFor="firstname">First Name</label>
                                <input value={firstName} type="text" placeholder="" id="firstname" onChange={
                                    (e) => {setFirstName(e.target.value)}
                                }
                                />
                                {errors.firstName && <span role="alert" className='error'>{errors.firstName}</span>}
                            </div>
                            <div>
                                <label htmlFor="lastname">Last Name</label>
                                <input value={lastName} type="text" placeholder="" id="lastname" onChange={e => setLastName(e.target.value)} />
                                {errors.lastName && <span role="alert" className='error'>{errors.lastName}</span>}
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input value={email} type="email" placeholder="" id="email" onChange={e => setEmail(e.target.value)} />
                                {errors.email && <span role="alert" className='error'>{errors.email}</span>}
                            </div>
                            <div className='button-container'>
                                <input type="button" value="back" className='button' onClick={() => { setShowContact(false)}} />
                                <input type="submit" value="Reserve a Table" className='button' />
                            </div>
                        </>
                    )}
                    </form>
                </div>
        </>
    )
}