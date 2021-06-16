import React from "react";
import { Nav } from "react-bootstrap";
import {
  InfoCircleFill,
  Globe2,
  QuestionCircleFill,
  ExclamationSquareFill,
} from "react-bootstrap-icons";
import useStyles from "./style";

export interface PageSideBarProp {
  clubColor: string;
}

const PageSideBar: React.FC<PageSideBarProp> = ({ clubColor }) => {
  const classes = useStyles({ clubColor });

  return (
    <div className={classes.sidebar}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link className={classes.tabButton} eventKey="general">
            <InfoCircleFill size={20} className={classes.icon} />
            General
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={classes.tabButton} eventKey="social">
            <Globe2 size={20} className={classes.icon} />
            {`Social Media`}
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link className={classes.tabButton} eventKey="questions">
            <QuestionCircleFill size={20} className={classes.icon} />
            {`Q&A`}
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link className={classes.tabButton} eventKey="update">
            <ExclamationSquareFill size={20} className={classes.icon} />
            {`Updates`}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default PageSideBar;
