import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Calls userSubmit with booking data when form is submitted', () => {
    const mockSubmit = jest.fn();

    render(
    <BookingForm
        rsvpData={{
            date: '',
            time: '',
            guestCount: '',
            occasion: ''
        }}
        availableTimes={['17:00', '18:00']}
        userSubmit={mockSubmit}
        onDateChange={jest.fn()}
    />
);

    // Able to enter Date
    const date = screen.getByLabelText(/Choose date/i);
    fireEvent.change(date, { target: { value: '2028-02-28' } })

    // Enter Time
    const time = screen.getByLabelText(/Choose time/i);
    fireEvent.change(time, { target: { value: '18:00' } })

    // Enter Guest Count
    const guests = screen.getByLabelText(/Number of guests/i);
    fireEvent.change(guests, { target: { value: 1 } })

    // Enter Occasion
    const occasion = screen.getByLabelText(/occasion/i);
    fireEvent.change(occasion, { target: { value: 'Birthday' } })

    // Can submit
    const submitButton = screen.getByRole("button", {name: /reserve a table/i})
    fireEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledWith(
        {
            date: '2028-02-28',
            time: '18:00',
            guestCount: 1,
            occasion: 'Birthday'
        }
    );

})