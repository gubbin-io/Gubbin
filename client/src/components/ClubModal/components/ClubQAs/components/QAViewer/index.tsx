import React from "react";
import { Card } from "react-bootstrap";
import { Review } from "../../../../../../constants/types";
import useStyles from "./style";

export interface QAViewerProp {
  reviews: Review[];
}

const QAViewer: React.FC<QAViewerProp> = ({ reviews }) => {
  const classes = useStyles();

  return (
    <>
      {reviews
        .filter(({ title }) => title)
        .map(({ id, rating, title, comment, commentTime }) => (
          <Card className={classes.reviewCard} key={id}>
            <Card.Body className={classes.reviewBody}>
              <div className={classes.bodyHeader}>
                <div className={classes.headerLeft}>
                  <span className={classes.extraLargeText}>{title}</span>
                  <span className={classes.smallText}>
                    {new Date(commentTime).toLocaleString()}
                  </span>
                </div>
                <div className={classes.headerRight}>
                  <span className={classes.mediumText}>Member</span>
                </div>
              </div>
              <Card.Text className={classes.bodyText}>{comment}</Card.Text>
              <hr />
              <div className={classes.bodyHeader}>
                <div className={classes.headerLeft}>
                  <span className={classes.largeText}>Committee Response</span>
                </div>
                <div className={classes.headerRight}>
                  <span className={classes.mediumText}>Organiser</span>
                </div>
              </div>
              <Card.Text className={classes.bodyText}>
                We are very sorry to hear about your experience. Kindly DM us to
                get the issue resolved.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default QAViewer;
