import { useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import BookingPage from "./components/booking components/BookingPage";
import API from "./API/api.js";

function App() {
  // Action Types for the reducer
  const UPDATE_TIMES = "UPDATE_TIMES"; // Action for updating available times
  const BOOK_TIME = "BOOK_TIME"; // Action for booking a specific time

  // Reducer function to handle state updates
  function reducer(state, action) {
    switch (action.type) {
      case UPDATE_TIMES: // Handle updating available times
        const { date, times } = action.payload; // Destructure the date and times from action.payload
        const bookedTimesForDate = state.bookedTimes[date] || []; // Get booked times for the specific date, or an empty array if none are booked
        return {
          ...state, // Spread the current state to keep the other parts of the state unchanged
          availableTimes: times.filter(
            (time) => !bookedTimesForDate.includes(time) // Filter out times that are already booked for the selected date
          ),
        };
      case BOOK_TIME: // Handle booking a specific time
        const { date: bookDate, time } = action.payload; // Destructure the date and time from action.payload
        return {
          ...state, // Spread the current state to keep the other parts of the state unchanged
          bookedTimes: {
            ...state.bookedTimes, // Spread the current bookedTimes object to preserve existing bookings
            [bookDate]: [...(state.bookedTimes[bookDate] || []), time], // Add the new booked time to the array for the specific date
          },
          availableTimes: state.availableTimes.filter((t) => t !== time), // Remove the booked time from availableTimes
        };
      default:
        return state; // Return the unchanged state if the action type doesn't match
    }
  }

  function reducing(state, action) {
    switch (action.type) {
      case "UPDATE_TIMES":
        const { date, times } = action.payload;
        const isScheduledExist = state.bookedTimes[date] || [];

        return {
          ...state,
          availableTimes: times.filter(
            (item) => !item.includes(isScheduledExist)
          ),
        };

      case "BOOK_TIME":
        const { date: bookedDate, time: bookedTime } = action.payload;

        return {
          ...state,
          bookedTimes: {
            ...state.bookedTimes,
            [bookedDate]: [
              ...(state.bookedTimes[bookedDate] || []),
              bookedTime,
            ],
          },

          availableTimes: state.availableTimes.filter(
            (item) => item !== bookedTime
          ),
        };

      default:
        return state;
    }
  }

  const { fetchAPI } = API; // Destructure fetchAPI from the API object

  // Initialize state with an empty array for availableTimes and an object for bookedTimes
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
  }, []); // Empty dependency array means this runs once on component mount

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
              availableTimes={state.availableTimes} // Pass available times as a prop to BookingPage
              onBook={handleBooking} // Pass the booking handler as a prop to BookingPage
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
