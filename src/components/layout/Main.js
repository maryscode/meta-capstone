import { Routes, Route } from "react-router-dom";
import {useState, useReducer} from 'react';
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import Bookingpage from "../pages/Bookingpage";

export const updateTimes = (state,action) => {
    if(action.type === "DATE_CHANGED"){
        return initializeTimes();
    }
    return state
}

export const initializeTimes = () => {
    return (
        [
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00"
        ]
    )
}

export default function Main() {
    const [rsvpData, setRsvpData] = useState({
        date: '',
        time: '17:00',
        guestCount: 1,
        occasion: 'Birthday'
    })

    const [rsvpConfirmation, setRsvpConfirmation] = useState(false)
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <main role="main">
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/booking" element={<Bookingpage 
                    rsvpData={rsvpData}
                    userSubmit={setRsvpData}
                    availableTimes={availableTimes}
                    onDateChange={dispatch}
                    rsvpConfirmation={rsvpConfirmation}
                    setRsvpConfirmation={setRsvpConfirmation}
                />}></Route>
                <Route path="/order" element={<Order/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </main>
    )
}