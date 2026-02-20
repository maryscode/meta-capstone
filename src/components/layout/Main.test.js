import {initializeTimes, updateTimes} from './Main';

test('Initialize function returns available times', () => {
    const resultFn = initializeTimes();
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
    const timeFn = updateTimes([],
        {
            type: "DATE_CHANGED",
            payload: "2026-02-27"
        }
    );
    expect(timeFn).toEqual([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ]);
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