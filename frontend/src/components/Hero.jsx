import React from "react";
import ReserveATableBtn from "../reusable component/ReserveATableBtn";
import heroICON from "./../assets/hero_icon.png";

function Hero() {
  const headingStyle = {
    fontFamily: "Kadwa",
    color: "#F4CE15",
    fontSize: "2rem",
  };

  const paragraphStyle = {
    color: "gray",
  };
  const sectionStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5rem",
    backgroundColor: "#3F3F3F",
  };

  return (
    <section style={sectionStyle}>
      <div style={{ flex: "1" }}>
        <h1 style={headingStyle}>LITTLE LEMON</h1>
        <p style={paragraphStyle}>chicago</p>
        <p style={{ ...paragraphStyle, color: "white" }}>
          family-owned spot known for its fresh, Mediterranean-inspired dishes
          with a zesty citrus twist
        </p>
        <ReserveATableBtn />
      </div>

      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <img src={heroICON} alt="hero icon" width={400} />
      </div>
    </section>
  );
}

export default Hero;
