import { act } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";

test("Test if all fields are required", async () => {

  render(<BookingForm onDateChange={jest.fn()}/>);

    expect(screen.getByLabelText(/choose date/i)).toHaveAttribute("required")
    expect(screen.getByLabelText(/Choose time/i)).toHaveAttribute("required")
    expect(screen.getByLabelText(/Number of guests/i)).toHaveAttribute("required")

    await userEvent.type(
      screen.getByLabelText(/choose date/i),
      "2028-02-28"
    );

    await act(async () => {
      await userEvent.click(
        screen.getByRole("button", { name: /next/i })
      );
    });

const firstNameInput = await screen.findByLabelText(/first name/i);
const lastNameInput = await screen.findByLabelText(/last name/i);
const emailInput = await screen.findByLabelText(/email/i);

   expect(firstNameInput).toHaveAttribute("required")
    expect(lastNameInput).toHaveAttribute("required")
    expect(emailInput).toHaveAttribute("required")
});

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  expect(screen.getByText("Book Now")).toBeInTheDocument();
});

test("Calls submitForm with booking data when form is submitted", async () => {
  const mockSubmit = jest.fn();
  const mockShowConfirmation = jest.fn();

  render(
    <BookingForm
      submitForm={mockSubmit}
      availableTimes={["17:00", "18:00"]}
      onDateChange={jest.fn()}
      showConfirmation={mockShowConfirmation}
    />
  );

  // Step 1
  await userEvent.type(
    screen.getByLabelText(/choose date/i),
    "2028-02-28"
  );

  await userEvent.selectOptions(
    screen.getByLabelText(/choose time/i),
    "18:00"
  );

  const guestsInput = screen.getByLabelText(/number of guests/i);
  await userEvent.clear(guestsInput);
  await userEvent.type(guestsInput, "1");

  await userEvent.selectOptions(
    screen.getByLabelText(/occasion/i),
    "Birthday"
  );

//   await userEvent.click(
//     screen.getByRole("button", { name: /next/i })
//   );

await act(async () => {
  await userEvent.click(
    screen.getByRole("button", { name: /next/i })
  );
});

  // Wait for Step 2 to render (flush async validation)
  const firstNameInput = await screen.findByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);

  await userEvent.type(firstNameInput, "John");
  await userEvent.type(lastNameInput, "Doe");
  await userEvent.type(emailInput, "test@test.com");

await act(async () => {
  await userEvent.click(
    screen.getByRole("button", { name: /reserve a table/i })
  );
});

  await waitFor(() => {
    expect(mockSubmit).toHaveBeenCalledWith({
      date: "2028-02-28",
      time: "18:00",
      guestCount: 1,
      occasion: "Birthday",
      firstName: "John",
      lastName: "Doe",
      email: "test@test.com"
    });
  });
});