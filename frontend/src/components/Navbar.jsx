import React from "react";
import Logo_icon from "./../assets/logo_icon.png";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    padding: ".5rem 0rem",
    alignItems: "center",
    backgroundColor: "#F4CE15",
  };
  return (
    <nav style={navStyle}>
      <Logo />
      <Navigation />
    </nav>
  );
}

export default Navbar;

const Navigation = () => {
  const navItems = [
    { name: "HOME", link: "/home" },
    { name: "ABOUT", link: "/about" },
    { name: "MENU", link: "/menu" },
    { name: "RESERVATIONS", link: "/reservations" },
    { name: "ORDER ONLINE", LINK: "/order_online" },
    { name: "LOG IN", link: "/login" },
  ];

  const navStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    fontFamily: "poppins",
    listStyle: "none",
    fontSize: "1rem",
    fontWeight: "400",
    cursor: "pointer",
  };

  return (
    <ul style={navStyle}>
      {navItems.map((item, i) => (
        <li key={i}>{item.name}</li>
      ))}
    </ul>
  );
};

const Logo = () => {
  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
    backgroundColor: "black",
    color: "#F4CE15",
    padding: ".5rem .5rem",
    borderRadius: ".3rem",
  };
  const logoTypeface = { fontFamily: "Kadwa", fontSize: ".8rem" };
  return (
    <div style={logoStyle}>
      <h1 style={logoTypeface}>LITTLE</h1>
      <img src={Logo_icon} alt="logo icon" width={25} height={25} />
      <h1 style={logoTypeface}>LEMON</h1>
    </div>
  );
};
