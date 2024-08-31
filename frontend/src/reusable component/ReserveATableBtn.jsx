import React from "react";

function ReserveATableBtn({ item }) {
  const buttonStyle = {
    backgroundColor: "#EAC304",
    padding: ".7rem 2rem",
    color: "white",
    border: "none",
    borderRadius: ".2rem",
    marginTop: "1rem",
    cursor: "pointer",
  };
  return (
    <>
      <button
        style={buttonStyle}
        onClick={() => {
          alert(item);
        }}
      >
        Reserve a table
      </button>
    </>
  );
}

export default ReserveATableBtn;
