import React, { useState } from "react";
import API from "../../API/api.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function BookingForm({ availableTimes, dispatch, onBook }) {
  const { fetchAPI } = API;
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOcassion, setSelectedOcassion] = useState("");
  const [totalGUest, setTotalGuest] = useState(0);

  //creating validation schema object for form validation

  const formSchema = Yup.object({
    Date: Yup.date().required("Date is required."),
    Time: Yup.string().required("Time is required."),
    guest: Yup.number("Guest must be a number.")
      .required("Guest is required")
      .min(1, "guest must be more than one."),
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
    dispatch({
      type: "BOOK_TIME",
      payload: { date: selectedDate, time: selectedTime },
    });

    alert("success !");
  };

  return (
    <div>
      <Formik
        validationSchema={formSchema}
        initialValues={initialValue}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <div>
              <label htmlFor="Date">Date</label>
              <Field
                type="Date"
                id="Date"
                name="Date"
                onChange={(e) => {
                  formik.handleChange(e);
                  handleDateClick(e.target.value);
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
              />
              <ErrorMessage name="guest" component={"div"} className="error" />
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
              >
                <option value={"birthday"}>Birthday</option>
                <option value={"anniversary"}>Anniversary</option>
              </Field>
            </div>

            <input
              type="button"
              value="Make Your reservation"
              onClick={() => formik.handleSubmit()}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
