import { Routes, Route, useNavigate } from "react-router-dom";
import {useState, useReducer, useEffect} from 'react';
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import Bookingpage from "../pages/Bookingpage";
import ConfirmedBooking from "../pages/ConfirmedBooking";

export const updateTimes = (state, action) => {
    if (action.type === "DATE_CHANGED") {
        return window.fetchAPI(new Date(action.payload));
    }
    return state;
}

export const initializeTimes = () => {
    const today = new Date();
    return window.fetchAPI(today);
}


export const handleSubmitForm = (formData, navigate, setRsvpData) => {
    if (window.submitAPI(formData)){
        const rsvpJSONData = JSON.stringify(formData);
        localStorage.setItem("rsvpData", rsvpJSONData);
        setRsvpData(formData);
        navigate("/ConfirmedBooking");
    }
}

export default function Main() {
    const navigate = useNavigate();
    const [rsvpConfirmation, setRsvpConfirmation] = useState(false)
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const [rsvpData, setRsvpData] = useState({
        date: '',
        time: '17:00',
        guestCount: 1,
        occasion: 'Birthday',
        firstName: '',
        lastName: '',
        email: ''
    })

    const submitForm = (formData) => {
        handleSubmitForm(formData, navigate, setRsvpData);
    };

    useEffect(() => {
        const localRsvpData = localStorage.getItem('rsvpData')
        if (localRsvpData){
            const parsedRsvpData = JSON.parse(localRsvpData);
            setRsvpData(parsedRsvpData)
            setRsvpConfirmation(true)
        }
    }, [])

    return (
        <main role="main">
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/booking" element={<Bookingpage 
                    rsvpData={rsvpData}
                    availableTimes={availableTimes}
                    onDateChange={dispatch}
                    submitForm={submitForm}
                    setRsvpConfirmation={setRsvpConfirmation}
                />}></Route>
                <Route path="/confirmedbooking" element={<ConfirmedBooking
                    rsvpData={rsvpData}
                    setRsvpData={setRsvpData}
                    rsvpConfirmation={rsvpConfirmation}
                    setRsvpConfirmation={setRsvpConfirmation}
                />}></Route>
                <Route path="/order" element={<Order/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </main>
    )
}