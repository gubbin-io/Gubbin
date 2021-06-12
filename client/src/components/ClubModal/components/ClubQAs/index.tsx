import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Review } from "../../../../constants/types";
import QAEditor from "./components/QAEditor";
import QAViewer from "./components/QAViewer";
import useStyles from "./style";
import { PenFill, CardText } from "react-bootstrap-icons";

export interface ClubQAsProp {
  clubId: string;
  reviews: Review[];
  clubColor: string;
}

const ClubQAs: React.FC<ClubQAsProp> = ({ clubId, reviews, clubColor }) => {
  const classes = useStyles({ clubColor });
  const [showViewer, setShowViewer] = useState(true);
  return (
    <>
      <span className={classes.sectionHeading}>{`Questions & Answers`}</span>
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
          {showViewer ? `Post Question` : `View Q&As`}
        </Button>
      </div>

      {showViewer ? (
        <QAViewer reviews={reviews} />
      ) : (
        <QAEditor
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

export default ClubQAs;
