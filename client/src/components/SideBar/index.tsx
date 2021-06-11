import React from "react";
import useStyles from "./style";
import { Form, Button } from "react-bootstrap";
import { EyeFill, GridFill, PeopleFill } from "react-bootstrap-icons";
import { useHistory, useLocation } from "react-router-dom";

export interface SideBarProp {}

const SideBar: React.FC<SideBarProp> = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

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
      <Button
        className={classes.button}
        active={location.pathname === "/discover"}
        onClick={() => {
          history.push("/discover");
        }}
      >
        <EyeFill className={classes.icon} size={20} />
        Discover
      </Button>
      <Button
        className={classes.button}
        active={location.pathname === "/categories"}
        onClick={() => {
          history.push("/categories");
        }}
      >
        <GridFill className={classes.icon} size={20} />
        Categories
      </Button>
      <Button
        className={classes.button}
        active={location.pathname === "/myclubs"}
        onClick={() => {
          history.push("/myclubs");
        }}
      >
        <PeopleFill className={classes.icon} size={20} />
        My Clubs
      </Button>
    </div>
  );
};

export default SideBar;
