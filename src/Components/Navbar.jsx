import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function MyNavbar() {
  const styles = {
    unselected: { color: "rgba(24, 23, 23, 0.801)" },
    selected: { color: "white", backgroundColor: "#003b59" },
  };

  return (
    <Navbar bg="light" expand="md" variant="light">
      <Navbar.Brand as={NavLink} exact to="/">
        <img
          src="/images/logo.gif"
          alt="a spaceship"
          style={{ width: "40px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="nav-items" />
      <Navbar.Collapse id="nav-items">
        <Nav variant="pills">
          <Nav.Link
            as={NavLink}
            to="/"
            exact
            style={styles.unselected}
            activeStyle={styles.selected}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/flights"
            exact
            style={styles.unselected}
            activeStyle={styles.selected}
          >
            <span className="nav-item">Flights</span>
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/about"
            exact
            style={styles.unselected}
            activeStyle={styles.selected}
          >
            <span className="nav-item">About</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
