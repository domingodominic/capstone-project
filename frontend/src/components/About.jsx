import React from "react";

function About() {
  const sectionStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",

    padding: "1rem",
    height: "370px",
    backgroundColor: "#3F3F3F",
  };
  return (
    <section style={sectionStyle}>
      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "4rem",
        }}
      >
        <div>
          <h1 style={{ fontFamily: "Kadwa", color: "#cdab01" }}>
            LITTLE LEMON
          </h1>
          <p style={{ color: "#C7C7C7" }}>chicago</p>

          <p style={{ color: "#C7C7C7", marginTop: "2rem" }}>
            family-owned spot known for its fresh, Mediterranean-inspired dishes
            with a zesty citrus twist
          </p>
        </div>
      </div>
      <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
        <img
          src="https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="lemon png"
          width={150}
          height={250}
          style={{
            position: "relative",
            top: "6rem",
            left: "3rem",
            objectFit: "cover",
          }}
        />

        <img
          src="    https://images.pexels.com/photos/129574/pexels-photo-129574.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="lemon png"
          width={150}
          height={250}
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}

export default About;
