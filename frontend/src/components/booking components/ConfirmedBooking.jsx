import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ConfirmedBooking() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <button
          style={{
            position: "fixed",
            top: ".3rem",
            left: ".3rem",
            margin: ".5rem",
            border: "none",
            padding: "1rem 1rem",
            backgroundColor: "#CDAB01",
            color: "white",
            borderRadius: ".3rem",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          Home page
        </button>
        <p
          style={{
            border: "1px solid green",
            borderLeft: "7px solid green",
            padding: "1rem 2rem",
            color: "green",
            borderRadius: ".5rem",
            marginTop: ".5rem",
          }}
        >
          You have successfully reserved a table!
        </p>
      </div>
    </div>
  );
}

export default ConfirmedBooking;
