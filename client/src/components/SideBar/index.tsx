import React from "react";
import useStyles from "./style";
import { Col, Container, Navbar } from "react-bootstrap";
import { useTheme } from "react-jss";

export interface SideBarProp {}

const SideBar: React.FC<SideBarProp> = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <Col md={3} lg={2} xs={12} className={classes.sidebarContainer}>
      <div className={classes.sidebar} />
    </Col>
  );
};

export default SideBar;
