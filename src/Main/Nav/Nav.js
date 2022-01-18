import React from "react";
import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navigation = () => {
  const navStyles = {
    height: "80px",
    width: "100vw",
    backgroundColor: "var(--tamarind)",
  };

  const linkStyles = {
    textDecoration: "none",
    fontSize: "25px",

    marginRight: "50px",
    color: "var(--butter)",
  };

  return (
    <div>
      <nav style={navStyles}>
        <Link to="/" style={linkStyles}>
          <img
            src={logo}
            style={{ height: "70px", position: "absolute", left: "15px", top: '3px'}}
          />
        </Link>
        <div style={{position: 'absolute', right: '10px', top: '10px'}}>
          <Link to="myvenues" style={linkStyles}>
            My Venues
          </Link>
          <Link to="/" style={linkStyles}>
            Home
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
