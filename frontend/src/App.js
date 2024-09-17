import { useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import BookingPage from "./components/booking components/BookingPage";
import API from "./API/api.js";
import TestHooks from "./components/hooks/TestHooks";
import ConfirmedBooking from "./components/booking components/ConfirmedBooking";

function App() {
  // Action Types for the reducer
  const UPDATE_TIMES = "UPDATE_TIMES"; // Action for updating available times
  const BOOK_TIME = "BOOK_TIME"; // Action for thebooking a specific time

  // Reducer function to handle state updates
  function reducer(state, action) {
    switch (action.type) {
      case UPDATE_TIMES: // Handle updating available times
        const { date, times } = action.payload; // just estructuring the date and times from action.payload
        const bookedTimesForDate = state.bookedTimes[date] || []; // Get booked times for the specific date, or an empty array if none are booked
        return {
          ...state,
          availableTimes: times.filter(
            (time) => !bookedTimesForDate.includes(time) // Filter out times that are already booked for the selected date
          ),
        };
      case BOOK_TIME: // Handle booking a specific time
        const { date: bookDate, time } = action.payload; // Destructuring the date and time from action.payload
        return {
          ...state,
          bookedTimes: {
            ...state.bookedTimes, //keep the current bookedtimes
            [bookDate]: [...(state.bookedTimes[bookDate] || []), time], // Add the new booked time to the array for the specific date
          },
          availableTimes: state.availableTimes.filter((t) => t !== time), // Remove the booked time from availableTimes
        };
      default:
        return state; // Return the unchanged state if the action type doesn't match
    }
  }

  const { fetchAPI } = API; //since I can't connect with the API I just created a file for that and destrcuting it

  // Initializing the state with an empty array for availableTimes and an object for bookedTimes
  const [state, dispatch] = useReducer(reducer, {
    availableTimes: [], // Initially, no available times
    bookedTimes: {}, // Initially, no booked times
  });

  useEffect(() => {
    console.log("booked times ", state.bookedTimes);
  }, [state.availableTimes, state.bookedTimes]);

  // Use useEffect to fetch and update available times when component mounts
  useEffect(() => {
    const today = new Date(); // Create a new Date object for today
    const times = fetchAPI(today); // Fetch available times for today using fetchAPI

    // Dispatch an action to update the state with fetched times for today
    dispatch({
      type: UPDATE_TIMES,
      payload: { date: today.toISOString().split("T")[0], times },
    });
  }, []);

  // Function to handle booking a time
  const handleBooking = (date, time) => {
    // Dispatch an action to book a time for a specific date
    dispatch({ type: BOOK_TIME, payload: { date, time } });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />{" "}
        {/* Route for the main page */}
        <Route
          path="/booking"
          element={
            <BookingPage
              dispatch={dispatch}
              availableTimes={state.availableTimes}
              onBook={handleBooking}
            />
          }
        />
        <Route path="/confirmedBooking" element={<ConfirmedBooking />} />
        <Route path="/tasks" element={<TestHooks />} />
      </Routes>
    </>
  );
}

export default App;
