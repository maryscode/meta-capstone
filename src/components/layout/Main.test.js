import Main, {initializeTimes, updateTimes, handleSubmitForm} from './Main';
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

beforeEach(() => {
  window.fetchAPI = jest.fn(() => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]);
});

// Mock browser localStorage
beforeEach(() => {
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.getItem = jest.fn();
});

// Mock successful API
beforeEach(() => {
  window.submitAPI = jest.fn(() => true);
});

test('Initialize function returns available times', () => {
    const resultFn = initializeTimes();
    expect(window.fetchAPI).toHaveBeenCalled();
    expect(resultFn).toEqual([
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00"
            ]);
})

test('Times get updated when date changes', () => {
    window.fetchAPI = jest.fn(() => ["18:00", "19:00"]);
    const timeFn = updateTimes([],
        {
            type: "DATE_CHANGED",
            payload: "2026-02-27"
        }
    );
    expect(timeFn).toEqual(["18:00", "19:00"]);
})

test('updateTimes returns the same value that is provided in the state.', () => {
    const state = ['5pm', '6pm', '7pm']
    const timeFn = updateTimes(state,
        {
            type: "Unknown",
        }
    );
    expect(timeFn).toEqual(state);
})


test('handleSubmitForm stores data in localStorage', () => {
    const mockNavigate = jest.fn();
    const mockSetRsvpData = jest.fn();

    const fakeData = {
        date: "2028-02-28",
        time: "18:00",
        guestCount: 2,
        occasion: "Birthday",
        firstName: "John",
        lastName: "Doe",
        email: "test@test.com"
    };
    handleSubmitForm(fakeData, mockNavigate, mockSetRsvpData);

    expect(window.submitAPI).toHaveBeenCalledWith(fakeData);
    expect(localStorage.setItem).toHaveBeenCalledWith(
        "rsvpData",
        JSON.stringify(fakeData)
    );
    expect(mockSetRsvpData).toHaveBeenCalledWith(fakeData)

})

test("loads rsvpData from localStorage on mount", () => {
  const fakeData = {
    date: "2028-02-28",
    time: "18:00",
    guestCount: 2,
    occasion: "Birthday",
    firstName: "John",
    lastName: "Doe",
    email: "test@test.com"
  };
  render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  );
  expect(localStorage.getItem).toHaveBeenCalledWith("rsvpData");
});