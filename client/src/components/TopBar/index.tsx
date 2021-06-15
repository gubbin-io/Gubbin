import React from "react";
import useStyles from "./style";
import { Container, Dropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileToggle from "./profile";
import { client } from "../../constants/routes";

export interface TopBarProp {}

const TopBar: React.FC<TopBarProp> = () => {
  const classes = useStyles();

  function handleSignOut() {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
    client.resetStore();
    // TODO: replace below with react router
    window.location.reload();
  }

  return (
    <Navbar sticky="top" expand="lg" variant="light" className={classes.navbar}>
      <Container fluid className={classes.container}>
        <Navbar.Brand as={Link} to="/" className={classes.brand}>
          <img
            src="/images/brand-icon.svg"
            className={classes.icon}
            alt="Logo"
          />
        </Navbar.Brand>

        <Dropdown>
          <Dropdown.Toggle as={ProfileToggle}></Dropdown.Toggle>

          <Dropdown.Menu align="right">
            <Dropdown.Item
              onClick={(e) => {
                e.preventDefault();
                handleSignOut();
              }}
            >
              Sign Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default TopBar;
