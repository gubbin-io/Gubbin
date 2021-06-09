import React from "react";
import useStyles from "./style";
import { Form, Button } from "react-bootstrap";
import { EyeFill, GridFill, PeopleFill } from "react-bootstrap-icons";

export interface SideBarProp {}

const SideBar: React.FC<SideBarProp> = () => {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <Form.Group controlId="formSearchBar">
        <Form.Control
          className={classes.searchBar}
          type="text"
          placeholder="Search..."
        />
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
  );
};

export default SideBar;
