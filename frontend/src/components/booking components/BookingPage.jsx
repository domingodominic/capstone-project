import React from "react";
import BookingForm from "./BookingForm";

export default function BookingPage({ availableTimes, dispatch, onBook }) {
  return (
    <div>
      <h1>This is the booking page</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onBook={onBook}
      />
    </div>
  );
}
