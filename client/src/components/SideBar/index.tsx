import React from "react";
import useStyles from "./style";
import { Col, Form, Button } from "react-bootstrap";
import { useTheme } from "react-jss";
import { EyeFill, GridFill, PeopleFill } from "react-bootstrap-icons";

export interface SideBarProp {}

const SideBar: React.FC<SideBarProp> = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <Col md={3} lg={2} xs={12} className={classes.sidebarContainer}>
      <div className={classes.sidebar}>
        <Form.Group controlId="formSearchBar">
          <Form.Control type="text" placeholder="Search..." />
        </Form.Group>
        <hr />
        <Button className={classes.button}>
          <EyeFill className={classes.icon} size={20} />
          Discover
        </Button>
        <Button className={classes.button}>
          <GridFill className={classes.icon} size={20} />
          Categories
        </Button>
        <Button className={classes.button}>
          <PeopleFill className={classes.icon} size={20} />
          My Clubs
        </Button>
      </div>
    </Col>
  );
};

export default SideBar;
