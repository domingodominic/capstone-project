import React, { useState } from "react";
import API from "../../API/api.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function BookingForm({ availableTimes, dispatch, onBook }) {
  const { fetchAPI, submitAPI } = API;
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedOcassion, setSelectedOcassion] = useState("");
  const [totalGUest, setTotalGuest] = useState(0);

  //to navigate from router dom
  const navigate = useNavigate();

  //creating validation schema object for form validation
  const formSchema = Yup.object({
    Date: Yup.date().required("Date is required."),
    Time: Yup.string().required("Time is required."),
    guest: Yup.number("Guest must be a number.")
      .required("Guest is required")
      .min(2, "guest must be more than one."),
    occassion: Yup.string().required("occassion is required"),
  });

  const initialValue = {
    Date: "",
    Time: "",
    guest: 0,
    occassion: "",
  };

  const handleDateClick = (value) => {
    const convertedDateValue = new Date(value);

    setSelectedDate(convertedDateValue);
    const times = fetchAPI(convertedDateValue);

    dispatch({
      type: "UPDATE_TIMES",
      payload: { times, date: convertedDateValue },
    });
  };

  const handleSubmit = (values) => {
    setLoading(true);
    setTimeout(() => {
      dispatch({
        type: "BOOK_TIME",
        payload: { date: selectedDate, time: selectedTime },
      });

      const isSuccessful = submitAPI(values);

      if (isSuccessful) {
        console.log("values of appointment data ", values);
        navigate("/confirmedBooking", { state: { appointmentData: values } });
      }
    }, 3000);
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid gold",
    borderRadius: "4px",
    boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
    transition: "border-color 0.2s ease-in-out",
    outline: "none",
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <FormTitle />
      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Formik
          validationSchema={formSchema}
          initialValues={initialValue}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form style={{ display: "grid", gap: "20px", width: "90%" }}>
              <h1
                style={{
                  textAlign: "center",
                  fontFamily: "kadwa",
                  fontWeight: "bolder",
                  color: "#F4CE15",
                }}
              >
                Let's book a table
              </h1>
              <div>
                <label htmlFor="Date">Date</label>
                <Field
                  type="date"
                  id="Date"
                  name="Date"
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleDateClick(e.target.value);
                  }}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#007bff"; // Change border color on focus
                    e.target.style.boxShadow = "0 0 5px rgba(0, 123, 255, 0.5)"; // Add shadow on focus
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "gold"; // Revert border color on blur
                    e.target.style.boxShadow =
                      "inset 0 1px 3px rgba(0, 0, 0, 0.1)"; // Revert shadow on blur
                  }}
                />

                <ErrorMessage name="Date" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="Time">Booking Time</label>
                <Field
                  as="select"
                  id="Time"
                  name="Time"
                  onChange={(e) => {
                    formik.handleChange(e);
                    setSelectedTime(e.target.value);
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#007bff"; // Change border color on focus
                    e.target.style.boxShadow = "0 0 5px rgba(0, 123, 255, 0.5)"; // Add shadow on focus
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "gold"; // Revert border color on blur
                    e.target.style.boxShadow =
                      "inset 0 1px 3px rgba(0, 0, 0, 0.1)"; // Revert shadow on blur
                  }}
                  style={inputStyle}
                >
                  <option value={""}>Select A time</option>
                  {availableTimes?.map((time, i) => (
                    <option value={time} key={i}>
                      {time}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="Time" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="guest">Number of Guest</label>
                <Field
                  type="number"
                  id="guest"
                  name="guest"
                  onChange={(e) => {
                    formik.handleChange(e);
                    setTotalGuest(e.target.value);
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#007bff"; // Change border color on focus
                    e.target.style.boxShadow = "0 0 5px rgba(0, 123, 255, 0.5)"; // Add shadow on focus
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "gold"; // Revert border color on blur
                    e.target.style.boxShadow =
                      "inset 0 1px 3px rgba(0, 0, 0, 0.1)"; // Revert shadow on blur
                  }}
                  style={inputStyle}
                />
                <ErrorMessage
                  name="guest"
                  component={"div"}
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="occassion">Occassion</label>
                <Field
                  as="select"
                  id="occassion"
                  name="occassion"
                  onChange={(e) => {
                    formik.handleChange(e);
                    setSelectedOcassion(e.target.value);
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "gold"; // Revert border color on blur
                    e.target.style.boxShadow =
                      "inset 0 1px 3px rgba(0, 0, 0, 0.1)"; // Revert shadow on blur
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#007bff"; // Change border color on focus
                    e.target.style.boxShadow = "0 0 5px rgba(0, 123, 255, 0.5)"; // Add shadow on focus
                  }}
                  style={inputStyle}
                >
                  <option>Select an occassion</option>
                  <option value={"birthday"}>Birthday</option>
                  <option value={"anniversary"}>Anniversary</option>
                </Field>
                <ErrorMessage
                  name="occassion"
                  component={"div"}
                  className="error"
                />
              </div>

              <input
                type="button"
                value={loading ? "Booking..." : "Book Now"}
                className="book--btn"
                onClick={() => formik.handleSubmit()}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

const FormTitle = () => {
  return (
    <div
      style={{
        flex: "1",
        backgroundColor: "#3F3F3F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <img src={require("./../../assets/hero_icon.png")} width={500} />
        <h1
          style={{
            textAlign: "center",
            fontFamily: "kadwa",
            fontWeight: "bolder",
            color: "#F4CE15",
          }}
        >
          Let's book a table
        </h1>
      </div>
    </div>
  );
};
