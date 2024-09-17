import React from "react";

function FooterNavigation() {
  const doormatNavigation = [
    "Doormat",
    "navigation",
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Order online",
    "Log in",
  ];

  const contacts = [
    "Street 1 San francisco",
    "  littlelemon@gmail.com",
    "  047-6381302",
  ];
  const socialMediaInfo = [
    "littlelemon@facebook.com",
    "littlelemon@x.com",
    "@mylittlelemon@instagram",
  ];

  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <img
        src="https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="lemon png"
        width={150}
        height={250}
        style={{
          // position: "relative",
          // top: "6rem",
          // left: "3rem",
          objectFit: "cover",
        }}
      />
      <div>
        <ul style={{ listStyle: "none" }}>
          {doormatNavigation.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h5>Contacts</h5>
        <ul style={{ marginTop: "1rem" }}>
          {contacts.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h5>Social Media</h5>
        <ul style={{ marginTop: "1rem" }}>
          {socialMediaInfo.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default FooterNavigation;
