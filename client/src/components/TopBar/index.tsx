import React from "react";
import useStyles from "./style";
import { Container, Navbar } from "react-bootstrap";
import { useTheme } from "react-jss";

export interface TopBarProp {}

const TopBar: React.FC<TopBarProp> = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <Navbar sticky="top" expand="lg" variant="light" className={classes.navbar}>
      <Container fluid className={classes.container}>
        <Navbar.Brand href="#home" className={classes.brand}>
          <img
            src="./brand-icon.svg"
            className={classes.brandIcon}
            alt="Logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default TopBar;
