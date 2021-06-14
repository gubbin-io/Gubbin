import React from "react";
import useStyles from "./style";
import { Form, Button } from "react-bootstrap";
import { BookHalf, EyeFill, GridFill, PeopleFill } from "react-bootstrap-icons";
import { useHistory, useLocation } from "react-router-dom";

export interface SideBarProp {
  searchString: string;
  setSearchString: (search: string) => void;
  showManageTab: boolean;
}

const SideBar: React.FC<SideBarProp> = ({
  searchString,
  setSearchString,
  showManageTab,
}) => {
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
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
        />
      </Form.Group>
      <hr />
      <Button
        className={classes.button}
        active={location.pathname === "/discover"}
        onClick={() => {
          setSearchString("");
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
          setSearchString("");
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
          setSearchString("");
          history.push("/myclubs");
        }}
      >
        <PeopleFill className={classes.icon} size={20} />
        My Clubs
      </Button>
      {showManageTab && (
        <Button
          className={classes.button}
          active={location.pathname === "/manage"}
          onClick={() => {
            setSearchString("");
            history.push("/manage");
          }}
        >
          <BookHalf className={classes.icon} size={20} />
          Manage Clubs
        </Button>
      )}
    </div>
  );
};

export default SideBar;
