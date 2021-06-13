import React from "react";
import { Nav } from "react-bootstrap";
import useStyles from "./style";
import StarBox from "../../../StarBox";

import {
  StarHalf,
  InfoCircleFill,
  QuestionCircleFill,
} from "react-bootstrap-icons";

export interface ClubBodyProp {
  numMembers: number;
  rating?: number;
  clubColor: string;
  numReviews: number;
}

const ClubBody: React.FC<ClubBodyProp> = ({
  numMembers,
  clubColor,
  rating,
  numReviews,
}) => {
  const classes = useStyles({ clubColor });

  return (
    <div className={classes.sidebar}>
      <div className={classes.statistics}>
        <div className={classes.ratingBox}>
          <span className={classes.smallText}>{numReviews} Reviews</span>
          <span className={classes.bigText}>
            {rating ? `${rating.toFixed(1)}` : `N/A`}
          </span>
          <StarBox score={rating || 0} />
        </div>
        <div className={classes.memberBox}>
          <span className={classes.smallText}>Last Year</span>
          <span className={classes.bigText}>{numMembers}</span>
          <span className={classes.mediumText}>members</span>
        </div>
      </div>
      {/* Vertical Tab Group */}
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link className={classes.tabButton} eventKey="about">
            <InfoCircleFill size={20} className={classes.icon} />
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={classes.tabButton} eventKey="questions">
            <QuestionCircleFill size={20} className={classes.icon} />
            {`Q&A`}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={classes.tabButton} eventKey="reviews">
            <StarHalf size={20} className={classes.icon} />
            {`Ratings & Reviews`}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default ClubBody;