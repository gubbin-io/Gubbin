import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Review } from "../../../../constants/types";
import ReviewEditor from "../ReviewEditor";
import ReviewViewer from "../ReviewViewer";
import useStyles from "./style";
import { PenFill, CardText } from "react-bootstrap-icons";

export interface ReviewsProp {
  clubId: string;
  reviews: Review[];
  clubColor: string;
}

const ClubReviews: React.FC<ReviewsProp> = ({ clubId, reviews, clubColor }) => {
  const classes = useStyles({ clubColor });
  const [showViewer, setShowViewer] = useState(true);
  return (
    <>
      <span className={classes.sectionHeading}>{`Ratings & Reviews`}</span>
      <hr className={classes.divider} />
      <div className={classes.something}>
        <Button
          className={classes.longButton}
          onClick={() => {
            setShowViewer(!showViewer);
          }}
        >
          {showViewer ? (
            <PenFill className={classes.icon} size={20} />
          ) : (
            <CardText className={classes.icon} size={20} />
          )}
          {showViewer ? `Post Review` : `View Reviews`}
        </Button>
      </div>

      {showViewer ? (
        <ReviewViewer reviews={reviews} />
      ) : (
        <ReviewEditor
          clubId={clubId}
          clubColor={clubColor}
          showReviews={() => {
            setShowViewer(true);
          }}
        />
      )}
    </>
  );
};

export default ClubReviews;
