import React from "react";
import useStyles from "./style";
import { Container, Navbar } from "react-bootstrap";

export interface TopBarProp {}

const TopBar: React.FC<TopBarProp> = () => {
  const classes = useStyles();

  return (
    <Navbar sticky="top" expand="lg" variant="light" className={classes.navbar}>
      <Container fluid className={classes.container}>
        <Navbar.Brand href="/" className={classes.brand}>
          <img src="./brand-icon.svg" className={classes.icon} alt="Logo" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default TopBar;
